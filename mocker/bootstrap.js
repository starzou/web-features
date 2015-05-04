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

io.on('connection', function () {
    console.log('Socket Server Start');
});



