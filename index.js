module.exports = {
  root: true, // 作用的目录是根目录
  extends: 'airbnb-base', // extends 指定eslint规范
  plugins: [
    // 'html' // 使用eslint-plugin-html
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module', // 按照模块的方式解析
    requireConfigFile: false
  },
  env: {
    browser: true, // 开发环境配置表示可以使用浏览器的方法
    node: true, //
    es6: true,
    commonjs: true
  },
  rules: {
    // 重新覆盖 extends: 'standard'的规则
    'comma-dangle': ['error', 'never'],
    // 自定义的规则
    'linebreak-style': [0, 'error', 'linux'],
    // "indent": ['error', 4], // error类型，缩进4个空格
    indent: ['error', 2], // error类型，缩进2个空格
    'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
    'eol-last': 0, // 不检测新文件末尾是否有空行
    semi: ['error', 'always'], // 必须在语句后面加分号
    // "quotes": ["error", "double"],// 字符串没有使用单引号
    'no-console': ['error', { allow: ['log', 'warn'] }], // 允许使用console.log()
    'no-unused-vars': [1, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    'no-underscore-dangle': 2, // 标识符不能以_开头或结尾
    'arrow-parens': 0,
    'no-new': 0, // 允许使用 new 关键字
    quotes: [2, 'single'], // 单引号
    'no-debugger': 2, // 禁用debugger
    'no-var': 0, // 对var警告
    'no-irregular-whitespace': 0, // 不规则的空白不允许
    'no-trailing-spaces': 1, // 一行结束后面有空格就发出警告
    'no-alert': 2, // 禁止使用alert confirm prompt
    'no-lone-blocks': 0, // 禁止不必要的嵌套块
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-dupe-args': 2, // 函数参数不能重复
    'no-empty': 2, // 块语句中的内容不能为空
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-redeclare': 2, // 禁止重复声明变量
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 0, // 在调用super()之前不能使用this或super
    'no-undef': 2, // 不能有未定义的变量
    'no-use-before-define': 2, // 未定义前不能使用
    camelcase: 0, // 强制驼峰法命名
    'jsx-quotes': [2, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'no-extra-boolean-cast': 0, // 禁止不必要的bool转换
    'no-unreachable': 1, // 不能有无法执行的代码
    'no-mixed-spaces-and-tabs': 0, // 禁止混用tab和空格
    'prefer-arrow-callback': 0, // 比较喜欢箭头回调
    'arrow-spacing': 0 //= >的前/后括号
  }
};
