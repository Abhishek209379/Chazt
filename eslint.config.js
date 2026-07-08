// eslint.config.js
import { FlatCompat } from "eslint-define-config";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ),
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json", // if you want type-aware linting
      },
    },
    plugins: {
      react: "eslint-plugin-react",
      "@typescript-eslint": "@typescript-eslint/eslint-plugin",
      prettier: "eslint-plugin-prettier",
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off", // React 17+ JSX runtime
    },
  },
];