const rule = require("../../../lib/rules/no-flex-shorthand");

const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

const ruleTester = new RuleTester();

ruleTester.run("no-flex-shorthand", rule, {
    valid: [
      {
          code: "const style = { foo: 'bar' }",
      }
    ],
    invalid: [
        {
            code: "const style = {flex: 1}",
            errors: [{
                message: 'Flex shorthand breaks on IE11',
                type: 'Identifier'
            }]
        }
    ]
});
