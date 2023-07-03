module.exports = {
	"env": {
		"browser": true,
		"es2022": true,
		"node": true
	},
	"overrides": [],
	"root": true,
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
	},

	"plugins": ["@typescript-eslint"],

	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
	],
	"rules": {
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/semi": "error",
		"@typescript-eslint/no-var-requires": "off",
		"curly": ["error"],
		"no-empty-pattern": "error",
		"no-empty-character-class": "error",
		"no-func-assign": "error",
		"no-useless-call": "error",
		"no-useless-catch": "error",
		"no-lonely-if": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"semi": "error",
		"semi-spacing": "error",
		"semi-style": ["error","last"],
		"linebreak-style": ["error","unix"],
	}
};