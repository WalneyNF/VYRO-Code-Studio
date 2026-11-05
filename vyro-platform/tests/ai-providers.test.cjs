'use strict';const assert=require('node:assert/strict');const {provider,listModels,chat,sanitize}=require('../src/ai-providers.cjs');
function fake(json,status=200){return async(url,options)=>({ok:status>=200&&status<300,status,headers:{get:()=>null},json:async()=>json})}
(async()=>{
 assert.equal(provider('ollama').kind,'ollama');assert.throws(()=>provider('ollama',{baseUrl:'http://example.com'}));
 assert.deepEqual(await listModels(provider('ollama'),{fetchImpl:fake({models:[{name:'qwen:3b'}]})}),['qwen:3b']);
 assert.deepEqual(await listModels(provider('groq'),{apiKey:'test',fetchImpl:fake({data:[{id:'test-model'}]})}),['test-model']);
 assert.equal(await chat(provider('ollama'),{model:'qwen',messages:[{role:'user',content:'oi'}],fetchImpl:fake({message:{content:'ola'}})}),'ola');
 assert.equal(await chat(provider('openai'),{model:'test',apiKey:'fake',messages:[{role:'user',content:'oi'}],fetchImpl:fake({choices:[{message:{content:'resposta'}}]})}),'resposta');
 assert.equal(await chat(provider('gemini'),{model:'gemini-test',apiKey:'fake',messages:[{role:'user',content:'oi'}],fetchImpl:fake({candidates:[{content:{parts:[{text:'gemini ok'}]}}]})}),'gemini ok');
 await assert.rejects(chat(provider('groq'),{model:'test',messages:[{role:'user',content:'oi'}]}),/Chave/);
 await assert.rejects(listModels(provider('ollama'),{fetchImpl:fake({},429)}),/HTTP 429/);
 assert.equal(sanitize('token sk-1234567890abcd'),'token [REDACTED]');
 console.log('PASS: adaptadores Ollama, Groq/OpenAI-compatible, Gemini, validacao, erros e redacao');
})().catch(e=>{console.error(e);process.exitCode=1});
