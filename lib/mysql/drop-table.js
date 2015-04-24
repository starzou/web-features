/**
 * @class drop-table
 * @description 删除表 脚本
 * @time 2015-04-24 17:59
 * @author StarZou
 **/


var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : '10.200.187.119',
    port    : '3306',
    database: 'loyalty',
    user    : 'loyalty',
    password: 'shuyunloyalty'
});

connection.connect();

var prefix = 'tb_ip_core_account_';
var sql = "SELECT CONCAT('drop table ', table_name, ';') FROM information_schema.TABLES WHERE table_name LIKE '" + prefix + "%'";

connection.query(sql, function (err, rows, fields) {
    if (err) throw err;

    console.log(arguments);
});

connection.end();