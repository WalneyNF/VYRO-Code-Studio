# VYRO Extension SDK — protótipo experimental

## Testar
`node tests/extension-host.test.cjs`

Extensões são diretórios em `extensions/<id>/`, com `vyro-extension.json` e arquivo `main` CommonJS. O manifesto declara `schemaVersion`, `id`, `name`, `version`, `main`, `permissions` e `engines`. O host descobre manifestos, exige aprovação de permissões e ativa processos separados via IPC. Exemplo em `extensions/hello-vyro`.

**AVISO DE SEGURANÇA:** processo separado NÃO significa sandbox. Uma extensão Node maliciosa pode acessar arquivos e rede usando as permissões do usuário do Windows. NÃO instalar extensões de terceiros nesta versão; é necessário isolamento real, assinatura/proveniência, limites de recursos, revogação e mediação de APIs antes de distribuir um marketplace. O controle de permissões atual só limita ações mediadas pelo host, não capacidades diretas do Node.

**Limitações:** ainda não integrado ao processo C++ do Notepad++; comandos são anunciados por IPC mas não aparecem no menu nativo. Não oferece suporte a extensões VS Code. Plugins Notepad++ continuam pertencendo ao carregador nativo original. LSP, DAP e integração com engines estão planejados, não implementados.
