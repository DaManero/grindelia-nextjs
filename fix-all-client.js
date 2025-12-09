const fs = require("fs");
const path = require("path");

function addUseClient(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      addUseClient(filePath);
    } else if (file.endsWith(".jsx")) {
      let content = fs.readFileSync(filePath, "utf8");

      // Si usa hooks, Link, o componentes interactivos
      const needsClient = content.match(
        /use(Effect|State|Context|Ref|Callback|Memo|Reducer|LayoutEffect|Pathname|Router|SearchParams)|onClick|onChange|onSubmit/
      );

      if (needsClient && !content.includes("'use client'")) {
        content = "'use client';\n\n" + content;
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ ${filePath.replace(__dirname, "")}`);
      }
    }
  });
}

addUseClient(path.join(__dirname, "src", "components"));
console.log("\n✅ Todos los componentes actualizados!");
