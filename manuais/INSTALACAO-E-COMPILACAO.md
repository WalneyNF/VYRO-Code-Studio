# Instalação, compilação e primeiros testes — Windows

## 1. Estado do projeto

Não há instalador VYRO final nem compilação nativa validada. O código original do Notepad++ e os módulos experimentais coexistem no repositório.

## 2. Requisitos

- Windows; Git.
- Node.js para executar os testes dos módulos experimentais.
- Para compilar o editor: Visual Studio 2022 17.5+ com desenvolvimento para desktop em C++, compilador MSVC v143 e Windows SDK; ou MinGW-w64/MSYS2 com ferramentas GCC e mingw32-make.
- Espaço em disco para fontes, objetos e dependências.

## 3. Baixar o código

Abra PowerShell e execute:

```powershell
git clone https://github.com/WalneyNF/notepad-plus-plus.git
cd notepad-plus-plus
```

O repositório remoto pode não conter mudanças locais ainda não publicadas. Neste momento, os módulos VYRO foram criados na cópia de desenvolvimento `D:\\VYRO-Code-Studio`.

## 4. Testar os módulos experimentais

```powershell
node vyro-platform/tests/language-engine.test.cjs
node vyro-platform/tests/extension-host.test.cjs
node vyro-platform/tests/engine-bridges.test.cjs
node test-ai-center.cjs
```

Abra `vyro-ai-center.html` no navegador para conhecer a central. Para testar Ollama, inicie o serviço, confirme o modelo instalado e verifique a política CORS da origem. Não exponha a porta 11434 à internet.

## 5. Compilar o editor original no Visual Studio

1. Instale o Visual Studio 2022 com o workload **Desenvolvimento para desktop com C++**.
2. Confirme MSVC v143 e Windows SDK.
3. Abra `PowerEditor\\visual.net\\notepadPlus.sln`.
4. Selecione `Release` e `x64`.
5. Use **Compilar > Compilar Solução**.
6. Verifique os erros e a saída gerada. A solução também compila as bibliotecas Scintilla e Lexilla.
7. Abra o executável produzido e teste abertura, edição, pesquisa e salvamento de arquivos.

## 6. Alternativa MinGW-w64

Com um ambiente MSYS2/MinGW-w64 completo, adicione a pasta `bin` do compilador ao PATH, entre em `PowerEditor\\gcc` e execute `mingw32-make`. Consulte `../BUILD.md` para instruções e limitações específicas.

## 7. Problemas comuns

- `msbuild` não encontrado: instale ferramentas de compilação e use Developer PowerShell do Visual Studio.
- `g++` não encontrado: confirme a instalação do toolchain MinGW-w64 e o PATH.
- Erros de SDK: instale o Windows SDK exigido pelo projeto.
- Chat Ollama falha: verifique serviço, modelo, URL, timeout e CORS.
- Plugins incompatíveis: verifique arquitetura x64/x86, versão e origem confiável.

## 8. Antes de distribuir

Compile, execute testes, inclua código-fonte correspondente, licença, créditos e aviso de versão modificada. Não distribua uma compilação experimental como versão estável.

## Diretriz prioritÃ¡ria do VYRO Code Studio

**Prioridade mÃ¡xima de desenvolvimento e validaÃ§Ã£o:** compatibilidade com **Godot, Lua, Roblox Studio (Luau), Unity e Unreal Engine**. SÃ£o requisitos: reconhecimento de projetos, suporte correto Ã s linguagens e APIs, autocomplete semÃ¢ntico, diagnÃ³sticos, navegaÃ§Ã£o, execuÃ§Ã£o, depuraÃ§Ã£o quando suportada, integraÃ§Ã£o com os editores, testes por versÃ£o, desempenho e seguranÃ§a. **Lua e Luau devem ser tratados separadamente.**

A matriz de requisitos, etapas e critÃ©rios de aceite estÃ¡ em [Prioridade de compatibilidade](PRIORIDADE-COMPATIBILIDADE.md). **Estado atual:** as pontes experimentais detectam apenas Godot, Unity e Unreal; ainda nÃ£o hÃ¡ compatibilidade completa nem adaptadores Lua/Roblox. A documentaÃ§Ã£o nÃ£o representa funcionalidades inexistentes.

CrÃ©ditos VYRO: Walney Moreira Klein â€” walneyk@hotmail.com. Projeto original: Notepad++ â€” Don Ho e colaboradores. Preservar a GPLv3 e os demais avisos aplicÃ¡veis.