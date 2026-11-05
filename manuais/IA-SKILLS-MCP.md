# Provedores de IA, Skills e MCP

## Provedores

A central experimental permite cadastrar nome, tipo, URL, modelo e timeout. A implementação de chat disponível consulta apenas a API local do Ollama. Groq, OpenAI, Gemini e endpoints compatíveis estão cadastráveis, mas não possuem adaptadores funcionais nessa interface.

## Teste Ollama

1. Inicie o Ollama.
2. Confirme o modelo: `ollama list`.
3. Abra `vyro-ai-center.html` e acesse **Provedores de IA**.
4. Ajuste URL `http://localhost:11434`, modelo e timeout.
5. Em **Chat Ollama**, envie uma pergunta. Se houver erro de CORS, use futuramente a ponte nativa autenticada; não desative indiscriminadamente a segurança.

## Skills

Uma Skill descreve uma habilidade reutilizável: nome, descrição, instruções, entradas, saídas e permissões. O cadastro textual já existe; execução controlada, validação e testes de Skills ainda estão planejados.

## MCP

O cadastro permite nome, transporte stdio/HTTP, comando ou URL e argumentos. **Não há conexão MCP funcional nem execução de ferramentas nesta versão.** A arquitetura futura deve usar autenticação, escopo por projeto, confirmação de operações sensíveis, timeout e trilha de auditoria.

## Segredos e privacidade

Nunca coloque tokens de provedores em repositórios, JSON exportado, localStorage ou logs. A versão nativa deverá usar Windows Credential Manager ou DPAPI e restringir o acesso por extensão.

## Diretriz prioritÃ¡ria do VYRO Code Studio

**Prioridade mÃ¡xima de desenvolvimento e validaÃ§Ã£o:** compatibilidade com **Godot, Lua, Roblox Studio (Luau), Unity e Unreal Engine**. SÃ£o requisitos: reconhecimento de projetos, suporte correto Ã s linguagens e APIs, autocomplete semÃ¢ntico, diagnÃ³sticos, navegaÃ§Ã£o, execuÃ§Ã£o, depuraÃ§Ã£o quando suportada, integraÃ§Ã£o com os editores, testes por versÃ£o, desempenho e seguranÃ§a. **Lua e Luau devem ser tratados separadamente.**

A matriz de requisitos, etapas e critÃ©rios de aceite estÃ¡ em [Prioridade de compatibilidade](PRIORIDADE-COMPATIBILIDADE.md). **Estado atual:** as pontes experimentais detectam apenas Godot, Unity e Unreal; ainda nÃ£o hÃ¡ compatibilidade completa nem adaptadores Lua/Roblox. A documentaÃ§Ã£o nÃ£o representa funcionalidades inexistentes.

CrÃ©ditos VYRO: Walney Moreira Klein â€” walneyk@hotmail.com. Projeto original: Notepad++ â€” Don Ho e colaboradores. Preservar a GPLv3 e os demais avisos aplicÃ¡veis.