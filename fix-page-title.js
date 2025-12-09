const fs = require("fs");
const path = require("path");

function fixPageTitle(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixPageTitle(filePath);
    } else if (file.endsWith(".jsx")) {
      let content = fs.readFileSync(filePath, "utf8");

      // Eliminar imports de PageTitle
      if (content.includes("PageTitle")) {
        content = content.replace(
          /import.*PageTitle.*from.*['"].*PageTitle.*['"];?\s*/g,
          ""
        );
        content = content.replace(
          /import \{ pageTitle \}.*from.*['"].*PageTitle.*['"];?\s*/g,
          ""
        );

        // Eliminar llamadas a pageTitle()
        content = content.replace(/pageTitle\([^)]*\);?\s*/g, "");

        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ ${filePath.replace(__dirname, "")}`);
      }
    }
  });
}

fixPageTitle(path.join(__dirname, "src", "components"));
console.log("\n✅ PageTitle eliminado de todos los componentes!");
