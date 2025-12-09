const fs = require("fs");
const path = require("path");

function fixEnvVars(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixEnvVars(filePath);
    } else if (file.endsWith(".jsx") || file.endsWith(".js")) {
      let content = fs.readFileSync(filePath, "utf8");

      // Reemplazar import.meta.env.BASE_URL por cadena vacía o /
      if (content.includes("import.meta.env.BASE_URL")) {
        content = content.replace(/import\.meta\.env\.BASE_URL/g, '""');
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ ${filePath.replace(__dirname, "")}`);
      }

      // También reemplazar process.env.PUBLIC_URL si existe
      if (content.includes("process.env.PUBLIC_URL")) {
        content = content.replace(/process\.env\.PUBLIC_URL/g, '""');
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ ${filePath.replace(__dirname, "")}`);
      }
    }
  });
}

fixEnvVars(path.join(__dirname, "src"));
console.log("\n✅ Variables de entorno actualizadas!");
