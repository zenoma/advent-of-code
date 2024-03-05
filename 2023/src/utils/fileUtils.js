import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

__dirname = path.resolve(__dirname, "..");

export const readInputFile = (filename) => {
  const filePath = path.join(__dirname, filename);
  return readFileSync(filePath, "utf8").trim();
};
