import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";

export default [
  { ignores: ["dist/**", "node_modules/**", "src-tauri/**"] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    settings: { react: { version: "detect" } },
    plugins: { react, "react-hooks": hooks },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": "warn"
    }
  }
];