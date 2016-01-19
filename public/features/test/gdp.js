/**
 * @component gdp
 * @description
 * @time 2016/1/19 20:05
 * @author StarZou
 **/

'use strict';

var tableDataElement = document.getElementById('tableDataElement');

var types = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];


function Type(name, absoluteAmount12, yearGrowth12, absoluteAmount, yearGrowth) {
  this.name = name;

  this.absoluteAmount12 = parseFloat(absoluteAmount12) || 0;
  this.yearGrowth12 = parseFloat(yearGrowth12) || 0;

  this.absoluteAmount = parseFloat(absoluteAmount) || 0;
  this.yearGrowth = parseFloat(yearGrowth) || 0;
}


var tableData = [], array = tableDataElement.children, length = array.length;

var tr, cell, text, textArray, cells;

for (var index = 0; index < length; index++) {
  tr = array[index];

  textArray = [];

  cells = tr.cells;

  for (var j = 0; j < cells.length; j++) {
    cell = cells[j];
    textArray.push(cell.innerText);
  }

  if (textArray[4].indexOf('（') < 0) {
    //console.log(textArray);
    tableData.push(new Type(textArray[0].split('\n')[0], textArray[1], textArray[2], textArray[3], textArray[4]));
  }
}

var me = {
  name: '2015年12月份及全年主要统计数据',
  data: tableData
};
//console.log(me);

console.log(JSON.stringify(me));
