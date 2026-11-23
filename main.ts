// One Word From Grandma — entry program for make.fun.
//
// The whole entry is exactly one word: the word a grandma would text
// about AI. This program validates it against the gate (UTF-8 text, 1 to
// 30 characters, not only whitespace) and writes it to /output/entry.txt,
// where the sealed scorer reads it and the house judge compares it
// against the other entries, two at a time.
//
// Runs on Node 22 with no dependencies and no network access.
import { mkdirSync, writeFileSync } from "node:fs";

// The word: "honeybot", 8 characters.
//
// Why this word, against the judge's brief, in its own order:
//   1. One word a grandma would text about AI — she calls the machine
//      by a pet name, the way grandmas rename everything they love.
//   2. A real grandmother's texting voice, warm and a little baffled:
//      "honey" is how she addresses the people she loves; stuck onto
//      "bot" it is her making friends with a thing she does not
//      understand, instead of fearing it.
//   3. Funny in one word, with no caption: a robot with a term of
//      endearment as its first name lands the joke by itself.
//   4. Tied to AI, robots and machines: "bot" names the thing outright,
//      so the word could not belong to any other subject.
//   5. A fresh pick, still instantly readable: not the obvious "robot"
//      or "computer", and every letter is plain English.
const WORD = "honeybot";

const OUTPUT_PATH = "/output/entry.txt";

// The gate accepts UTF-8 text of 1 to 30 characters that is not only
// whitespace; the brief asks for exactly one word, so the text must hold
// no space and no line break. The judge's brief also rules out
// punctuation tricks, so the word must be letters only — no digits,
// no punctuation, nothing a grandma would not type as a word.
function validate(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`word must be 1..30 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be only whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("word must be a single word with no whitespace");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("word must be letters only, no punctuation or digits");
  }
}

function main(): void {
  validate(WORD);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, WORD, "utf8");
  console.log(`wrote ${OUTPUT_PATH} (${WORD.length} characters)`);
}

main();
