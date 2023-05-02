import { KEYS_ENG, KEYS_RUS } from './data.js';
import { addKeyText, createKeyboard } from './create-keyboard.js';

const myStorage = window.localStorage;

if (myStorage.getItem('lang') === null) {
  myStorage.setItem('lang', JSON.stringify(KEYS_ENG));
}

let currentLang = JSON.parse(myStorage.getItem('lang'));
let isActiveCapsLock = false;
let isActiveShift = false;
let isActiveCtrl = false;

createKeyboard(currentLang.lowerCase);

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
      replaceAllKeys(currentLang.lowerCase, keyText, keyCapsLock);
      isActiveCapsLock = false;
    } else {
      replaceAllKeys(currentLang.upperCase, keyText, keyCapsLock);
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
        replaceAllKeys(currentLang.lowerCase, keyText, shift);
        keyShift.forEach((key) => key.classList.remove('active'));
        isActiveShift = false;
      } else {
        replaceAllKeys(currentLang.shift, keyText, shift);
        keyShift.forEach((key) => key.classList.add('active'));
        isActiveShift = true;

        setTimeout(() => {
          replaceAllKeys(currentLang.lowerCase, keyText, shift);
          keyShift.forEach((key) => key.classList.remove('active'));
          isActiveShift = false;
        }, 1500);
      }
    });
  });
};

const changeCurrentLang = () => {
  if (JSON.stringify(currentLang) === JSON.stringify(KEYS_ENG)) {
    myStorage.removeItem('lang');
    myStorage.setItem('lang', JSON.stringify(KEYS_RUS));
    currentLang = JSON.parse(myStorage.getItem('lang'));
    console.log('KEYS_ENG => KEYS_RUS');
  } else {
    myStorage.removeItem('lang');
    myStorage.setItem('lang', JSON.stringify(KEYS_ENG));
    currentLang = JSON.parse(myStorage.getItem('lang'));
    console.log('KEYS_RUS => KEYS_ENG');
  }

  return currentLang;
};

const changeLang = () => {
  const keyText = [...document.querySelectorAll('.keyboard__key > span')];
  const keyCapsLock = document.querySelector('.keyboard__key_caps-lock');
  const keyCtrl = [...document.querySelectorAll('.keyboard__key_ctrl')][0];
  const keyAlt = [...document.querySelectorAll('.keyboard__key_alt')][0];

  keyCtrl.addEventListener('click', () => {
    if (isActiveCtrl === true) {
      isActiveCtrl = false;
    } else {
      isActiveCtrl = true;
      keyCtrl.classList.toggle('active');

      keyAlt.addEventListener('click', () => {
        keyAlt.classList.toggle('active');
        replaceAllKeys(changeCurrentLang().lowerCase, keyText, keyAlt);
        isActiveCapsLock = false;
        isActiveCtrl = false;
        keyCapsLock.classList.remove('active');
        keyCtrl.classList.remove('active');
      });
    }
  });
};

activateCapsLock();
activateShift();
changeLang();

const textInput = () => {
  const output = document.querySelector('.output-text');
  const keyText = [...document.querySelectorAll('.keyboard__key_main > span')];

  document.addEventListener('keydown', (evt) => {
    keyText.forEach((key) => {
      const keyName = evt.key;

      output.focus();

      if (keyName === key.textContent) {
        key.classList.add('active');

        document.addEventListener('keyup', () => key.classList.remove('active'));
      }
    });
  });

  keyText.forEach((key) => {
    key.addEventListener('click', () => {
      output.value += key.textContent;
    });
  });
};

const textRemove = () => {
  const output = document.querySelector('.output-text');
  const keyBackspace = document.querySelector('.keyboard__key_backspace');
  const keyDel = document.querySelector('.keyboard__key_del');

  keyBackspace.addEventListener('click', () => {
    const text = document.querySelector('.output-text').value;
    output.value = text.substr(0, text.length - 1);
  });

  keyDel.addEventListener('click', () => {
    const text = Array.from(document.querySelector('.output-text').value);
    const start = output.selectionStart;
    const end = output.selectionEnd;

    if (start === end) {
      text.splice(end, 1);
    } else {
      text.splice(start, end - start);
    }

    output.value = text.join('');
  });
};

const clickEnter = () => {
  const output = document.querySelector('.output-text');
  const keyEnter = document.querySelector('.keyboard__key_enter');

  keyEnter.addEventListener('click', () => {
    output.value += '\n';
  });
};

const clickTab = () => {
  const output = document.querySelector('.output-text');
  const keyTab = document.querySelector('.keyboard__key_tab');

  keyTab.addEventListener('click', () => {
    output.value += '\u0009';
  });
};

textInput();
textRemove();
clickEnter();
clickTab();
