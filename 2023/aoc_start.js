import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const dayNumber = process.argv[2];

// Validate the day number
if (!dayNumber || isNaN(dayNumber)) {
  console.error("Invalid day number. Please provide a valid day number.");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, `/src/day-${dayNumber}`, "index.js");
console.log(indexPath);

if (!existsSync(indexPath)) {
  console.error(`No index.js found for day ${dayNumber}.`);
  process.exit(1);
}

import(indexPath);
