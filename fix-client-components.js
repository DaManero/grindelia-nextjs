const fs = require("fs");
const path = require("path");

// Lista de componentes que necesitan 'use client'
const clientComponents = [
  "src/components/Global/FloatingWhatsApp.jsx",
  "src/components/MetaPixel.jsx",
];

clientComponents.forEach((filePath) => {
  const fullPath = path.join(__dirname, filePath);
  try {
    let content = fs.readFileSync(fullPath, "utf8");

    if (!content.includes("'use client'")) {
      content = "'use client';\n\n" + content;
      fs.writeFileSync(fullPath, content, "utf8");
      console.log(`✅ Agregado 'use client' a: ${filePath}`);
    } else {
      console.log(`⏭️ Ya tiene 'use client': ${filePath}`);
    }
  } catch (err) {
    console.log(`❌ Error con ${filePath}: ${err.message}`);
  }
});

console.log("\n✅ Componentes de cliente actualizados!");
