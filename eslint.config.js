const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                ...globals.node,
                test: "readonly",
                expect: "readonly"
            }
        },
        rules: {
            ...js.configs.recommended.rules
        }
    }
];