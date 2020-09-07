const withTM = require("next-transpile-modules")([
  "react-spring",
  "@babel/runtime",
]);

module.exports = withTM();
