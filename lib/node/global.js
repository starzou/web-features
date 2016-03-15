/**
 * @component global
 * @description
 * @time 2016-03-15 下午2:56
 * @author StarZou
 **/
'use strict';

process.on('error', function (error) {
  console.log(error);
});

let test = {

  interval(){
    const v8 = require('v8');

    v8.setFlagsFromString('--trace_gc');

    let count = 0, maxCount = 10;

    let id = setInterval(()=> {
      count++;
      console.log(count, new Date());

      if (count >= maxCount) {
        clearInterval(id);
      }

      console.log(v8.getHeapStatistics());

    }, 100);


    process.on('exit', function () {

      console.log(v8.getHeapStatistics());

      console.log('程序退出了');
    });

  },

  global(){
    console.log(global);
  },

  os(){
    let os = require('os');

    let keys = Object.keys(os);

    for (let key of keys) {
      if (typeof os[key] === 'function' && key != 'getNetworkInterfaces') {
        console.log(key, os[key]());
      }
    }

  },

  vm(){
    const util = require('util');
    const vm = require('vm');

    var sandbox = {
      animal: 'cat',
      count: 2
    };

    var context = new vm.createContext(sandbox);
    var script = new vm.Script('count += 1; name = "kitty"');

    for (var i = 0; i < 10; ++i) {
      script.runInContext(context);
    }

    console.log(util.inspect(sandbox));

  },

  vm2(){
    const util = require('util');
    const vm = require('vm');

    const sandboxes = [{}, {}, {}];

    const script = new vm.Script('globalVar = "set"');

    sandboxes.forEach((sandbox) => {
      script.runInNewContext(sandbox);
    });

    console.log(util.inspect(sandboxes));
  },

  vm3(){
    const vm = require('vm');

    global.globalVar = 0;

    const script = new vm.Script('globalVar += 1', {filename: 'myfile.vm'});

    for (var i = 0; i < 1000; ++i) {
      script.runInThisContext();
    }

    console.log(globalVar);
  }

};


//test.interval();

//test.global();

//test.os();

//test.vm();
