# VYRO Extension SDK — protótipo experimental

## Testar
`node tests/extension-host.test.cjs`

Extensões são diretórios em `extensions/<id>/`, com `vyro-extension.json` e arquivo `main` CommonJS. O manifesto declara `schemaVersion`, `id`, `name`, `version`, `main`, `permissions` e `engines`. O host descobre manifestos, exige aprovação de permissões e ativa processos separados via IPC. Exemplo em `extensions/hello-vyro`.

**AVISO DE SEGURANÇA:** processo separado NÃO significa sandbox. Uma extensão Node maliciosa pode acessar arquivos e rede usando as permissões do usuário do Windows. NÃO instalar extensões de terceiros nesta versão; é necessário isolamento real, assinatura/proveniência, limites de recursos, revogação e mediação de APIs antes de distribuir um marketplace. O controle de permissões atual só limita ações mediadas pelo host, não capacidades diretas do Node.

**Limitações:** ainda não integrado ao processo C++ do Notepad++; comandos são anunciados por IPC mas não aparecem no menu nativo. Não oferece suporte a extensões VS Code. Plugins Notepad++ continuam pertencendo ao carregador nativo original. LSP, DAP e integração com engines estão planejados, não implementados.

## Diretriz prioritÃ¡ria do VYRO Code Studio

**Prioridade mÃ¡xima de desenvolvimento e validaÃ§Ã£o:** compatibilidade com **Godot, Lua, Roblox Studio (Luau), Unity e Unreal Engine**. SÃ£o requisitos: reconhecimento de projetos, suporte correto Ã s linguagens e APIs, autocomplete semÃ¢ntico, diagnÃ³sticos, navegaÃ§Ã£o, execuÃ§Ã£o, depuraÃ§Ã£o quando suportada, integraÃ§Ã£o com os editores, testes por versÃ£o, desempenho e seguranÃ§a. **Lua e Luau devem ser tratados separadamente.**

A matriz de requisitos, etapas e critÃ©rios de aceite estÃ¡ em [Prioridade de compatibilidade](../manuais/PRIORIDADE-COMPATIBILIDADE.md). **Estado atual:** as pontes experimentais detectam apenas Godot, Unity e Unreal; ainda nÃ£o hÃ¡ compatibilidade completa nem adaptadores Lua/Roblox. A documentaÃ§Ã£o nÃ£o representa funcionalidades inexistentes.

CrÃ©ditos VYRO: Walney Moreira Klein â€” walneyk@hotmail.com. Projeto original: Notepad++ â€” Don Ho e colaboradores. Preservar a GPLv3 e os demais avisos aplicÃ¡veis.