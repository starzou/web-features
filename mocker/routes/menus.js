/**
 * @class menus
 * @description 菜单资源
 * @time 2015-05-13 22:51
 * @author StarZou
 **/

var express = require('express');
var router = express.Router();

/**
 * 查询菜单
 */
router.get('/menus', function (request, response) {
    var data = [
        {
            title: '首页', state: 'index'
        },
        {
            title   : 'Web features',
            state   : 'features',
            children: [
                {title: 'Node.js 研究', state: 'features.node'},
                {title: 'Node MySQL 研究', state: 'features.mysql'}
            ]
        },
        {
            title   : 'Demos',
            state   : 'demos',
            children: [
                {title: 'Todo App', state: 'demos.todo'},
                {title: 'Chat Room', state: 'demos.chat'}
            ]
        }
    ];

    var result = {
        data   : data,
        success: true
    };

    response.send(result);
});

module.exports = router;