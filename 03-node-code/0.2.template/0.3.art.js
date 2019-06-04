var template = require('art-template');
template.defaults.root = './';

// 将数据循环遍历到模板中
var arr = [{name:'李斯',age:18},{name:'刘强东',age:48},{name:'小果',age:40}]

// 1：将数据写入对象传入模板引擎
var htmls = template('0.3.index.html',{data:arr});

console.log(htmls);
