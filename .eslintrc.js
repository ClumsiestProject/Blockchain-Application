/*      在"VSCode"中使用ESLint，需要：
        1. 首先在"VSCode"扩展面板安装ESLint插件
        2. 在终端命令区全局安装ESLint
            npm install eslint -g
        3. 进入工作目录
        4. 初始化ESLint
            npm --init
        5. 根据需要，在".eslintrc.js"中配置ESLint
*/


module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,                                // 遵守ES6标准
        "jquery": true,                             // 支持JQuery
        "node": true                                // Node.js环境
    },
    "extends": "eslint:recommended",                // 使用推荐风格，不具备使用Standard、AirBNB、Google风格的条件
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [ "error", 4 ],                   // 缩进4个空格
        "linebreak-style": [ "error", "Unix" ],  // 换行是Windows风格,MacOS下改为Unix
        "no-console": "off"                         // 禁用no-console规则
    //    "quotes": [ "error", "single" ],          // 单引号检查
    //    "semi": [ "error", "never" ]              // 分号检查
    }
};