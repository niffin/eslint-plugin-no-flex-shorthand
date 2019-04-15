module.exports = function(context) {
  return {
    ObjectExpression: function (node) {
     node.properties.forEach(prop => {
       if (prop.key && prop.key.name === 'flex') {
         context.report(prop.key, "Flex shorthand breaks on IE11");
       }
     })
    }
  };
};
