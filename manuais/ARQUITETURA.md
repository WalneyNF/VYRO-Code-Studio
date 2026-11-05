# Arquitetura e estado de implementação

## Núcleo existente

O Notepad++ usa C++, Win32, Scintilla, Lexilla e bibliotecas auxiliares. O código principal está em `PowerEditor/src`; solução de compilação em `PowerEditor/visual.net`. Preservar a compatibilidade com plugins nativos é requisito de projeto, ainda não validado para futuras mudanças.

## Módulos VYRO experimentais

- `vyro-ai-center.html`: painel web isolado, cadastros em localStorage, chat Ollama sem streaming.
- `vyro-platform/src/language-engine.cjs`: identificação por extensão, heurísticas de símbolos e autocomplete por palavras; não há parser semântico completo.
- `vyro-platform/src/extension-host.cjs`: descoberta e execução de extensões Node em processos separados; **não oferece isolamento de segurança**.
- `vyro-platform/src/engine-bridges.cjs`: detecção de estrutura de projetos e consulta de capacidades; comandos que exigem integração real são bloqueados.

## Arquitetura pretendida

Núcleo C++/Scintilla -> interface de serviços VYRO -> host de extensões / LSP / DAP / IA / MCP -> adaptadores Godot, Unity e Unreal.

## Requisitos de qualidade

- Não bloquear a thread da interface com análise, IA ou indexação.
- Cancelar tarefas obsoletas; indexar incrementalmente; limitar memória e cache.
- Telemetria local opcional, logs sem segredos e testes de regressão.
- Carregamento sob demanda de servidores de linguagem por projeto.
- Aprovação explícita para operações que modificam projetos ou executam comandos.

## Lacunas antes de produção

Compilação nativa, integração com menus/painéis, protocolo seguro de IPC, autenticação das pontes, isolamento de extensões não confiáveis, cliente LSP/DAP, gerenciamento de segredos e instalador.
