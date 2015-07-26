/**
 * @module entry
 * @description
 * @time 2015-07-26 10:55
 * @author StarZou
 **/

var Date = require('./Date');
var date = Date.getDate();
document.write("It works.\nDate.getDate() = " + JSON.stringify(date));
exports.date = date;