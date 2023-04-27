module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "react-app"
  ],
  "plugins": [
    "react", "react-hooks"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "double",
      {
        "allowTemplateLiterals": true
      }
    ],
    "eqeqeq": ["error", "always"],
    "no-var": "error",
    "semi": [
      "error",
      "always"
    ],
    "curly": ["error"],
    "max-len": ["error", { "code": 100 }],
    "prefer-const": "error",
    "no-lonely-if": "error",
    "no-useless-return": "error",
    "no-constant-condition": "off",
    "no-redeclare": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
  