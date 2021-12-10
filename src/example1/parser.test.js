import { parse } from './parser';
import { Num, Op } from './symbols';

it('parses the given string', () => {
  expect(parse(['sum', '1', '2'])).toEqual({
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
  });
});
