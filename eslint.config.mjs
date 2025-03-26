import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import autofix from "eslint-plugin-autofix";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: ["**/next-env.d.ts"],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "eslint-config-prettier",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:jsx-a11y/recommended",
      "next",
      "next/core-web-vitals",
      "prettier"
    )
  ),
  {
    languageOptions: {
      ecmaVersion: 12,
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: "module",
    },
    plugins: {
      autofix,
      "react-compiler": reactCompiler,
      "react-hooks": fixupPluginRules(reactHooks),
    },
    rules: {
      "react-compiler/react-compiler": "error",
    },
  },
  {
    files: ["**/*.ts?(x)"],
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],
      "autofix/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "_",
          destructuredArrayIgnorePattern: "_",
          ignoreRestSiblings: true,
        },
      ],
      "no-console": "warn",
      "no-redeclare": "warn",
      "react/display-name": "error",
      "react/jsx-key": "warn",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "spaced-comment": "warn",
    },
  },
];

export default eslintConfig;
