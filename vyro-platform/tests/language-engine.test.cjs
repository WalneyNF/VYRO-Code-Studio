'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {detectLanguage,detectProject,extractSymbols,complete}=require('../src/language-engine.cjs');
assert.equal(detectLanguage('Player.gd').id,'gdscript');assert.equal(detectLanguage('Player.cs').id,'csharp');assert.equal(detectLanguage('foo.ts').id,'typescript');assert.equal(detectLanguage('foo.php').id,'php');assert.equal(detectLanguage('foo.gdshader').id,'shader');
assert.deepEqual(extractSymbols('extends Node\nfunc _ready():\n pass\nsignal health_changed', 'gdscript').map(x=>x.name),['_ready','health_changed']);
assert.deepEqual(extractSymbols('public class Player {}\npublic void Update() {}','csharp').map(x=>x.name),['Player','Update']);
assert.ok(complete('func move_player():\n pass\nfunc move_camera():\n pass','move','gdscript').includes('move_player'));
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'vyro-language-'));try{fs.writeFileSync(path.join(dir,'project.godot'),'');assert.equal(detectProject(dir).id,'godot');fs.unlinkSync(path.join(dir,'project.godot'));for(const n of ['Assets','Packages','ProjectSettings'])fs.mkdirSync(path.join(dir,n));assert.equal(detectProject(dir).id,'unity')}finally{fs.rmSync(dir,{recursive:true,force:true})}
console.log('PASS: detecção de linguagens, Godot/Unity, símbolos e autocomplete local');
