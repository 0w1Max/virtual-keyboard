const KEYS_ENG = {
  lowerCase: [
    ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  upperCase: [
    ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
};

const KEYS_RUS = {
  lowerCase: [
    ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
    ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  upperCase: [
    ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
    ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
};

const KEYS_CLASS = ['Backspace', 'Tab', 'Del', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt'];

const body = document.querySelector('body');

const createKey = (element, key) => {
  const elementKey = document.createElement('div');
  const elementKeyText = document.createElement('span');

  elementKey.classList.add('keyboard__key');

  if (KEYS_CLASS.includes(key)) {
    if (key === 'Caps Lock') {
      elementKey.classList.add('keyboard__key_caps-lock');
    } else {
      elementKey.classList.add(`keyboard__key_${key.toLowerCase()}`);
    }
  }

  if (key === '') {
    elementKey.classList.add('keyboard__key_space');
  }

  if (key === '↑') {
    elementKey.classList.add('keyboard__key_up');
  }

  if (key === '→') {
    elementKey.classList.add('keyboard__key_right');
  }

  if (key === '↓') {
    elementKey.classList.add('keyboard__key_down');
  }

  if (key === '←') {
    elementKey.classList.add('keyboard__key_left');
  }

  elementKeyText.textContent = key;

  element.insertAdjacentElement('beforeend', elementKey);
  elementKey.insertAdjacentElement('beforeend', elementKeyText);
};

const createKeyboard = (lang) => {
  const elementContainer = document.createElement('div');
  const elementKeyboard = document.createElement('div');

  elementContainer.classList.add('container');
  elementKeyboard.classList.add('keyboard');

  body.insertAdjacentElement('beforebegin', elementContainer);
  elementContainer.insertAdjacentElement('beforeend', elementKeyboard);

  lang.forEach((arr) => {
    const elementKeyboardRow = document.createElement('div');
    elementKeyboardRow.classList.add('keyboard__row');
    elementKeyboard.insertAdjacentElement('beforeend', elementKeyboardRow);

    arr.forEach((key) => createKey(elementKeyboardRow, key));
  });
};

createKeyboard(KEYS_ENG.lowerCase);

// const body = document.querySelector('body');
// const keyboard = document.querySelector('.keyboard');
// const keys = keyboard.querySelectorAll('.keyboard__key > span');

// keys.forEach((key) => key.addEventListener('click', (evt) => console.log(evt.target)));
