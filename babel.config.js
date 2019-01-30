const presets = [["@babel/env"], ["@babel/preset-react"]];

const plugins = [
  ["@babel/plugin-proposal-class-properties"],
  ["@babel/transform-arrow-functions"]
];
module.exports = { presets, plugins };
