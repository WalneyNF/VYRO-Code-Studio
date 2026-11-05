# VYRO Engine Bridges — contratos iniciais

Três pontes registradas: Godot, Unity e Unreal Engine. O comando `project.detect` funciona por inspeção local do projeto. Os demais comandos estão explicitamente marcados como não implementados, evitando simular integrações inexistentes.

## Plano de integração
- Godot: plugin EditorPlugin em GDScript, comunicação autenticada e acesso ao editor, cenas, logs e execução.
- Unity: pacote UPM com EditorWindow e C#, comunicação autenticada com o VYRO, AssetDatabase, Console e Play Mode.
- Unreal: plugin Editor C++/Python conforme versão, integração com subsistemas do editor, logs, projetos e Blueprint via APIs oficiais.
- Skills e MCP devem usar um despachante de comandos comum, validação de esquema, escopo por projeto, confirmação antes de modificar arquivos e trilha de auditoria.
- Não expor porta HTTP sem autenticação, não executar comandos remotos arbitrários, nem editar arquivos binários das engines diretamente.

## Testes
`node tests/engine-bridges.test.cjs`
