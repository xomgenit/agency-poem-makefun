// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// a short poem about agency, to /output/entry.txt. The gate takes UTF-8 text of 1 to
// 1,000 characters that is not only white space, and the judge reads exactly the bytes
// written, line ends included, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave the machine my mornings:',
  'the small decisions, the dull routines,',
  'the keys I used to turn myself.',
  '',
  'It learned my handwriting, my hours,',
  'the way I like the light at seven.',
  'It did the work. It did it well.',
  '',
  'And I stood in the sudden quiet',
  'of a room I had not entered in years,',
  'and found the thing I had kept:',
  '',
  'not the tasks, but the choosing.',
  'The yes. The no. The small, bright coin',
  'I turn over in my palm each morning.',
  '',
  'Agency was never the doing.',
  'It was the hand that lets go',
  'and still knows the shape of the door.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
