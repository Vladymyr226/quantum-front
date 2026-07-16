/**
 * Prettier configuration.
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 80,
  // Auto-sorts Tailwind classes. For Tailwind v4 the plugin reads the theme
  // from the CSS entrypoint below instead of a tailwind.config.js.
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
  // Also sort classes passed to these helpers (add cn/clsx/cva when used).
  tailwindFunctions: ["clsx", "cn", "cva", "tw"],
};

export default config;
