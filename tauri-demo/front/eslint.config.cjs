const js = require("@eslint/js")
const globals = require("globals")
const tseslint = require("typescript-eslint")
const reactPlugin = require("eslint-plugin-react")

const reactRecommended =
  (reactPlugin.configs && reactPlugin.configs.flat && reactPlugin.configs.flat.recommended) ||
  (reactPlugin.configs && reactPlugin.configs.recommended) ||
  {}

module.exports = [
  { ignores: ["**/dist/**","**/build/**","**/node_modules/**","**/.next/**","**/coverage/**"] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactRecommended,

  {
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },

  {
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
  },
]
