import { KEYS_ENG, KEYS_RUS, KEYS_CLASS } from './data.js';
import { addKeyText, createKeyboard } from './create-keyboard.js';

// const body = document.querySelector('body');

createKeyboard(KEYS_ENG.lowerCase);

const getAllKeys = (keys) => {
  const result = [];
  keys.forEach((arr) => {
    result.push(...arr);
  });

  return result;
};

const replaceAllKeys = (keys, element, keySelector) => {
  const arr = getAllKeys(keys);

  element.forEach((el, index) => {
    addKeyText(el, arr[index]);
  });

  keySelector.classList.toggle('active');
};

const activateCapsLock = () => {
  let isActive = false;
  const keyText = [...document.querySelectorAll('.keyboard__key > span')];
  const keyCapsLock = document.querySelector('.keyboard__key_caps-lock');

  keyCapsLock.addEventListener('click', () => {
    if (isActive === true) {
      replaceAllKeys(KEYS_ENG.lowerCase, keyText, keyCapsLock);
      isActive = false;
    } else {
      replaceAllKeys(KEYS_ENG.upperCase, keyText, keyCapsLock);
      isActive = true;
    }
  });
};

const activateShift = () => {
  let isActive = false;
  const keyText = [...document.querySelectorAll('.keyboard__key > span')];
  const keyShift = document.querySelectorAll('.keyboard__key_shift');

  keyShift.forEach((shift) => {
    shift.addEventListener('click', () => {
      if (isActive === true) {
        replaceAllKeys(KEYS_ENG.lowerCase, keyText, shift);
        keyShift.forEach((key) => key.classList.remove('active'));
        isActive = false;
      } else {
        replaceAllKeys(KEYS_ENG.shift, keyText, shift);
        keyShift.forEach((key) => key.classList.add('active'));
        isActive = true;

        setTimeout(() => {
          replaceAllKeys(KEYS_ENG.lowerCase, keyText, shift);
          keyShift.forEach((key) => key.classList.remove('active'));
          isActive = false;
        }, 1500);
      }
    });
  });
};

activateCapsLock();
activateShift();

const textInput = () => {
  const output = document.querySelector('.output-text');
  const keyText = [...document.querySelectorAll('.keyboard__key_main > span')];

  document.addEventListener('keydown', () => {
    output.focus();
  });

  keyText.forEach((key) => {
    key.addEventListener('click', () => {
      output.value += key.textContent;
    });
  });
};

textInput();
