import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "./src/index.js",
  output: [
    {
      format: "esm",
      file: "./build/bundle.js",
    },
  ],
  plugins: [resolve()],
};
