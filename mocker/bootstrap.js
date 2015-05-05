#!/usr/bin/env node
var app = require('./app');
var http = require('http');

var host = '127.0.0.1',
    port = 9000;

/**
 * Mocker服务器
 */
var server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);

app.set('port', port);
server.listen(port);

function onError(error) {
    console.error(error);
}

function onListening() {
    console.log('Mocker Server Startup, Listening on : %s:%s', host, port);
}

/**
 * Socket Server
 */
var io = require('socket.io')(server);

// 所有消息
var messages = [];

// 所有客户端
var sockets = [];

// 接受客户端连接
io.on('connection', function (socket) {
    // 客户端id
    var id = socket.id;

    console.log('%s connected', id);

    // 加入聊天室
    sockets.push(socket);

    // 断开连接
    socket.on('disconnect', function () {
        console.log('%s disconnected', id);

        // 删除客户端
        sockets.splice(sockets.indexOf(socket), 1);
    });

    // 接受消息
    socket.on('message:send', function (message) {
        console.log('message : ', message);

        // 保存消息
        messages.push(message);

        // 发送消息给其他客户端
        sockets.forEach(function (client) {
            client.emit('message:update', message);
        });
    });

    // 同步消息
    socket.emit('message:list', messages);
});



