# eslint-config-marven-nodejs
marvengong nodejs项目eslint配置
# 使用方法
~~~js
module.exports = {
  root: true,
  extends: ['marven-nodejs'],
  globals: {
    ClipboardJS: true,
  },
  rules: {
    'max-len': [1, 120],
    'arrow-parens': 'off',
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
~~~
