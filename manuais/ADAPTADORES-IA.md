# Adaptadores de IA VYRO - primeira implementacao

Modulo: `vyro-platform/src/ai-providers.cjs`.

Implementado: presets Ollama, Groq, OpenRouter, OpenAI e Gemini; listagem de modelos; requisicao de chat sem streaming; timeout, cancelamento, erro HTTP e validacao basica de URL. Os testes usam respostas simuladas e nao exigem chaves.

Exemplo Node.js:

```js
const {provider,listModels,chat}=require('../vyro-platform/src/ai-providers.cjs');
(async()=>{
 const p=provider('ollama');
 const modelos=await listModels(p);
 console.log(modelos);
 if(modelos.length) console.log(await chat(p,{model:modelos[0],messages:[{role:'user',content:'Explique Lua e Luau'}]}));
})().catch(console.error);
```

Para outros provedores: `provider('groq')`, `provider('openrouter')`, `provider('openai')` ou `provider('gemini')`. Informe `apiKey` apenas em memoria ou armazenamento protegido. Nunca grave chaves em JSON ou Git. O modulo ainda nao integra o editor C++ ou a central HTML, nao possui streaming nem host MCP funcional. OpenCode e Codex sao agentes e requerem integracao propria.

Teste: `node vyro-platform/tests/ai-providers.test.cjs`.

Proximas etapas: teste de conexao real com Ollama, streaming, gerenciamento protegido de credenciais, UI integrada, logs, monitoramento de recursos e compilacao do editor.

Creditos: Walney Moreira Klein - walneyk@hotmail.com. Base original Notepad++ - Don Ho e colaboradores. Preservar LICENSE.
