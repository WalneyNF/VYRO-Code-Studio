'use strict';
const fs=require('node:fs'),path=require('node:path');
const registry=require('../bridges/registry.json');
function inspectProject(root){if(typeof root!=='string'||!fs.existsSync(root)||!fs.statSync(root).isDirectory())throw Error('Diretório de projeto inválido');const entries=new Set(fs.readdirSync(root));const detected=[];for(const bridge of registry.bridges){const match=bridge.id==='unreal'?[...entries].some(n=>n.toLowerCase().endsWith('.uproject')):bridge.projectMarkers.every(n=>entries.has(n));if(match)detected.push({id:bridge.id,name:bridge.name,root:path.resolve(root),languages:bridge.languages,availableCommands:bridge.commands.filter(c=>c.supported).map(c=>c.id)})}return detected}
function getCapabilities(id){const bridge=registry.bridges.find(b=>b.id===id);if(!bridge)throw Error('Ponte desconhecida');return structuredClone(bridge)}
function dispatch(id,command,params){const bridge=getCapabilities(id);const cap=bridge.commands.find(c=>c.id===command);if(!cap)throw Error('Comando desconhecido');if(!cap.supported)throw Error('Comando ainda não implementado: '+command);if(command==='project.detect')return inspectProject(params?.root).filter(x=>x.id===id);throw Error('Adaptador não disponível')}
module.exports={inspectProject,getCapabilities,dispatch};
