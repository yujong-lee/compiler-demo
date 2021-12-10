import { transpile } from './transpiler';
import { Num, Op } from './symbols';

it('transpiles the given string to javascript expression', () => {
  expect(transpile({
    value: 'sum',
    type: Op,
    expr: [
      {
        type: Num,
        value: 1,
      },
      {
        type: Num,
        value: 2,
      },
    ],
  })).toBe(
    '(1 + 2)',
  );
});
