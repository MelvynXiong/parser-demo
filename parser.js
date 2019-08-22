const { parse, print } = require('recast');

const code = [
  "function add(a, b) {",
  "  return a +",
  "    // Weird formatting, huh?",
  "    b;",
  "}"
].join("\n");

const ast = parse(code);

//console.log(ast);
console.log(print(ast).code === code);
//console.log(ast.program.body[0]);
// const output = print(ast).code;

// console.log(output);