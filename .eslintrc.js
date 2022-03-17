module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier', 'plugin:prettier/recommended',],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  globals: {
    React: true,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}


// module.exports = {
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: [
//     'plugin:react/recommended',
//     'standard'
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module'
//   },
//   plugins: [
//     'react',
//     '@typescript-eslint'
//   ],
//   rules: {
//   }
// }
