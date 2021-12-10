import { transpile } from './transpiler';
import { Num, Op } from './symbols';

it('parses the given string', () => {
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
  })).toEqual(
    '(1 + 2)',
  );
});
