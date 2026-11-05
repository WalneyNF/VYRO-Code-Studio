# Como usar o Roadmap do VYRO

Arquivos: `manuais/roadmap.html` (painel) e `manuais/roadmap.json` (fonte de dados e continuidade).

## Abrir

Por seguranca, navegadores podem impedir que um HTML aberto por `file://` leia outro arquivo local com `fetch`. Execute a partir da raiz do projeto um servidor local, por exemplo com PHP instalado:

```powershell
cd D:\VYRO-Code-Studio
php -S 127.0.0.1:8765
```

Depois abra `http://127.0.0.1:8765/manuais/roadmap.html`. Se PHP nao estiver no PATH, use o executavel PHP da sua instalacao XAMPP ou outro servidor estatico local.

## Editar e continuar

1. Clique em **Editar** para modificar titulo, categoria, prioridade, estado, commit e observacoes.
2. Use **Nova tarefa** e **Registrar alteracao** para manter o historico.
3. As edicoes sao guardadas no armazenamento local do navegador; **isso nao atualiza o arquivo JSON automaticamente**.
4. Clique em **Salvar no arquivo JSON** e escolha `manuais/roadmap.json` quando o navegador suportar a API de arquivos. Caso contrario, **Exportar JSON** baixa uma copia: substitua manualmente o arquivo antigo pelo exportado.
5. Para retomar em outra maquina ou conversa, importe o JSON exportado. Envie o `roadmap.json` atualizado ao assistente.
6. O painel nao identifica automaticamente novos commits ou mudancas de codigo; atualize as tarefas ao concluir cada etapa.

## Estados

- **Concluido**: implementado e verificado no escopo registrado.
- **Parcial**: existe prototipo ou modulo, mas falta integracao ou testes finais.
- **Pendente**: nao implementado.

Progresso ponderado: concluido = 1, parcial = 0,5, pendente = 0. O percentual representa o inventario de tarefas, nao a prontidao do produto.

Creditos: Walney Moreira Klein - walneyk@hotmail.com. Base Notepad++: Don Ho e colaboradores, GPLv3.
