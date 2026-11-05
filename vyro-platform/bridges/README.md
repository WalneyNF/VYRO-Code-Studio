# VYRO Engine Bridges — contratos iniciais

Três pontes registradas: Godot, Unity e Unreal Engine. O comando `project.detect` funciona por inspeção local do projeto. Os demais comandos estão explicitamente marcados como não implementados, evitando simular integrações inexistentes.

## Plano de integração
- Godot: plugin EditorPlugin em GDScript, comunicação autenticada e acesso ao editor, cenas, logs e execução.
- Unity: pacote UPM com EditorWindow e C#, comunicação autenticada com o VYRO, AssetDatabase, Console e Play Mode.
- Unreal: plugin Editor C++/Python conforme versão, integração com subsistemas do editor, logs, projetos e Blueprint via APIs oficiais.
- Skills e MCP devem usar um despachante de comandos comum, validação de esquema, escopo por projeto, confirmação antes de modificar arquivos e trilha de auditoria.
- Não expor porta HTTP sem autenticação, não executar comandos remotos arbitrários, nem editar arquivos binários das engines diretamente.

## Testes
`node tests/engine-bridges.test.cjs`

## Diretriz prioritÃ¡ria do VYRO Code Studio

**Prioridade mÃ¡xima de desenvolvimento e validaÃ§Ã£o:** compatibilidade com **Godot, Lua, Roblox Studio (Luau), Unity e Unreal Engine**. SÃ£o requisitos: reconhecimento de projetos, suporte correto Ã s linguagens e APIs, autocomplete semÃ¢ntico, diagnÃ³sticos, navegaÃ§Ã£o, execuÃ§Ã£o, depuraÃ§Ã£o quando suportada, integraÃ§Ã£o com os editores, testes por versÃ£o, desempenho e seguranÃ§a. **Lua e Luau devem ser tratados separadamente.**

A matriz de requisitos, etapas e critÃ©rios de aceite estÃ¡ em [Prioridade de compatibilidade](../../manuais/PRIORIDADE-COMPATIBILIDADE.md). **Estado atual:** as pontes experimentais detectam apenas Godot, Unity e Unreal; ainda nÃ£o hÃ¡ compatibilidade completa nem adaptadores Lua/Roblox. A documentaÃ§Ã£o nÃ£o representa funcionalidades inexistentes.

CrÃ©ditos VYRO: Walney Moreira Klein â€” walneyk@hotmail.com. Projeto original: Notepad++ â€” Don Ho e colaboradores. Preservar a GPLv3 e os demais avisos aplicÃ¡veis.