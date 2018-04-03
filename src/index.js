const ImportAstPlugin = (t, path) => {
  if (path.node && path.node.source.value === "vue-atom-ui") {
    path.node.specifiers.forEach(({type, imported, local}) => {
      if (type === 'ImportSpecifier') {
        path.insertBefore(
          t.importDeclaration(
            [ t.importDefaultSpecifier(
                t.identifier(imported.name)
            )],
            t.stringLiteral(`vue-atom-ui/lib/${imported.name}`)
          )
        );
        // TODO
        // 暂时引入全局css 后期跟随 atom-ui-mobile 修改
        // if (cssPath) {
        //   path.insertBefore(
        //     t.importDeclaration(
        //       [],
        //       t.stringLiteral(`${libName}/${libPath}/${spell ? camel2Dash(imported.name) : imported.name.toLowerCase()}/${cssPath}`)
        //     )
        //   );
        // }
      }
    });
    path.remove();
  }
};

export default ({types: t}) => {
  return {
    visitor: {
      ImportDeclaration(path) {
        ImportAstPlugin(t, path);     
      }
    }
  };
};
