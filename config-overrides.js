const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@styles": path.resolve(__dirname, "src/shared/styles"),
  }),
);
