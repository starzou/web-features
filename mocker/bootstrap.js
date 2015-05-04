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

// 接受客户端连接
io.on('connection', function (socket) {
    var id = socket.id;

    console.log('%s connected', id);

    socket.on('disconnect', function () {
        console.log('%s disconnected', id);
    });
});



