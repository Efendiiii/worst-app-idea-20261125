import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "LaundryLens is an AI app that photographs your clean laundry, solemnly identifies which sock lost its partner, and charges $3.99 a month for guided grief counselling for the surviving sock.";

// Guard: one sentence, 1-240 characters, not only whitespace (RULES.txt gate).
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
const terminators = LINE.match(/[.!?](?=\s|$)/g) ?? [];
if (terminators.length !== 1) {
  throw new Error(`entry must be exactly one sentence, got ${terminators.length} terminators`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
