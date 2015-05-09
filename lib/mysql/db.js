/**
 * @class index
 * @description mysql 研究
 * @time 2015-05-09 10:03
 * @author StarZou
 **/

var mysql = require('mysql');

// 数据库连接配置
var config = {
    host    : '127.0.0.1',
    port    : '3306',
    database: 'star',
    user    : 'root',
    password: 'admin123'
};

// pool 连接池
var pool = mysql.createPool(config);

exports.config = config;
exports.pool = pool;