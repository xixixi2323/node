// 安装 npm install art-template 
// 引入使用
var template = require('art-template');

// 设置模板的查找加载路径 (不设置默认从根路径查找)
template.defaults.root = './';

// template是一个方法，第一个参数是模板文件的路径   第二个参数是需要与模板进行整合的数据
// 模板里面需要使用 模板语法{{}} 
var htmls = template('index.html',{hh:'哈哈哈哈'});
// art 会将整合好的数据返回
console.log(htmls);
