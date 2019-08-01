import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "index.ts",
    plugins: [typescript({ typescript: require("typescript") }), terser()],
    output: {
      file: "umd/index.js",
      format: "umd",
      name: "mathModule",
      esModule: false
    }
  },
  {
    input: "index.ts",
    plugins: [typescript({ typescript: require("typescript") })],
    output: {
      file: "esm/index.js",
      format: "esm"
    }
  }
];
