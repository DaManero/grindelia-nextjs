const fs = require("fs");
const path = require("path");

function removeUseClient(dir) {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory() && item !== "node_modules") {
      removeUseClient(itemPath);
    } else if (item === "page.js") {
      let content = fs.readFileSync(itemPath, "utf8");

      if (content.includes("'use client'")) {
        content = content.replace(/'use client';\s*/g, "");
        fs.writeFileSync(itemPath, content, "utf8");
        console.log(`✅ ${itemPath.replace(__dirname, "")}`);
      }
    }
  });
}

removeUseClient(path.join(__dirname, "src", "app"));
console.log('\n✅ "use client" eliminado de todas las páginas!');
