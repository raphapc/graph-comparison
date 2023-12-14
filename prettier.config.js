/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 80,
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"],
};
export default config;
