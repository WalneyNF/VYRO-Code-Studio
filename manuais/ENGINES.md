# Godot, Unity e Unreal Engine

## Reconhecimento de projetos

- Godot: presença de `project.godot`.
- Unity: presença das pastas `Assets`, `Packages` e `ProjectSettings`.
- Unreal: arquivo `*.uproject` na raiz.

O módulo `vyro-platform/src/engine-bridges.cjs` detecta essas estruturas. O comando `project.detect` funciona; execução, inspeção de cenas e acesso a logs estão marcados como pendentes.

## Linguagens

- Godot: GDScript, C# e shaders.
- Unity: C#, ShaderLab e HLSL.
- Unreal: C++, HLSL e scripts auxiliares.

O Language Engine reconhece extensões e alguns símbolos por padrões simples. Autocomplete semântico requer LSP e integração adequada com as APIs das engines.

## Pontes futuras

### Godot
Plugin EditorPlugin em GDScript para cenas, nós, scripts, sinais, execução e logs, respeitando a versão instalada.

### Unity
Pacote UPM em C# para acessar APIs do Unity Editor, AssetDatabase, Console e Play Mode.

### Unreal
Plugin de editor com APIs oficiais C++/Python para atores, assets, logs e integração com Blueprints. Arquivos binários não devem ser editados diretamente.

## Segurança

Comunicação autenticada, permissão por projeto, confirmação de ações destrutivas e backups antes de modificar cenas e recursos.

## Teste atual

`node vyro-platform/tests/engine-bridges.test.cjs`
