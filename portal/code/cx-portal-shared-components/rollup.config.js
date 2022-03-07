import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss'
import svg from 'rollup-plugin-svg'


export default [
    {
        input: "src/index.ts",
        output: {
            dir: 'dist',
            format: "esm",
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
        },
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.build.json" }),
            scss({
            }),
            svg(),
            terser(),
        ],
        external: ["react", "react-dom", "styled-components"]
    },

];