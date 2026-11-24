// One Word, First Thought: write the chosen word, the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "moonquake";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD);
