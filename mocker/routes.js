/**
 * @class routes
 * @description 自动 引用 routes 中间件
 * @time 2014-12-30 11:50
 * @author TongYuan.Zou
 **/
var fs = require('fs');

// 中间件路径
var path = exports.path = '/routes/';

// url 前缀
var urlPrefixes = exports.urlPrefixes = ['/web-features/', '/src/', '/'];

// 自动加载 path 路径下的 中间件
exports.useRoutes = function (app) {
    console.log('前缀路径 : ', urlPrefixes);
    var files = fs.readdirSync(__dirname + path);
    files.forEach(function (file) {
        var route = require(__dirname + path + file);
        console.log('加载 %s ', file);

        // 发布 Resources, 前缀 + URL
        urlPrefixes.forEach(function (urlPrefix) {
            app.use(urlPrefix, route);
        });
    });
};