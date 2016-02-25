/**
 * @class index
 * @description
 * @time 2015-04-02 22:54
 * @author StarZou
 **/

// Create a new object based of the HTMLElement prototype
var XColumnsProto = Object.create(HTMLElement.prototype);
var XColumnProto = Object.create(HTMLElement.prototype);

XColumnsProto.createdCallback = function () {
  // Create a Shadow Root

  var size = +this.getAttribute('size') || 0;

  var html = '', shadow;

  if (size > 0) {

    for (var index = 0; index < size; index++) {
      html += '<x-column></x-column>';
    }

    shadow = this.createShadowRoot();
    shadow.innerHTML = html;
  }

  console.log(size);
};


XColumnProto.createdCallback = function () {
  // Create a Shadow Root
  var shadow = this.createShadowRoot();

  var div = document.createElement('div');

  div.style.display = 'inline-block';
  div.style.height = '200px';
  div.style.width = '200px';
  div.style.border = '1px solid #2196F3';

  shadow.appendChild(div);
};

// Register the new element.
document.registerElement('x-columns', {
  prototype: XColumnsProto
});

document.registerElement('x-column', {
  prototype: XColumnProto
});