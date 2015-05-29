/**
 * @class auth
 * @description 认证资源
 * @time 2015-05-29 13:57
 * @author StarZou
 **/


var express = require('express'),
    router = express.Router();

/**
 * 主页
 */
router.post('/auth', function (request, response) {
    var user = request.body;

    var result = new Result();

    if (user) {
        if (user.userName === 'star' && user.password === '123456') {
            result.success = true;
            result.message = '验证成功';
        } else {
            result.message = '用户名或密码错误';
        }
    } else {
        result.message = '请输入用户名密码';
    }

    response.send(result);
});

module.exports = router;


function Result(success, data, message, code) {
    this.success = success || false;
    this.data = data || null;
    this.message = message || null;
    this.code = code || null;
}

global.Result = Result;