/**
 * @component test3
 * @description es6 test3
 * @time 2016/2/25 10:53
 * @author StarZou
 **/

'use strict';

let Test3 = {

  // Object静态方法
  ObjectStaticMethods(){
    /**
     * 语法: Object.assign(target, ...sources)
     *
     * 作用: Object.assign() 方法可以把任意多个的源对象所拥有的自身可枚举属性拷贝给目标对象，然后返回目标对象。
     * 1. Object.assign 会跳过那些值为 null 或 undefined 的源对象。
     * 2. 字符串类型和 symbol 类型的属性都会被拷贝。
     */
    var obj = Object.assign({a: 1}, {b: 2}, {c: 3});
    console.log(obj);

    /**
     * Object.is与 === 相同, 但是NaN与NaN比较是相等的, 正负0不相等
     */
    console.log(Object.is(NaN, NaN));
    console.log(Object.is(0, -0));
  }
};

Luck.runTestClass(Test3);