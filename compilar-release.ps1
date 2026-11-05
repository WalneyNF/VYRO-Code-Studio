param([string]$Configuration='Release',[string]$Platform='x64')
$ErrorActionPreference='Stop'
$root=Split-Path -Parent $MyInvocation.MyCommand.Path
$solution=Join-Path $root 'PowerEditor\visual.net\notepadPlus.sln'
$vswhere='C:\Program Files (x86)\Microsoft Visual Studio\Installer\vswhere.exe'
if(!(Test-Path $vswhere)){throw 'Visual Studio Installer (vswhere) nao encontrado. Instale Visual Studio 2022 com Desenvolvimento para desktop com C++ e toolset v143.'}
$installation=(& $vswhere -latest -products * -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath | Select-Object -First 1)
if(!$installation){throw 'MSVC C++ x64/x86 ausente. No Visual Studio Installer, instale Desenvolvimento para desktop com C++ e MSVC v143.'}
$msbuild=Join-Path $installation 'MSBuild\Current\Bin\MSBuild.exe'
if(!(Test-Path $msbuild)){throw "MSBuild nao encontrado em $installation"}
if(!(Test-Path $solution)){throw "Solucao ausente: $solution"}
Write-Host "Compilando $solution [$Configuration|$Platform]" -ForegroundColor Cyan
& $msbuild $solution /m /restore "/p:Configuration=$Configuration;Platform=$Platform" /verbosity:minimal /nologo
if($LASTEXITCODE -ne 0){throw "Falha MSBuild: $LASTEXITCODE. Nenhuma Release foi publicada."}
$exe=Get-ChildItem (Join-Path $root 'PowerEditor') -Filter 'notepad++.exe' -File -Recurse | Where-Object {$_.FullName -match 'Release' -and $_.FullName -match 'x64|bin'} | Sort-Object LastWriteTime -Descending | Select-Object -First 1
if(!$exe){throw 'Build finalizou, mas executavel Release x64 nao foi encontrado. Verifique os caminhos de saida antes de empacotar.'}
$releaseDir=Join-Path $root 'dist\VYRO-Code-Studio-Windows-x64'
New-Item -ItemType Directory -Force -Path $releaseDir | Out-Null
Copy-Item $exe.FullName (Join-Path $releaseDir 'VYRO-Code-Studio.exe') -Force
Copy-Item (Join-Path $root 'LICENSE') $releaseDir -Force
Copy-Item (Join-Path $root 'vyro-ai-center.html') $releaseDir -Force
Copy-Item (Join-Path $root 'vyro-api-studio.html') $releaseDir -Force
Copy-Item (Join-Path $root 'vyro-split-ai-lab.html') $releaseDir -Force
Copy-Item (Join-Path $root 'vyro-test-center.html') $releaseDir -Force
Copy-Item (Join-Path $root 'vyro-theme.css') $releaseDir -Force
Copy-Item (Join-Path $root 'vyro-theme.js') $releaseDir -Force
$nativeLang=Join-Path $root 'PowerEditor\installer\nativeLang\brazilian_portuguese.xml'
if(Test-Path $nativeLang){Copy-Item $nativeLang (Join-Path $releaseDir 'brazilian_portuguese.xml') -Force}
@'
VYRO CODE STUDIO — BUILD EXPERIMENTAL
Walney Moreira Klein — walneyk@hotmail.com
Base original: Notepad++ — Don Ho e colaboradores.
Licenca: GPLv3. Veja LICENSE.
ATENCAO: os modulos HTML ainda sao laboratorios separados do executavel C++.
Esta compilacao nao significa que os recursos VYRO estejam integrados ao menu nativo.
'@ | Set-Content (Join-Path $releaseDir 'LEIA-ME.txt') -Encoding UTF8
$zip=Join-Path $root 'dist\VYRO-Code-Studio-Windows-x64.zip'
if(Test-Path $zip){Remove-Item $zip -Force}
Compress-Archive -Path (Join-Path $releaseDir '*') -DestinationPath $zip
Write-Host "ZIP experimental gerado: $zip" -ForegroundColor Green
Write-Host 'Verifique inicializacao, plugins, arquivos de idioma e recursos antes de publicar como Release.'
