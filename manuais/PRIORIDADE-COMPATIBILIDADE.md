# PRIORIDADE MÁXIMA — Compatibilidade com engines e linguagens

**Diretriz principal do VYRO Code Studio:** oferecer integração de nível profissional com **Godot, Lua, Roblox Studio (Luau), Unity e Unreal Engine**, sem comprometer desempenho, estabilidade, segurança e compatibilidade com o editor original.

**Créditos:** Walney Moreira Klein — walneyk@hotmail.com. **Base original:** Notepad++ — Don Ho e colaboradores. Licença principal: GPLv3 conforme LICENSE.

## Distinções essenciais

- **Godot** é uma engine; GDScript, C# e shaders são linguagens relevantes.
- **Lua** é uma linguagem com versões 5.1–5.4 e ecossistemas LuaJIT; não equivale automaticamente a Luau.
- **Roblox Studio** é uma ferramenta de desenvolvimento; **Luau** é sua linguagem principal, com sistema de tipos e APIs Roblox específicas.
- **Unity** é uma engine com C#, APIs do Editor, assets, assemblies e pacotes UPM.
- **Unreal Engine** é uma engine com C++, reflexão via UHT, Blueprints, assets e sistemas de build próprios.

## Critérios de compatibilidade

1. **Projetos:** detectar, abrir, indexar, navegar e atualizar sem corromper arquivos, inclusive caminhos com espaços e Unicode.
2. **Edição:** syntax highlighting correto, indentação, formatação, snippets, símbolos, referências, renomeação, diagnósticos e autocomplete semântico por LSP ou adaptadores específicos.
3. **APIs:** completar membros, métodos, eventos e parâmetros usando versão real do SDK, projeto e bibliotecas; não confundir nomes locais com APIs da engine.
4. **Execução:** configurar caminhos de executáveis, iniciar/parar tarefas, coletar saída, detectar erros e oferecer cancelamento/timeout.
5. **Depuração:** breakpoints, pilha, variáveis e avaliação quando houver protocolo ou integração suportados, com indicação clara de limitações.
6. **Integração com editor:** comunicação autenticada com plugins oficiais/locais, estado do projeto, seleção, recursos e logs.
7. **Versionamento:** matriz por versões das engines, SDKs e linguagens; testes automatizados e reais por versão.
8. **Segurança:** backups, permissões, isolamento, confirmação de ações destrutivas e nunca executar código de IA silenciosamente.
9. **Desempenho:** indexação incremental, cache invalidável, análise assíncrona, cancelamento de requisições antigas e limite de recursos.
10. **Experiência:** configuração guiada, diagnóstico de instalação e manuais em português brasileiro.

## Matriz de requisitos por plataforma

| Plataforma | Linguagem | Integração desejada | Dependência principal |
|---|---|---|---|
| Godot | GDScript, C#, shader | LSP, DAP quando disponível, EditorPlugin, cenas, sinais, execução | Godot instalado e projeto válido |
| Lua | Lua 5.x / LuaJIT | parser, LSP, formatador, depurador e runtime configurável | runtime e ferramentas escolhidas |
| Roblox Studio | Luau | análise tipada, Roblox API, sincronização, testes e Studio | ferramentas compatíveis com Studio e projeto |
| Unity | C#, ShaderLab/HLSL | Roslyn/LSP, UPM Editor, assemblies, logs, Play Mode | Unity Editor e SDKs compatíveis |
| Unreal | C++, shaders, Blueprints | clangd ou ferramentas adequadas, UBT/UHT, plugin Editor, logs, assets | Unreal Editor e toolchain C++ |

## Etapas prioritárias

**P0:** compilar VYRO nativo; inventariar versões instaladas; criar detecção de Godot, Lua, Roblox, Unity e Unreal; testes de arquivos e projetos reais.

**P1:** syntax highlighting confiável, LSP por linguagem, autocomplete contextual, diagnósticos, navegação e configurações por projeto.

**P2:** pontes funcionais e autenticadas com os editores, execução, logs, sincronização e testes de integração.

**P3:** depuração, recursos avançados de projeto, extensões especializadas e integração segura com IA/Skills/MCP.

## Estado atual e limites

Apenas Godot, Unity e Unreal têm detecção básica de projeto no módulo Node existente. A análise de símbolos é heurística, não semântica. **Lua e Roblox Studio ainda não possuem adaptadores implementados**. Não existe integração nativa completa com nenhum dos cinco ecossistemas. Esta documentação define requisitos, não certifica funcionalidades prontas.

## Definição de pronto

Cada integração exige testes reais em versões documentadas, cenários de erro, performance, abertura/salvamento sem perda, diagnóstico e manual de configuração. Um botão ou cadastro isolado não conta como compatibilidade implementada.
