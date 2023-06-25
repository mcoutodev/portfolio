module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh', 'unused-imports'],
    rules: {
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
        '@typescript-eslint/no-explicit-any': 'on',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/semi': ['error', 'always'],
        'react-refresh/only-export-components': 'warn',
        'import/order': [
            'warn',
            {
                alphabetize: { order: 'asc' },
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': [
            'warn',
            {
                'vars': 'all',
                'varsIgnorePattern': '^_',
                'args': 'after-used',
                'argsIgnorePattern': '^_',
            }
        ],
    },
};
