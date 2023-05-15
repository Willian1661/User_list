module.exports = {
	"env": {
		"browser": true,
		"es2022": true,
	},
	"overrides": [],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["@typescript-eslint"],
	"extends": ["plugin:@typescript-eslint/recommended"],
	"rules": {
		"@typescript-eslint/no-unused-vars": "warn",

		"@typescript-eslint/consistent-type-definitions": "error", 
		"@typescript-eslint/semi": "error",
        }
};