const baseConfig = require("react-atomic-atom/babel.config");

module.exports = function (api, opts) {
  const conf = baseConfig(api, opts);
  ["cjs", "es"].forEach((env) => {
    conf.env[env].presets.push("@babel/preset-typescript");
  });
  return conf;
};
