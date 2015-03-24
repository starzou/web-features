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

module.exports = router;