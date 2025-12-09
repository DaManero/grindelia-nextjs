# Obtener todos los archivos .jsx
$files = Get-ChildItem -Path ".\src\components" -Recurse -Include "*.jsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Reemplazar imports simples de Link
    if ($content -match 'import \{ Link \} from [''"]react-router-dom[''"]') {
        $content = $content -replace 'import \{ Link \} from [''"]react-router-dom[''"]', 'import Link from "next/link"'
        $modified = $true
    }
    
    # Reemplazar Link con useLocation
    if ($content -match 'import \{ Link, useLocation \} from [''"]react-router-dom[''"]') {
        $content = $content -replace 'import \{ Link, useLocation \} from [''"]react-router-dom[''"]', "import Link from `"next/link`";`nimport { usePathname } from `"next/navigation`""
        $content = $content -replace 'const \{ pathname \} = useLocation\(\)', 'const pathname = usePathname()'
        $content = $content -replace 'useLocation\(\)', 'usePathname()'
        $modified = $true
    }
    
    # Reemplazar solo useLocation
    if ($content -match 'import \{ useLocation \} from [''"]react-router-dom[''"]') {
        $content = $content -replace 'import \{ useLocation \} from [''"]react-router-dom[''"]', 'import { usePathname } from "next/navigation"'
        $content = $content -replace 'const \{ pathname \} = useLocation\(\)', 'const pathname = usePathname()'
        $content = $content -replace 'useLocation\(\)', 'usePathname()'
        $modified = $true
    }
    
    # Reemplazar Outlet
    if ($content -match 'import \{ Outlet.*\} from [''"]react-router-dom[''"]') {
        $content = $content -replace 'import \{ Outlet.*\} from [''"]react-router-dom[''"]', ''
        $modified = $true
    }
    
    # Agregar 'use client' si no existe y usa componentes de cliente
    if (($content -match 'import Link from') -or ($content -match 'usePathname')) {
        if ($content -notmatch "'use client'") {
            $content = "'use client';`n`n" + $content
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "✅ Migrado: $($file.Name)"
    }
}

Write-Host "`n✅ Migración completada!"