/**
 * @class images
 * @description images 资源
 * @time 2015-05-29 17:03
 * @author StarZou
 **/

var express = require('express'),
    router = express.Router();

/**
 * 查询 images
 */
router.get('/images', function (request, response) {

    var data = {
        list: [
            {
                id   : 1,
                title: '雪糕校花网络爆红 纯美女神青春风暴又临',
                url  : 'http://s1.dwstatic.com/group1/M00/A8/6F/f759f70958f620132e538002ca11c8f0.jpg'
            },
            {
                id   : 2,
                title: '台湾游戏嫩模大尺度私照引发网友热议',
                url  : 'http://s1.dwstatic.com/group1/M00/62/EB/d53eac544adf4db060b8aa7b67f3d579.jpg'
            },
            {
                id   : 3,
                title: 'DOTA2痛苦女王COSER郭婷瑜海量私房照曝光',
                url  : 'http://s1.dwstatic.com/group1/M00/E2/1F/66eb5ab3d934fc671db21f9a0da24cb3.jpg'
            }
        ]
    };

    response.send(new Result(true, data));
});

module.exports = router;