import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"

export default defineConfig([
  { ignores: ["**/dist/**", "**/build/**", "**/node_modules/**", "**/.next/**", "**/coverage/**"] },

  js.configs.recommended,
  tseslint.configs.recommended,
  (pluginReact as any).configs?.flat?.recommended || (pluginReact as any).configs?.recommended,

  {
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },

  {
    files: ["front/src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
  },
])
