module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        'airbnb-typescript',
        "eslint:recommended",
        "plugin:react/jsx-runtime",
        // "prettier/prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        // project: './tsconfig.json',
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "no-mixed-operators": "error",
        // "max-len": ["error", { code: 80, ignoreUrls: true }],
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
        "react/require-default-props": "off",
        "function-component-definition": 0,
        "react/destructuring-assignment": 0,
    },
};
