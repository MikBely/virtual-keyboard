import keysID from './keysID';

let num = 0;
class KeyButton {
  // constructor
  constructor(nameOfClass, tagName) {
    this.nameOfClass = nameOfClass;
    this.id = keysID[num].key;
    this.tagName = tagName;
  }

  // Create div of button
  createButton() {
    this.element = document.createElement('div');
    return this.element;
  }

  // All buttons have the same className
  addNameOfClass() {
    this.element.className(this.nameOfClass);
    return this.element;
  }

  addAttribute() {
    this.element.setAttribute('data-name', this.id);
    return this.element;
  }

  initButton() {
    this.createButton();
    this.addNameOfClass();
    this.addAttribute();
    this.element.textContent = `${keysID[num].en.lowercase}`;
    num += 1;
    return this.element;
  }
}
