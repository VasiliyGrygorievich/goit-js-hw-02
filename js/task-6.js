'use strict'

let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`Введите число!`);

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  } else numbers.push(input);

} while (true);

console.log(`Общая сумма чисел равна - ${total}`);