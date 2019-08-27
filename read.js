#!/usr/bin/env node
const { run, visit, types } = require("recast");
const TNT = types.namedTypes;

// node read可以读取demo.js文件，并将demo.js内容转化为ast对象
run(function(ast, printSource) {
  // 将 ast 对象内的节点进行逐个遍历
  visit(ast, {
    // visitExpressionStatement: function({ node }) {
    //   //console.log(node)
    //   printSource(node);
    //   return false;
    // }
    // visitFunctionDelaration: function({ node }) {
    //   //console.log(node)
    //   printSource(node);
    //   return false;
    // }
    visitExpressionStatement: function(path) {
      const node = path.value
      // 判断是否为ExpressionStatement，正确则输出一行字。
      if(TNT.ExpressionStatement.check(node)){
        console.log('这是一个ExpressionStatement')
      }
      this.traverse(path);
    }
  });
  //printSource(ast)
});
