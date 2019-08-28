const babylon = require('babylon');
 
let code = `
     let a = 1, b = 2;
     function sum(a, b){
          return a + b;
     }
 
    sum(a, b);
`;
 
let ast = babylon.parse(code);
console.log(ast);