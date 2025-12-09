const fs = require("fs");
const path = require("path");

const pagesDir = path.join(__dirname, "src", "components", "Pages");
const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".jsx"));

files.forEach((file) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Verificar si usa hooks de React
  const usesHooks = content.match(
    /use(Effect|State|Context|Ref|Callback|Memo|Reducer|LayoutEffect)/
  );

  if (usesHooks && !content.includes("'use client'")) {
    content = "'use client';\n\n" + content;
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ ${file}`);
  }
});

console.log("\n✅ Páginas actualizadas!");
