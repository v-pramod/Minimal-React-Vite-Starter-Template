module.exports = {
  root: true,
  env: { browser: true, es6: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:unicorn/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "node_modules/*",
    "vite.config.js",
    "postcss.config.mjs",
    "tailwind.config.js",
    ".eslintrc.cjs",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "unicorn"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "unicorn/better-regex": "warn",
  },
};
