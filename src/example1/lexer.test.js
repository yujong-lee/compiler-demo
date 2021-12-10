import { lex } from './lexer';

it('tokenizes the given string', () => {
  expect(
    lex('mul 3 sub 2 sum 1 3 4'),
  ).toEqual(['mul', '3', 'sub', '2', 'sum', '1', '3', '4']);
});
