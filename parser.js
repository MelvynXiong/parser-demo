const { parse, print, types, prettyPrint } = require('recast');
const { variableDeclaration, variableDeclarator, functionExpression } = types.builders;
const code = [
  "function add(a, b) {",
  "  return a +",
  "    // Weird formatting, huh?",
  "    b;",
  "}"
].join("\n");

const ast = parse(code);
const add = ast.program.body[0];

// 函数申明改变量声明
ast.program.body[0] = variableDeclaration("const", [
  variableDeclarator(add.id, functionExpression(
    null, // Anonymize the function expression.
    add.params,
    add.body
  ))
]);

//console.log(ast);
//console.log(print(ast).code === code);
//console.log(ast.program.body[0]);
// const output = print(ast).code;
const output = prettyPrint(ast, { tabWidth: 2 }).code

console.log(output);