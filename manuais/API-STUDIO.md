# VYRO API Studio — manual de uso

Arquivo: `vyro-api-studio.html`. Acesso: `vyro-ai-center.html` > **API Studio** > **Abrir API Studio**.

## Como executar

1. No Windows, abra o terminal na pasta `D:\VYRO-Code-Studio`.
2. Execute `php -S 127.0.0.1:8765` (PHP do XAMPP).
3. Abra `http://127.0.0.1:8765/vyro-ai-center.html`.
4. Clique no menu **API Studio**.
5. Informe URL e método HTTP (GET, POST, PUT, PATCH, DELETE, HEAD ou OPTIONS), cabeçalhos em JSON e, se necessário, corpo.
6. Clique em **Enviar** para consultar o endpoint. Veja código HTTP, tempo aproximado, headers acessíveis e resposta formatada.
7. Use **Formatar JSON**, **Compactar JSON**, **Validar JSON**, **Copiar resposta** e **Baixar resposta**.
8. Clique em **Salvar requisição** para incluir na coleção local e em **Exportar JSON** para compartilhar o conjunto sem credenciais.

## Exemplo local

Com o Ollama em execução, use `GET http://127.0.0.1:11434/api/tags` e header `{ "Accept": "application/json" }`. A lista de modelos deve aparecer se o navegador puder acessar a API e a origem for permitida.

## Autenticação

O campo Bearer token é mantido somente na memória da página e não entra nas coleções. Não coloque chaves em headers salvos, URLs ou corpos exportados. O recurso não substitui armazenamento seguro de segredos.

## Limitações

Este é um cliente HTTP **de navegador**. APIs externas sem cabeçalhos CORS apropriados podem falhar mesmo que funcionem no Postman. Não existe proxy nativo nem suporte a WebSocket, gRPC, GraphQL especializado, OAuth automático ou testes de contrato nesta versão. A ferramenta ainda não está no menu C++ do aplicativo nativo.

## Distribuição

Quem baixar a branch `feature/vyro-code-studio` recebe os mesmos HTMLs e fontes. Não há instalador Windows VYRO validado. Use o roadmap em `manuais/roadmap.html` para acompanhar a integração nativa.

Créditos: Walney Moreira Klein — walneyk@hotmail.com. Base original Notepad++ — Don Ho e colaboradores. GPLv3.
