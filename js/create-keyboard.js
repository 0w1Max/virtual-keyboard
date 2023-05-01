import { KEYS_CLASS } from './data.js';

const body = document.querySelector('body');

const addKeyText = (element, key) => {
  const theElement = element;
  theElement.textContent = key;
};

const createKey = (element, key) => {
  const elementKey = document.createElement('div');
  const elementKeyText = document.createElement('span');

  elementKey.classList.add('keyboard__key');
  elementKey.classList.add('keyboard__key_main');

  if (KEYS_CLASS.includes(key)) {
    if (key === 'Caps Lock') {
      elementKey.classList.add('keyboard__key_special');
      elementKey.classList.add('keyboard__key_caps-lock');
      elementKey.classList.remove('keyboard__key_main');
    } else {
      elementKey.classList.add('keyboard__key_special');
      elementKey.classList.add(`keyboard__key_${key.toLowerCase()}`);
      elementKey.classList.remove('keyboard__key_main');
    }
  }

  if (key === ' ') {
    elementKey.classList.add('keyboard__key_space');
  }

  if (key === '↑') {
    elementKey.classList.add('keyboard__key_special');
    elementKey.classList.add('keyboard__key_up');
  }

  if (key === '→') {
    elementKey.classList.add('keyboard__key_special');
    elementKey.classList.add('keyboard__key_right');
  }

  if (key === '↓') {
    elementKey.classList.add('keyboard__key_special');
    elementKey.classList.add('keyboard__key_down');
  }

  if (key === '←') {
    elementKey.classList.add('keyboard__key_special');
    elementKey.classList.add('keyboard__key_left');
  }

  addKeyText(elementKeyText, key);

  element.insertAdjacentElement('beforeend', elementKey);
  elementKey.insertAdjacentElement('beforeend', elementKeyText);
};

const createKeyboard = (lang) => {
  const elementContainer = document.createElement('div');
  const elementOutput = document.createElement('textarea');
  const elementKeyboard = document.createElement('div');

  elementContainer.classList.add('container');
  elementOutput.classList.add('output-text');
  elementKeyboard.classList.add('keyboard');

  elementOutput.placeholder = '_';

  body.insertAdjacentElement('afterbegin', elementContainer);
  elementContainer.insertAdjacentElement('beforeend', elementOutput);
  elementContainer.insertAdjacentElement('beforeend', elementKeyboard);

  lang.forEach((arr) => {
    const elementKeyboardRow = document.createElement('div');
    elementKeyboardRow.classList.add('keyboard__row');
    elementKeyboard.insertAdjacentElement('beforeend', elementKeyboardRow);

    arr.forEach((key) => createKey(elementKeyboardRow, key));
  });
};

export { addKeyText, createKeyboard };
