import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";
const protectedNames = new Set([
  ".git",
  ".github",
  ".env",
  ".env.example",
  ".env.local",
  ".gitignore",
  "data",
  "node_modules",
  "out",
  "package.json",
  "package-lock.json",
  "public",
  "scripts",
  "src",
  "README.md",
  "next.config.ts",
  "tsconfig.json",
  "eslint.config.mjs",
  "postcss.config.mjs",
  "AGENTS.md",
  "CLAUDE.md",
]);

if (!existsSync(outDir)) {
  throw new Error("Missing out/. Run next build first.");
}

for (const name of readdirSync(outDir)) {
  if (name.startsWith("__next.") || name.endsWith(".txt")) {
    continue;
  }
  if (protectedNames.has(name)) {
    throw new Error(`Refusing to copy ${name} over source files`);
  }
  const dest = join(".", name);
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(outDir, name), dest, { recursive: true });
}

console.log("Copied GitHub Pages files to repository root.");
