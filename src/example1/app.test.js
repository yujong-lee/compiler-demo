import { lex } from './lexer';
import { parse } from './parser';
import { transpile } from './transpiler';

const program = 'mul 3 sub 2 sum 1 3 4';

it('parses the given string', () => {
  expect(transpile(parse(lex(program)))).toEqual(
    '(3 * (2 - (1 + 3 + 4)))',
  );
});
