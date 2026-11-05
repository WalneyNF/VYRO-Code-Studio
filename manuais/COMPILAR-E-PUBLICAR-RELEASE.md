# Compilar e publicar VYRO Code Studio para Windows

## Estado atual

**Ainda não há executável VYRO compilado e validado.** O projeto nativo deriva do Notepad++, e os módulos VYRO HTML são protótipos separados, não recursos já integrados ao executável.

## Requisitos

- Windows x64.
- Visual Studio 2022 com a carga de trabalho **Desenvolvimento para desktop com C++**, compilador MSVC v143 e SDK do Windows compatível.
- Solução `PowerEditor/visual.net/notepadPlus.sln`.

## Compilação

No PowerShell, na raiz do projeto:

```powershell
cd D:\VYRO-Code-Studio
powershell -ExecutionPolicy Bypass -File .\compilar-release.ps1
```

O script exige MSVC instalado e compila a solução na configuração `Release|x64`. Em caso de sucesso, cria um ZIP **experimental** em `dist/`. Não publica no GitHub automaticamente.

**Atenção:** o ZIP gerado pelo script é um ponto de partida para validação, não um pacote final garantido: é necessário verificar a presença de DLLs, arquivos de configuração, temas, linguagens e plugins exigidos pelo binário. Não disponibilize a terceiros antes do teste completo em máquina limpa.

## Checklist obrigatório antes de publicar

1. Compilar sem erros e confirmar que o binário é do fork correto.
2. Executar o `.exe` em máquina de testes sem dependências do ambiente de desenvolvimento.
3. Validar abertura, edição, salvamento, busca, plugins e idioma português brasileiro.
4. Verificar quais recursos VYRO estão efetivamente integrados ao C++ (não confundir HTML separado com recurso nativo).
5. Conferir créditos, avisos de copyright, GPLv3, código-fonte correspondente e dependências distribuídas.
6. Criar tag de versão e publicar no GitHub Releases apenas após validação.

## Créditos

**VYRO Code Studio — Walney Moreira Klein — walneyk@hotmail.com**.

Projeto derivado de **Notepad++ — Don Ho e colaboradores**, sob licença **GPLv3**. Não retire avisos de copyright e autoria existentes. O nome VYRO e os créditos adicionais não substituem a atribuição do projeto original.
