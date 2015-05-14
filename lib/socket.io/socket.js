/**
 * @class server
 * @description Socket IO 服务器
 * @time 2015-05-09 10:52
 * @author StarZou
 **/

// 初始化 Socket IO 服务器
exports.init = function (server) {
    // io 服务器
    var io = require('socket.io')(server);

    // 所有消息
    var messages = [];

    // 所有客户端
    var sockets = [];

    // 所有注册用户
    var users = [];

    // 接受客户端连接
    io.on('connection', function (socket) {
        // 客户端id
        var id = socket.id;

        // 当前用户
        var currentUser;

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
            // 设置消息元数据
            message.date = new Date();
            message.anchor = currentUser;

            // 保存消息
            messages.push(message);

            // 发送消息给其他客户端
            sockets.forEach(function (client) {
                client.emit('message:update', message);
            });

            console.log('message : ', message);
        });

        // 同步消息
        socket.on('message:list', function () {
            socket.emit('message:list', messages);
        });

        // 检查是否注册
        socket.on('message:login', function (user) {
            var result = {
                registered: true
            };

            // 注册用户
            if (user) {
                user.id = id;
                users.push(user);

                currentUser = user;

            } else {
                // 执行检查
                var registered = users.some(function (user) {
                    return id === user.id;
                });

                result.registered = registered;
            }

            socket.emit('message:login', result);
        });

    });

    module.exports.io = io;
};