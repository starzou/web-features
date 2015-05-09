/**
 * @class index
 * @description index 控制器
 * @time 2015-03-24 22:25
 * @author StarZou
 **/

var express = require('express');
var router = express.Router();

/**
 * 主页
 */
router.get('/', function (req, res) {
    res.redirect('/src/index.html');
});

module.exports = router;
