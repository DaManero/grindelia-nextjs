const fs = require("fs");
const path = require("path");

function fixLinks(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixLinks(filePath);
    } else if (file.endsWith(".jsx")) {
      let content = fs.readFileSync(filePath, "utf8");

      // Reemplazar <Link to= por <Link href=
      if (content.includes("<Link") && content.includes(" to=")) {
        const original = content;
        content = content.replace(/<Link\s+([^>]*)\s+to=/g, "<Link $1 href=");
        content = content.replace(/<Link\s+to=/g, "<Link href=");

        if (content !== original) {
          fs.writeFileSync(filePath, content, "utf8");
          console.log(`✅ ${filePath.replace(__dirname, "")}`);
        }
      }
    }
  });
}

fixLinks(path.join(__dirname, "src", "components"));
console.log("\n✅ Todos los Links actualizados!");
