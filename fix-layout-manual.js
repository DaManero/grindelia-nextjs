const fs = require("fs");
const path = require("path");

const layoutsDir = path.join(__dirname, "src", "components", "Layout");
const layouts = fs.readdirSync(layoutsDir).filter((f) => f.endsWith(".jsx"));

layouts.forEach((file) => {
  const filePath = path.join(layoutsDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Eliminar punto y coma inicial si existe
  content = content.replace(/^;\s*\n/, "");

  // Agregar 'use client' si no existe
  if (!content.includes("'use client'")) {
    content = "'use client';\n\n" + content;
  }

  // Agregar import de usePathname si usa pathname
  if (content.includes("useLocation()")) {
    if (!content.includes("usePathname")) {
      content = content.replace(
        'import { useEffect } from "react";',
        'import { useEffect } from "react";\nimport { usePathname } from "next/navigation";'
      );
    }
    content = content.replace(
      /const { pathname } = useLocation\(\);/g,
      "const pathname = usePathname();"
    );
  }

  // Reemplazar Outlet por children
  content = content.replace(/<Outlet\s*\/>/g, "{children}");

  // Agregar children al parámetro de la función
  content = content.replace(
    /export default function (\w+)\(\) {/,
    "export default function $1({ children }) {"
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ ${file}`);
});

console.log("\n✅ Todos los layouts actualizados!");
