/**
 * @class index
 * @description
 * @time 2015-04-02 22:54
 * @author StarZou
 **/


var AnchorPrototype = Object.create(HTMLElement.prototype);


AnchorPrototype.createdCallback = function () {
    this.textContent = this.attributes.name.textContent + '-' + Date.now();
    this.style.display = 'block';
};


document.registerElement('data-anchor', {prototype: AnchorPrototype});