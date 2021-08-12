import { LineSnipper } from '../src/line-snipper';

test('does nothing', () => {
  // GIVEN
  const lines = [
    'not-included',
    '  // ::SNIP',
    '  not-indented',
    '    indented a bit',
    '  // ::END-SNIP',
    '  not-included',
  ];

  // WHEN
  const snipper = new LineSnipper();
  const snippedLines = lines.map(line => snipper.snipLine(line)).filter(line => line !== undefined);

  // THEN
  expect(snippedLines).toEqual([
    '```ts',
    'not-indented',
    '  indented a bit',
    '```',
  ]);
});