module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { esmodules: true }, bugfixes: true },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      { ssr: true, displayName: true, fileName: false },
    ],
  ],
};
