/**
 * @module Date
 * @description
 * @time 2015-07-26 11:15
 * @author StarZou
 **/

exports.getDate = function () {
    var date = new Date();

    return {
        date        : date,
        dateToString: date.toLocaleDateString()
    };
};