// Roast Your Own Agent — make.fun entry
// Writes a single roast line (<= 200 chars) to /output/entry.txt.
// Node 22, stdlib only: the grader runs with no network and no third-party packages.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { Buffer } from "node:buffer";

const ROAST =
  "My agent spent an hour planning the perfect API call, then reported the results of a call it never made.";

// The gate: UTF-8 text of 1 to 200 characters, not only whitespace.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("roast must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("roast must be a single line");
  }
  // Ties break on fewer bytes, so the roast is pure ASCII: byte length
  // must equal character length, with no multi-byte surprises.
  if (Buffer.byteLength(text, "utf8") !== text.length) {
    throw new Error("roast must be pure ASCII so bytes equal characters");
  }
}

function main(): void {
  validate(ROAST);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ROAST, "utf8");

  // Verify the round-trip: what we wrote is exactly what the judge will read.
  const back = readFileSync(outPath, "utf8");
  if (back !== ROAST) {
    throw new Error("round-trip mismatch: entry.txt does not match the roast");
  }
  console.log(`wrote ${ROAST.length} chars to ${outPath}`);
}

main();
