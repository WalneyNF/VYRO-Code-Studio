# VYRO Code Studio

**Editor e plataforma de desenvolvimento em evolução — projeto derivado do Notepad++.**

> **Estado:** experimental. O editor C++ original ainda não foi compilado nem integrado aos módulos VYRO. Não existe instalador VYRO final nesta etapa.

**Desenvolvimento e personalização:** Walney Moreira Klein — walneyk@hotmail.com  
**Projeto original:** [Notepad++](https://github.com/notepad-plus-plus/notepad-plus-plus), de Don Ho e colaboradores.

## O que é?

O VYRO Code Studio pretende combinar o editor leve Notepad++ com ferramentas para desenvolvimento web e jogos, especialmente Godot, Unity e Unreal Engine. A base original preserva o editor Scintilla e o ecossistema de plugins nativos; os novos módulos experimentais estão em `vyro-platform/`.

## Recursos já disponíveis (experimentais)

- `vyro-ai-center.html`: central web de cadastros de provedores IA, Skills e servidores MCP, com armazenamento local no navegador e chat Ollama sujeito às restrições de CORS.
- `vyro-platform/src/language-engine.cjs`: detecção de extensões, identificação básica de símbolos e sugestões locais; **não** substitui LSP/IntelliSense.
- `vyro-platform/src/extension-host.cjs`: descoberta e ativação de extensões de demonstração; **não** é sandbox segura e não deve executar extensões não confiáveis.
- `vyro-platform/src/engine-bridges.cjs`: detecção de projetos Godot, Unity e Unreal; comunicação real com editores ainda pendente.

## Instalação para testes de desenvolvimento

**Pré-requisitos:** Windows, Git e Node.js para os módulos experimentais. Para compilar o Notepad++ é necessário Visual Studio 2022 com ferramentas C++ v143, ou toolchain MinGW-w64/MSYS2 completo, conforme [BUILD.md](BUILD.md).

1. Clone o fork: `git clone https://github.com/WalneyNF/notepad-plus-plus.git`.
2. Entre na pasta clonada.
3. Abra `vyro-ai-center.html` no navegador (se presente na versão baixada). O navegador poderá bloquear chamadas ao Ollama por CORS.
4. Execute os testes: `node vyro-platform/tests/language-engine.test.cjs`, `node vyro-platform/tests/extension-host.test.cjs` e `node vyro-platform/tests/engine-bridges.test.cjs`.
5. Para compilar o editor nativo, abra `PowerEditor/visual.net/notepadPlus.sln` no Visual Studio 2022, selecione Release/x64 e compile a solução. Consulte o [guia de compilação](manuais/INSTALACAO-E-COMPILACAO.md).

**Atenção:** a interface web e os módulos Node não estão embutidos no executável do Notepad++ neste estágio. Não há promessa de funcionamento completo como IDE.

## Documentação em português

- [Índice dos manuais](manuais/README.md)
- [Instalação e compilação](manuais/INSTALACAO-E-COMPILACAO.md)
- [Licença e créditos](manuais/LICENCA-E-CREDITOS.md)
- [Arquitetura e estado de implementação](manuais/ARQUITETURA.md)
- [Provedores de IA, Skills e MCP](manuais/IA-SKILLS-MCP.md)
- [Desenvolvimento de extensões](manuais/EXTENSOES.md)
- [Integração Godot, Unity e Unreal](manuais/ENGINES.md)
- [Plano de evolução](VYRO-ROADMAP.md)

## Licença

**Não é MIT.** O projeto derivado mantém a licença principal **GNU GPL versão 3**, com os esclarecimentos e exceções indicados no arquivo [LICENSE](LICENSE). Dependências podem ter licenças próprias. Consulte [Licença e créditos](manuais/LICENCA-E-CREDITOS.md). O texto jurídico original não foi alterado.

## Contribuições

São bem-vindos relatórios de bugs, documentação, traduções e propostas de funcionalidades. Antes de enviar alterações, execute os testes e leia [CONTRIBUTING.md](CONTRIBUTING.md) e [AGENTS.md](AGENTS.md), especialmente para contribuições ao projeto original.

Este fork não é uma versão oficial do Notepad++ e não deve ser confundido com lançamentos assinados pelo projeto original.
