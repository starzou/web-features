/**
 * @class main
 * @description main 程序
 * @time 2015-05-09 11:06
 * @author StarZou
 **/

// bootstrap引导程序
var bootstrap = require('../mocker/bootstrap');
var server = bootstrap.server;
var app = bootstrap.app;

// 装载 socket io server
var socket = require('../lib/socket.io/socket');
socket.init(server);
