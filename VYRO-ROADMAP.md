# VYRO Code Studio — Plano de evolução

Base: fork WalneyNF/notepad-plus-plus. Branch de trabalho: feature/vyro-code-studio.
Créditos VYRO: Walney Moreira Klein — walneyk@hotmail.com.
Preservar avisos e obrigações da licença GPL do projeto original.

## Princípios
- Não alterar a branch master nem publicar alterações automaticamente.
- Compilar e testar o editor original antes de integrar funcionalidades ao núcleo.
- Preferir módulos e plugins independentes, com contratos versionados.
- Nunca executar código sugerido pela IA sem confirmação explícita.
- Nunca armazenar tokens em JSON público ou no repositório; usar Windows Credential Manager ou DPAPI.

## Fase 0 — Baseline
- Identificar toolchain MSVC ou MinGW e dependências.
- Compilar x64 Release, iniciar aplicativo e registrar testes de abertura, edição, busca, salvamento e plugins.
- Criar tag local de baseline após build validado.

## Fase 1 — Centro de Configurações
- Painel de configurações: Geral, Aparência, Editor, Projetos, IA, Extensões, Skills, MCP, Segurança e Logs.
- Esquema JSON versionado para preferências sem segredos.
- Persistência atômica, validação de campos e migração de schema.

## Fase 2 — Provedores de IA
- CRUD de provedores: Ollama local, OpenAI-compatible, Groq, OpenAI e Gemini por adaptadores específicos.
- Configurar URL base, modelo, timeout, streaming, limites, parâmetros e teste de conexão.
- Ollama: suportar respostas lentas, cancelamento, progresso, retries limitados e HTTP 500/429.
- Credenciais no armazenamento protegido do Windows; mascarar tokens e redigir logs.
- Chat, seleção de código, explicação, refatoração e diff antes de aplicar alterações.

## Fase 3 — Extensões
- Catálogo de extensões com versão, permissões, habilitar/desabilitar, atualização e isolamento de falhas.
- Compatibilidade com plugins nativos existentes; não executar plugins não confiáveis automaticamente.

## Fase 4 — Skills
- Skills declarativas com manifesto, descrição, entradas, saídas, permissões e testes.
- Biblioteca local, importação/exportação e aprovação de ações que alteram arquivos.

## Fase 5 — MCP
- Cadastro de servidores MCP via stdio ou HTTP suportado; configuração por servidor e lista de ferramentas.
- Permissões por ferramenta e projeto, confirmação para ações sensíveis, timeout e auditoria.
- Não executar comandos arbitrários recebidos de servidores sem autorização.

## Fase 6 — IDE
- Explorador de projetos, terminal, Git, tarefas, diagnósticos, LSP e depuração por integrações.
- Painéis encaixáveis e layouts salvos; testes de regressão e acessibilidade.

## Critérios de aceite
- Cada fase entrega código funcional, documentação, testes e plano de reversão.
- Preservar comportamento do editor original e arquivos do usuário.
- Configurações não contêm segredos em texto puro.
- IA não pode editar/executar silenciosamente; diff e aprovação obrigatórios.

## Diretriz prioritÃ¡ria do VYRO Code Studio

**Prioridade mÃ¡xima de desenvolvimento e validaÃ§Ã£o:** compatibilidade com **Godot, Lua, Roblox Studio (Luau), Unity e Unreal Engine**. SÃ£o requisitos: reconhecimento de projetos, suporte correto Ã s linguagens e APIs, autocomplete semÃ¢ntico, diagnÃ³sticos, navegaÃ§Ã£o, execuÃ§Ã£o, depuraÃ§Ã£o quando suportada, integraÃ§Ã£o com os editores, testes por versÃ£o, desempenho e seguranÃ§a. **Lua e Luau devem ser tratados separadamente.**

A matriz de requisitos, etapas e critÃ©rios de aceite estÃ¡ em [Prioridade de compatibilidade](manuais/PRIORIDADE-COMPATIBILIDADE.md). **Estado atual:** as pontes experimentais detectam apenas Godot, Unity e Unreal; ainda nÃ£o hÃ¡ compatibilidade completa nem adaptadores Lua/Roblox. A documentaÃ§Ã£o nÃ£o representa funcionalidades inexistentes.

CrÃ©ditos VYRO: Walney Moreira Klein â€” walneyk@hotmail.com. Projeto original: Notepad++ â€” Don Ho e colaboradores. Preservar a GPLv3 e os demais avisos aplicÃ¡veis.