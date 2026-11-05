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
