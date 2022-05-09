import keys from './keys.js';

let num = 0;
class KeyButton {
  // constructor
  constructor(nameOfClass, tagName) {
    this.nameOfClass = nameOfClass;
    this.id = keys[num].key;
    this.tagName = tagName;
  }

  // Create div of button
  createButton() {
    this.element = document.createElement('div');
    return this.element;
  }

  // All buttons have the same className
  addNameOfClass() {
    this.element.classList.add(this.nameOfClass);
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
    this.element.textContent = `${keys[num].en.lowercase}`;
    num += 1;
    return this.element;
  }
}
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.prepend(container);
const double = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'Space'];
const keyboard = document.createElement('div');
container.append(keyboard);
keyboard.classList.add('keyboard');
const buttons = [];
for (let i = 0; i < 62; i += 1) {
  buttons.push(new KeyButton('buttonKey', 'div').initButton());
}
keyboard.append(...buttons);
const buttonElements = document.querySelectorAll('.buttonKey');
buttonElements.map((item) => (double.includes(item.dataset) ? item.classList.add('double') : item.classList.add('buttonKey')));
