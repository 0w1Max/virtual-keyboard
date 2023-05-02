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
    elementKey.classList.add('keyboard__key_arrow');
    elementKey.classList.add('keyboard__key_up');
  }

  if (key === '→') {
    elementKey.classList.add('keyboard__key_special');
    elementKey.classList.add('keyboard__key_arrow');
    elementKey.classList.add('keyboard__key_right');
  }

  if (key === '↓') {
    elementKey.classList.add('keyboard__key_special');
    elementKey.classList.add('keyboard__key_arrow');
    elementKey.classList.add('keyboard__key_down');
  }

  if (key === '←') {
    elementKey.classList.add('keyboard__key_special');
    elementKey.classList.add('keyboard__key_arrow');
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
  const elementInfo = document.createElement('div');
  const elementInfoText = document.createElement('p');

  elementContainer.classList.add('container');
  elementOutput.classList.add('output-text');
  elementKeyboard.classList.add('keyboard');
  elementInfo.classList.add('info');
  elementInfoText.classList.add('info__text');

  elementOutput.placeholder = '_';
  elementInfoText.textContent = 'Клавиатура создана в операционной системе Windows 8.1. Для переключения языка комбинация: левыe ctrl + alt.';

  body.insertAdjacentElement('afterbegin', elementContainer);
  elementContainer.insertAdjacentElement('beforeend', elementOutput);
  elementContainer.insertAdjacentElement('beforeend', elementKeyboard);
  elementContainer.insertAdjacentElement('beforeend', elementInfo);
  elementInfo.insertAdjacentElement('beforeend', elementInfoText);

  lang.forEach((arr) => {
    const elementKeyboardRow = document.createElement('div');
    elementKeyboardRow.classList.add('keyboard__row');
    elementKeyboard.insertAdjacentElement('beforeend', elementKeyboardRow);

    arr.forEach((key) => createKey(elementKeyboardRow, key));
  });
};

export { addKeyText, createKeyboard };
