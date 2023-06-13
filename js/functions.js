//Функция для проверки длины строки

function lengthCheck (input, maxLength) {
  const lengthInput = input.length;
  const lengthResult = lengthInput <= maxLength;
  return lengthResult;
}

console.log(lengthCheck('Всем добрый вечер ', 10));
console.log(lengthCheck('Всем добрый вечер ', 18));
console.log(lengthCheck('Всем добрый вечер ', 20));

//Функция проверки палиндрома

function palindromeCheck (input) {
  const inputWithoutSpace = input.replaceAll(' ', '');
  const inputToLower = inputWithoutSpace.toLowerCase();
  let invertInput = '';

  for (let i = inputToLower.length; i >= 1; i--) {
    const currentLetter = inputToLower[i - 1];
    invertInput = invertInput + currentLetter;
  }

  const palindromeResult = inputToLower === invertInput;
  return palindromeResult;
}

console.log(palindromeCheck('топот'));
console.log(palindromeCheck('ДовОд'));
console.log(palindromeCheck('Кекс'));
console.log(palindromeCheck('Лёша на полке клопа нашёл '));
