// Charm the Commuter: Forecast a City That Isn't
// One-line weather forecast (1-140 chars) for an invented city.
// Writes the line to /output/entry.txt and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Puddleton: showers until 8:59, then sunshine — the only city where the rain clocks off before you do.";

if (LINE.length === 0 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error("entry must be 1-140 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
