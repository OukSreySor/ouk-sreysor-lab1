import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        process: "readonly",  
        console: "readonly",
        describe: "readonly", 
        it: "readonly",
        node: true,
        mocha: true,
      },
    },
    rules: {}
    
  },
];
