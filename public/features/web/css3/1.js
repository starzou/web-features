/**
 * @class 1
 * @description
 * @time 2015-04-17 22:18
 * @author StarZou
 **/

var title = document.querySelector('.title');

var btnTransition = document.getElementById('btnTransition');

btnTransition.addEventListener('click', function () {
    title.classList.toggle('new-title');
});