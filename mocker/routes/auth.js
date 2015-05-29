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
    console.log(user);

    response.send(new Result());
});

module.exports = router;


function Result(success, data, message, code) {
    this.success = success || true;
    this.data = data || null;
    this.message = message || null;
    this.code = code || null;
}

global.Result = Result;