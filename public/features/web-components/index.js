/**
 * @class index
 * @description
 * @time 2015-04-02 22:54
 * @author StarZou
 **/


var AnchorPrototype = Object.create(HTMLElement.prototype);


AnchorPrototype.createdCallback = function () {
    var style = this.style;
    this.textContent = this.attributes.name.textContent + '-' + Date.now();
    style.display = 'block';
    style.color = 'red';
};


document.registerElement('data-anchor', {prototype: AnchorPrototype});