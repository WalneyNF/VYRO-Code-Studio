$ErrorActionPreference='Continue'
$root=Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root
$tests=@('test-ai-center.cjs','vyro-platform/tests/ai-providers.test.cjs','vyro-platform/tests/language-engine.test.cjs','vyro-platform/tests/extension-host.test.cjs','vyro-platform/tests/engine-bridges.test.cjs')
$results=@()
foreach($test in $tests){
  Write-Host ("Testando "+$test) -ForegroundColor Cyan
  $output= & node $test 2>&1 | Out-String
  $code=$LASTEXITCODE
  $results+= [pscustomobject]@{test=$test;passed=($code -eq 0);exitCode=$code;output=$output.Trim()}
  Write-Host $output
}
$dir=Join-Path $root 'test-results'
New-Item -ItemType Directory -Path $dir -Force | Out-Null
$report=[pscustomobject]@{timestamp=(Get-Date).ToString('o');machine=$env:COMPUTERNAME;tests=$results;allPassed=(@($results|Where-Object {-not $_.passed}).Count -eq 0)}
$report|ConvertTo-Json -Depth 10|Set-Content -Path (Join-Path $dir 'ultimo-teste.json') -Encoding UTF8
Write-Host ('Relatorio: '+(Join-Path $dir 'ultimo-teste.json'))
if(-not $report.allPassed){exit 1}
