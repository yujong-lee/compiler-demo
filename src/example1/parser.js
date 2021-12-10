/* eslint-disable no-use-before-define */
import { Num, Op } from './symbols';

export const parse = (tokens) => {
  let c = 0;

  const peek = () => tokens[c];

  const consume = () => {
    const ret = tokens[c];
    c += 1;

    return ret;
  };

  const parseNum = () => {
    const value = parseInt(consume(), 10);

    return ({ value, type: Num });
  };

  const parseOp = () => {
    const value = consume();

    const node = { value, type: Op, expr: [] };

    while (peek()) {
      node.expr = [...node.expr, parseExpr()];
    }

    return node;
  };

  const parseExpr = () => (/\d/.test(peek()) ? parseNum() : parseOp());

  return parseExpr();
};

export default {};
