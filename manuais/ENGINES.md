# Compatibilidade prioritária: Godot, Lua, Roblox Studio, Unity e Unreal

**Prioridade máxima:** [requisitos e critérios de aceite](PRIORIDADE-COMPATIBILIDADE.md). Créditos: Walney Moreira Klein — walneyk@hotmail.com. Base original: Notepad++ — Don Ho e colaboradores.

## Godot

Reconhecer `project.godot`, GDScript, C#, shaders, cenas `.tscn`, recursos `.tres`, nós e sinais. Planejar cliente LSP, execução configurável, logs, depuração compatível e plugin `EditorPlugin`. Nunca regravar cenas sem validação e backup.

## Lua

Suportar Lua 5.1, 5.2, 5.3, 5.4 e LuaJIT conforme disponibilidade de ferramentas, reconhecendo diferenças de sintaxe e bibliotecas. Planejar LSP, diagnósticos, formatador, execução por runtime configurado e depuração. Não tratar bibliotecas específicas como parte da linguagem padrão.

## Roblox Studio e Luau

Luau é distinto de Lua. Reconhecer `.luau` e scripts `.lua` em contexto Roblox, tipos, serviços, eventos, APIs Roblox e arquivos de configuração. Planejar integração com ferramentas de sincronização e análise apropriadas ao Roblox Studio, sem presumir acesso direto ao modelo de dados do Studio.

## Unity

Reconhecer estrutura `Assets`, `Packages`, `ProjectSettings`; C#, ShaderLab e HLSL. Planejar análise semântica com assemblies e pacotes do projeto, plugin Editor UPM, logs, assets, Play Mode e diagnóstico de SDKs.

## Unreal Engine

Reconhecer `*.uproject`, C++, headers, macros de reflexão, módulos, assets e shaders. Planejar integração com UBT/UHT, índices de compilação, plugin Editor, logs e APIs para Blueprints. **Nunca editar arquivos binários `.uasset` diretamente como texto.**

## Implementação existente

`vyro-platform/src/engine-bridges.cjs` detecta projetos Godot, Unity e Unreal e aceita `project.detect`; os demais comandos de integração estão bloqueados. Lua e Roblox ainda são metas documentadas. O motor de linguagens existente usa heurísticas, não um LSP real.

## Como verificar

Executar `node vyro-platform/tests/engine-bridges.test.cjs` e `node vyro-platform/tests/language-engine.test.cjs`. Esses testes cobrem somente o código experimental existente; **não validam integração real com os editores**.

Consulte a [matriz de compatibilidade e definição de pronto](PRIORIDADE-COMPATIBILIDADE.md).
