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
    db.pool.query('SELECT * FROM user', function (err, rows) {
        if (err) {
            console.error(err);
        }

        var result = {
            data   : rows,
            success: true
        };

        response.send(result);
    });
});

/**
 * 用户注册
 */
router.post('/users', function (request, response) {
    var user = request.body;

    if (!user) {
        return;
    }

    var id = user.id;
    id && delete user.id;

    // 更新
    if (id) {
        db.pool.query('UPDATE user SET ? WHERE id = ?', [user, id], function (err, result) {

            if (err) {
                console.error(err);
            }

            var data = {
                data   : result,
                success: true
            };

            response.send(data);
        });
    } else {
        db.pool.query('INSERT INTO user SET ?', user, function (err, result) {

            if (err) {
                console.error(err);
            }

            var data = {
                data   : result,
                success: true
            };

            response.send(data);
        });
    }

});

/**
 * 删除用户
 */
router.delete('/users/:id', function (request, response) {
    var id = request.params.id;

    if (!id) {
        return;
    }

    db.pool.query('DELETE FROM user WHERE id = ' + id, function (err, result) {

        if (err) {
            console.error(err);
        }

        var data = {
            data   : result,
            success: true
        };

        response.send(data);
    });

});

module.exports = router;