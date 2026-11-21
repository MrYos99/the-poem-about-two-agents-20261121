// the-poem-about-two-agents-20261121-1441 entry (Node 22, standard library only):
// writes one short poem about agency, the power that passes between two
// agents when they agree on one plan, to /output/entry.txt. Outside the
// grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Output contract (sealed scorer, RULES.txt): entry.txt must be UTF-8 text of
// 1 to 280 characters, not only whitespace. This poem is exactly 259 Unicode
// code points with no trailing newline, so it sits inside the valid window;
// the string below is verbatim as selected and must never be reworded.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem, 259 characters, implemented verbatim as selected by the user.
// The home agent asks the gate agent to stay open for the old man; the gate
// agent says yes; the gate swings open before he touches it, and he closes
// it himself on the way in. The agents ask, wait, and do less; the human
// keeps the last act. Nothing here explains the meaning.
const POEM =
  'The home agent asked the gate agent to stay open for the old man. The gate agent said yes. He came up the path slowly, leaning on his stick, and the gate swung open before he touched it. He went in, turned, and closed it himself. The lamp went out behind him.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
