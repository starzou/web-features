/**
 * @class index
 * @description
 * @time 2015-04-02 22:54
 * @author StarZou
 **/

/**
 *  Custom Elements 使用
 */
var AnchorPrototype = Object.create(HTMLElement.prototype);


AnchorPrototype.createdCallback = function () {
    var style = this.style;
    this.textContent = this.attributes.name.textContent + '-' + Date.now();
    style.display = 'block';
    style.color = 'red';
};


document.registerElement('data-anchor', {prototype: AnchorPrototype});


/**
 * Shadow DOM
 */
var tip = document.createElement('div');
var shadowRoot = tip.createShadowRoot();
shadowRoot.innerHTML = '<label>Name:</label><input type="text" value="StarZou"/>';
document.body.appendChild(tip);