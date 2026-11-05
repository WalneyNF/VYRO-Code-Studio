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
