import * as fs from 'fs';
import { LineSnipper } from './line-snipper';

const scriptArgs = process.argv.slice(2);
if (scriptArgs.length === 0) {
  throw new Error('Usage: lit-snip <lit-file.ts>');
}

const litFile = scriptArgs[0];
const litFileContents = fs.readFileSync(litFile).toString();

const lines = litFileContents.split(/\r?\n/i);

const snipper = new LineSnipper();
lines.forEach((line: string) => {
  const snippedLine = snipper.snipLine(line);
  if (snippedLine !== undefined) {console.log(snippedLine);}
});
