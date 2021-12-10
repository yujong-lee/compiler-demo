export const lex = (str) => str
  .split(' ')
  .map((s) => s.trim())
  .filter((s) => s.length);

export default {};
