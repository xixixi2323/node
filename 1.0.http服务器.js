// 引入核心的http模块
var http = require('http');

// 使用http模块的createServer方法(创建)获取服务器对象
var server = http.createServer();

// 设置监听端口
server.listen(8000)

// 为服务器器设置请求事件，当客户端来请求时，执行回调函数
// 回调函数有两个形参
// 1：req 请求对象->  本次请求的所有相关信息都会在请求对象
// 2：response 响应对象->响应给客户端数据时所需要的所有功能都在响应对象中；
server.on('request',function(req,response){
    // console.log(2);
    // console.log(req.method);
    // 判断请求方法 做出不同的响应
    if(req.method == 'GET'){
        // 使用响应对象提供的write方法,进行数据响应
        response.end('1')
    }else if(req.method == 'POST'){
        response.write('2');
        response.write('5');
        response.write('6');
    }else{
        response.write('3');
    }
    // 使用end方法断开本次链接
    response.end();

    // end方法中如果有数据，那么则相当于先调用write再调用end

    // 整个请求处理及响应全过程结束
})

// 客户端什么时候来请求：输入地址的时候
// 如何接收请求：给服务器对象设置请求事件server.on()
// 如何处理请求：server.on()里的function()回调函数
// 如何断开：回调函数里的respose.end()