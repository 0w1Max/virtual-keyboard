import { KEYS_ENG, KEYS_RUS, KEYS_CLASS } from './data.js';
import { addKeyText, createKeyboard } from './create-keyboard.js';

// const body = document.querySelector('body');
let currentLang = KEYS_ENG.lowerCase;
let isActiveCapsLock = false;
let isActiveShift = false;
let isActiveCtrl = false;

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
  const keyText = [...document.querySelectorAll('.keyboard__key > span')];
  const keyCapsLock = document.querySelector('.keyboard__key_caps-lock');

  keyCapsLock.addEventListener('click', () => {
    if (isActiveCapsLock === true) {
      replaceAllKeys(KEYS_ENG.lowerCase, keyText, keyCapsLock);
      isActiveCapsLock = false;
    } else {
      replaceAllKeys(KEYS_ENG.upperCase, keyText, keyCapsLock);
      isActiveCapsLock = true;
    }
  });
};

const activateShift = () => {
  const keyText = [...document.querySelectorAll('.keyboard__key > span')];
  const keyShift = document.querySelectorAll('.keyboard__key_shift');

  keyShift.forEach((shift) => {
    shift.addEventListener('click', () => {
      if (isActiveShift === true) {
        replaceAllKeys(KEYS_ENG.lowerCase, keyText, shift);
        keyShift.forEach((key) => key.classList.remove('active'));
        isActiveShift = false;
      } else {
        replaceAllKeys(KEYS_ENG.shift, keyText, shift);
        keyShift.forEach((key) => key.classList.add('active'));
        isActiveShift = true;

        setTimeout(() => {
          replaceAllKeys(KEYS_ENG.lowerCase, keyText, shift);
          keyShift.forEach((key) => key.classList.remove('active'));
          isActiveShift = false;
        }, 1500);
      }
    });
  });
};

const changeLang = () => {
  const keyText = [...document.querySelectorAll('.keyboard__key > span')];
  const keyCtrl = document.querySelectorAll('.keyboard__key_ctrl');
  const keyAlt = document.querySelectorAll('.keyboard__key_alt');

  keyCtrl.forEach((ctrl) => {
    keyAlt.forEach((alt) => {
      ctrl.addEventListener('click', () => {
        if (isActiveCtrl === true) {
          isActiveCtrl = false;
        } else {
          isActiveCtrl = true;
          ctrl.classList.toggle('active');

          alt.addEventListener('click', () => {
            alt.classList.toggle('active');
            replaceAllKeys(KEYS_RUS.lowerCase, keyText, alt);
            ctrl.classList.remove('active');
          });
        }
      });
    });
  });
};

activateCapsLock();
activateShift();
changeLang();

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
