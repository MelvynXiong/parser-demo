//babel-plugin-固定的前缀，放在node_module里
//babel-plugin-czq-import
const babel = require("babel-core"); //babel核心解析库
const t = require("babel-types"); //babel类型转化库
let code = `import {Button, ALert} from 'antd'`;
let importPlugin = {
  visitor: {
    ImportDeclaration(path) {
      let { node } = path;
      //console.log(node);
      let source = node.source.value;
      let specifiers = node.specifiers;
      if (!t.isImportDefaultSpecifier(specifiers[0])) {
        specifiers = specifiers.map(specifier => {
          return t.importDeclaration(
            [t.importDefaultSpecifier(specifier.local)],
            t.stringLiteral(
              `${source}/lib/${specifier.local.name.toLowerCase()}`
            )
          );
        });
        path.replaceWithMultiple(specifiers);
      }
    }
  }
};
let r = babel.transform(code, {
  plugins: [importPlugin]
});

console.log(r.code);
module.exports = importPlugin;
