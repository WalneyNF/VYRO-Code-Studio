# Como criar extensões VYRO

## Estado

O SDK atual é experimental e separado do editor C++. Ele permite descobrir manifestos e ativar processos Node com IPC, mas ainda não adiciona comandos aos menus do Notepad++. Não há marketplace nem sandbox de segurança.

## Exemplo

Consulte `../vyro-platform/extensions/hello-vyro/`. Estrutura:

```text
hello-vyro/
  vyro-extension.json
  index.cjs
```

Manifesto:

```json
{"schemaVersion":1,"id":"hello-vyro","name":"Olá VYRO","version":"0.1.0","main":"index.cjs","permissions":["commands"]}
```

Extensão:

```javascript
if (process.send) process.send({type:'command.register',name:'hello-vyro.sayHello'});
```

## Teste

`node vyro-platform/tests/extension-host.test.cjs`

## Segurança

Processos Node separados **não** são sandbox. Uma extensão maliciosa pode acessar recursos com as permissões do usuário. Não instale código de terceiros antes de existir isolamento efetivo, verificação de proveniência e mediação de capacidades.

## Plugins originais

O carregador nativo de plugins do Notepad++ continua no código original. Não foi alterado nem testado com uma versão VYRO compilada. Compatibilidade futura deverá ser verificada por arquitetura, ABI e versão. Extensões do VS Code não são suportadas automaticamente.

## Diretriz prioritÃ¡ria do VYRO Code Studio

**Prioridade mÃ¡xima de desenvolvimento e validaÃ§Ã£o:** compatibilidade com **Godot, Lua, Roblox Studio (Luau), Unity e Unreal Engine**. SÃ£o requisitos: reconhecimento de projetos, suporte correto Ã s linguagens e APIs, autocomplete semÃ¢ntico, diagnÃ³sticos, navegaÃ§Ã£o, execuÃ§Ã£o, depuraÃ§Ã£o quando suportada, integraÃ§Ã£o com os editores, testes por versÃ£o, desempenho e seguranÃ§a. **Lua e Luau devem ser tratados separadamente.**

A matriz de requisitos, etapas e critÃ©rios de aceite estÃ¡ em [Prioridade de compatibilidade](PRIORIDADE-COMPATIBILIDADE.md). **Estado atual:** as pontes experimentais detectam apenas Godot, Unity e Unreal; ainda nÃ£o hÃ¡ compatibilidade completa nem adaptadores Lua/Roblox. A documentaÃ§Ã£o nÃ£o representa funcionalidades inexistentes.

CrÃ©ditos VYRO: Walney Moreira Klein â€” walneyk@hotmail.com. Projeto original: Notepad++ â€” Don Ho e colaboradores. Preservar a GPLv3 e os demais avisos aplicÃ¡veis.