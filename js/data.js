const KEYS_ENG = {
  lowerCase: [
    ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  upperCase: [
    ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
    ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  shift: [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
    ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
};

const KEYS_RUS = {
  lowerCase: [
    ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
    ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  upperCase: [
    ['Ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
    ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
  shift: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
    ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '←', '↓', '→', 'Ctrl'],
  ],
};

const KEYS_CLASS = ['Backspace', 'Tab', 'Del', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt'];

export { KEYS_ENG, KEYS_RUS, KEYS_CLASS };
