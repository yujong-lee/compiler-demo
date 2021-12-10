/* eslint-disable no-use-before-define */
import { Num } from './symbols';

export const transpile = (ast) => {
  const operatorMap = {
    sum: '+', mul: '*', sub: '-', div: '/',
  };

  const transpileNum = (node) => node.value;
  const transpileOp = (node) => `(${node.expr.map(transpileNode).join(` ${operatorMap[node.value]} `)})`;

  const transpileNode = (node) => (node.type === Num ? transpileNum(node) : transpileOp(node));

  return transpileNode(ast);
};

export default {};
