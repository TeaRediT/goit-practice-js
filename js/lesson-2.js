//!1----------------------------------------------------------------------
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// if (styles.indexOf('blues') !== -1) styles[styles.indexOf('blues')] = 'classic';

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// logItems(styles);
//!2----------------------------------------------------------------------
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const login = prompt('login');
//   return array.indexOf(login) !== -1 ? `Welcome, ${login}` : 'User not found';
// }

// console.log(checkLogin(logins));
//!3----------------------------------------------------------------------
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let sum = 0;
//   for (const el of arguments) {
//     sum += el;
//   }
//   return sum / arguments.length;
// }
// console.log(caclculateAverage(3, 2, 4, 5, 1));
//!4----------------------------------------------------------------------
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function calcArray(someArr) {
//   const newArr = [];

//   for (let i = 0; i < someArr.length - 1; i++) {
//     newArr.push(someArr[i] + someArr[i + 1]);
//   }

//   return newArr;
// }

// console.log(calcArray(someArr));
//!5----------------------------------------------------------------------
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   return Array.isArray(numbers)
//     ? Math.min(...numbers)
//     : 'Sorry, it is not an array';
// }

// console.log(findSmallestNumber(numbers));
//!6----------------------------------------------------------------------
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// function findLongestWord(string) {
//   let newString = '';
//   string = string.split(' ');
//   for (let i = 0; i < string.length; i++) {
//     let tempStr = string[i];

//     if (tempStr.length > newString.length) newString = string[i];
//   }
//   return newString;
// }

// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'
//!7----------------------------------------------------------------------
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// console.log(user);

// const arr = Object.keys(user);

// for (const el of arr) {
//   console.log(`${el} : ${user[el]}`);
// }
//!8----------------------------------------------------------------------
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function allSalaries(obj) {
//   let salariesArr = Object.values(obj);
//   let sum = 0;
//   for (const el of salariesArr) {
//     sum += el;
//   }
//   return sum;
// }

// console.log(allSalaries(salaries));
//!9----------------------------------------------------------------------
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this[a] = b;
//   },

//   sum() {
//     if (!this.exist()) return 'No such propeties';
//     let sum = 0;
//     const arr = Object.values(this);
//     for (const el of arr) {
//       if (Number.isInteger(el)) sum += el;
//     }
//     return sum;
//   },

//   mult() {
//     if (!this.exist()) return 'No such propeties';
//     let sum = 1;
//     const arr = Object.values(this);
//     for (const el of arr) {
//       if (Number.isInteger(el)) sum *= el;
//     }
//     return sum;
//   },

//   exist() {
//     const arr = Object.keys(this);
//     return arr.length > 0;
//   },
// };

// console.log(calculator);
// calculator.read('q', 3);
// calculator.read('w', 31);
// console.log(calculator.sum());
// console.log(calculator);
// console.log(calculator.mult());
// console.log(calculator);
//!10----------------------------------------------------------------------
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let sum = 0;
//   let count = 0;
//   for (const el of fruits) {
//     if (el.name === fruitName) {
//       sum += el.price * el.quantity;
//       count += el.quantity;
//     }
//   }
//   return `Фруктів ${fruitName} є в кількості ${count} на суму ${sum}`;
// }
// console.log(calcTotalPrice(fruits, 'Банан'));
//!Завдання з https://github.com/FDevGoIt/blended-2-module-3-4----------------------------------------------------------------------
// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mood зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const arr = Object.keys(user);

// for (const el of arr) {
//   console.log(`${el} : ${user[el]}`);
// }
//!2----------------------------------------------------------------------
// todo У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// const arr = Object.values(salaries);
// for (const el of arr) {
//   sum += el;
// }

// console.log(sum);
//!3----------------------------------------------------------------------
// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат

// const calculator = {
//   read(a, b) {
//     this[a] = b;
//   },

//   sum() {
//     let sum = 0;
//     const arr = Object.values(this);
//     for (const el of arr) {
//       if (Number.isInteger(el)) sum += el;
//     }
//     return sum;
//   },

//   mult() {
//     let sum = 1;
//     const arr = Object.values(this);
//     for (const el of arr) {
//       if (Number.isInteger(el)) sum *= el;
//     }
//     return sum;
//   },
// };

// calculator.read('q', 10);
// calculator.read('e', 10);
// console.log(calculator.sum());
//!4----------------------------------------------------------------------
// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

// const stonesArray = [
//   { name: 'Ізумруд', price: 1300, quantity: 4 },
//   { name: 'Брилліант', price: 2700, quantity: 6 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   let sum = 0;
//   let count = 0;
//   for (const el of stones) {
//     if (el.name === stonesName) {
//       sum += el.price * el.quantity;
//       count += el.quantity;
//     }
//   }
//   return `Мінералів ${stonesName} є в кількості ${count} на суму ${sum}`;
// }

// console.log(calcTotalPrice(stonesArray, 'Сапфір'));
//!5----------------------------------------------------------------------
// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// function updateObject(obj, ...args) {
//   if (args.length < 1) return obj;
//   const newObj = {};
//   const arr = Object.keys(obj);
//   for (const el of arr) {
//     if (!args.includes(el)) newObj[el] = obj[el];
//   }
//   return newObj;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a'));
