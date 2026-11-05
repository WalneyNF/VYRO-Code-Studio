'use strict';
const fs=require('node:fs');
const path=require('node:path');
const {fork}=require('node:child_process');
const {EventEmitter}=require('node:events');
const ID=/^[a-z][a-z0-9-]{1,63}$/;
function validateManifest(m){if(!m||m.schemaVersion!==1||typeof m.id!=='string'||!ID.test(m.id)||typeof m.name!=='string'||!m.name.trim()||typeof m.main!=='string'||path.isAbsolute(m.main)||m.main.split(/[\\/]/).includes('..')||!m.main.endsWith('.cjs')||!Array.isArray(m.permissions)||m.permissions.some(p=>!['commands','workspace.read','workspace.write','network','terminal','ai','mcp'].includes(p)))throw Error('Manifesto inválido');return m}
class ExtensionHost extends EventEmitter{
 constructor(root){super();this.root=path.resolve(root);this.registry=new Map()}
 discover(){const out=[];if(!fs.existsSync(this.root))return out;for(const name of fs.readdirSync(this.root)){const dir=path.join(this.root,name);if(!fs.statSync(dir).isDirectory())continue;const manifestFile=path.join(dir,'vyro-extension.json');if(!fs.existsSync(manifestFile))continue;try{const m=validateManifest(JSON.parse(fs.readFileSync(manifestFile,'utf8')));if(m.id!==name)throw Error('ID diferente da pasta');const entry=path.resolve(dir,m.main);if(!entry.startsWith(dir+path.sep)||!fs.statSync(entry).isFile())throw Error('Entrada inválida');out.push(m)}catch(e){this.emit('error',{extension:name,message:e.message})}}return out}
 async activate(id,approvedPermissions=[]){if(this.registry.has(id))throw Error('Extensão já ativa');const manifest=this.discover().find(m=>m.id===id);if(!manifest)throw Error('Extensão inexistente');for(const p of manifest.permissions)if(!approvedPermissions.includes(p))throw Error('Permissão não aprovada: '+p);const dir=path.join(this.root,id);const child=fork(path.join(dir,manifest.main),[],{cwd:dir,stdio:['ignore','ignore','ignore','ipc'],env:{PATH:process.env.PATH||'',VYRO_EXTENSION_ID:id},execArgv:[]});this.registry.set(id,child);child.on('message',msg=>{if(msg&&msg.type==='command.register'&&manifest.permissions.includes('commands')&&typeof msg.name==='string')this.emit('command',{extension:id,name:msg.name});else this.emit('message',{extension:id,data:msg})});child.on('exit',(code)=>{this.registry.delete(id);this.emit('exit',{extension:id,code})});return {id,pid:child.pid}}
 deactivate(id){const p=this.registry.get(id);if(!p)return false;p.kill();this.registry.delete(id);return true}
 shutdown(){for(const id of [...this.registry.keys()])this.deactivate(id)}
}
module.exports={ExtensionHost,validateManifest};
