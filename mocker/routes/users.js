/**
 * @class users
 * @description users 控制器
 * @time 2015-03-24 22:25
 * @author StarZou
 **/

var express = require('express');
var router = express.Router();

/**
 * 查询用户
 */
router.get('/users', function (request, response) {
    var result = {
        data   : {},
        success: true
    };
    response.send(result);
});

/**
 * 用户注册
 */
router.post('/users', function (request, response) {
    var user = request.body;

    if (!user) {
        return;
    }

    db.pool.query('INSERT INTO user SET ?', user, function (err, result) {
        if (err) throw err;

        var data = {
            data   : result,
            success: true
        };

        response.send(data);
    });

});

module.exports = router;