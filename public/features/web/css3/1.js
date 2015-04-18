/**
 * @class 1
 * @description
 * @time 2015-04-17 22:18
 * @author StarZou
 **/

var title = document.querySelector('.title');
var btnTransition = document.getElementById('btnTransition');
var btnAnimation = document.getElementById('btnAnimation');

/**
 * 过渡效果
 */
btnTransition.addEventListener('click', function () {
    title.classList.toggle('new-title');
});


/**
 * 动画效果
 */
var animationClassName = 'animation-title';
btnAnimation.addEventListener('click', function () {
    title.classList.add(animationClassName);
});

title.addEventListener('webkitAnimationEnd', function () {
    this.classList.remove(animationClassName);
});