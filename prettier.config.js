/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  semi: false,
  singleQuote: true,

  tailwindFunctions: ['cva'],

  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson', 'prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: ['tsconfig.json', '.vscode/**.json'],
      options: {
        parser: 'jsonc',
      },
    },
  ],
}

export default config
