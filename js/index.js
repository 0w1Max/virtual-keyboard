const KEYS_ENG = [
  ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '← Backspace'],
  ['Tab ⇄', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Enter ↵'],
  ['⇧ Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', '⇧ Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'],
];

const KEYS_RUS = [
  ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '← Backspace'],
  ['Tab ⇄', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'д', 'ж', 'э', 'Enter ↵'],
  ['⇧ Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', '⇧ Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'],
];

const body = document.querySelector('body');

const createKey = (element, key) => {
  const elementKey = document.createElement('div');
  const elementKeyText = document.createElement('span');

  elementKey.classList.add('keyboard__key');
  elementKeyText.textContent = key;

  element.insertAdjacentElement('beforeend', elementKey);
  elementKey.insertAdjacentElement('beforeend', elementKeyText);
};

const createKeyboard = (lang) => {
  const elementContainer = document.createElement('div');
  const elementKeyboard = document.createElement('div');

  elementContainer.classList.add('container');
  elementKeyboard.classList.add('keyboard');

  body.insertAdjacentElement('beforeend', elementContainer);
  elementContainer.insertAdjacentElement('beforeend', elementKeyboard);

  lang.forEach((arr) => {
    const elementKeyboardRow = document.createElement('div');
    elementKeyboardRow.classList.add('keyboard__row');
    elementKeyboard.insertAdjacentElement('beforeend', elementKeyboardRow);

    arr.forEach((key) => createKey(elementKeyboardRow, key));
  });
};

createKeyboard(KEYS_ENG);

// const body = document.querySelector('body');
// const keyboard = document.querySelector('.keyboard');
// const keys = keyboard.querySelectorAll('.keyboard__key > span');

// keys.forEach((key) => key.addEventListener('click', (evt) => console.log(evt.target)));
