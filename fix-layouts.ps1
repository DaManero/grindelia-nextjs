$layoutFiles = Get-ChildItem -Path ".\src\components\Layout" -Include "*.jsx" -File

foreach ($file in $layoutFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Reemplazar <Outlet /> por {children}
    $content = $content -replace '<Outlet\s*/>', '{children}'
    
    # Agregar children como parámetro si no existe
    if ($content -match 'export default function (\w+)\(\)') {
        $functionName = $Matches[1]
        $content = $content -replace "export default function $functionName\(\)", "export default function $functionName({ children })"
    }
    
    # Agregar import de usePathname si usa pathname
    if ($content -match 'const \{ pathname \} = useLocation\(\)') {
        $content = $content -replace 'const \{ pathname \} = useLocation\(\)', 'const pathname = usePathname()'
        # Agregar import si no existe
        if ($content -notmatch 'usePathname') {
            $content = $content -replace '(import .* from [''"]react[''"];)', "`$1`nimport { usePathname } from 'next/navigation';"
        }
    }
    
    # Asegurar que tiene 'use client'
    if ($content -notmatch "'use client'") {
        $content = "'use client';`n`n" + $content
    }
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "✅ Arreglado: $($file.Name)"
}

Write-Host "`n✅ Layouts actualizados!"