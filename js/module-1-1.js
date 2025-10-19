//! Завдання з репозиторію https://github.com/GoITteacher/FS-122-js/tree/module-1-1
//!1
//  Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.

// const name = 'Vladyslav';
// console.log(name);

//!2
// Створіть змінну age і присвойте їй ваш вік.
// Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".

// const age = 23;
// console.log(`Мені ${age} роки`);

//!3
// Створіть змінні x і y і присвойте їм довільні числа.
// Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.

// const x = 5;
// const y = 7;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

//!4
// Створіть змінну city і присвойте їй назву вашого міста.
// Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.

// const city = 'Kharkiv';
// const info = `Я живу в місті ${city}`;

// console.log(info);

//!5
// Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину.
// Виведіть обидва ці значення в консоль.

// const email = 'mytest@gmail.com';
// const sob = email.indexOf('@');
// console.log(email.slice(0, sob));
// console.log(email.slice(sob + 1));

//!6
// Створіть змінну price і присвойте їй число.
// Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".

// const price = 150;
// const priceHryvna = `Ціна: ${price} грн`;
// console.log(priceHryvna);

//!7
// Створіть змінну isLogged, яка має булеве значення.
// Виведіть в консоль повідомлення "Користувач авторизований", якщо isLogged дорівнює true, і "Користувач неавторизований",
// якщо isLogged дорівнює false.

// let isLoged = prompt('0 - 1');

// if (parseInt(isLoged)) alert('Користувач авторизований');
// else alert('Користувач неавторизований');

//!Завдання з https://github.com/GoITteacher/individual-2024/blob/TASKS/modules/module-1-1.md
//!1
// Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.

// const firstName = 'John';
// const lastName = 'Smith';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

//!2
// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.

// const a = 50;
// const b = 73;
// const sum = a + b;
// const diff = a - b;
// const prod = a * b;
// const quot = a / b;

// console.log(sum);
// console.log(diff);
// console.log(prod);
// console.log(quot);

//!3
// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.

// const radius = 5;
// const pi = 3.14;
// const area = pi * radius * radius;

// console.log(area);

//!4
// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.

// const someString = 'halo';
// console.log(someString.length);

//!5
// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.

// const someString = 'halo';
// const firstLetter = someString[0];
// const lastLetter = someString[someString.length - 1];

// console.log(firstLetter);
// console.log(lastLetter);

//!6
// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"

// const str1 = 'halo';
// const str2 = 'privet';
// const str3 = str1[str1.length - 1] + str2[str2.length - 1];

// console.log(str3);

//!7
// Створи змінну userValue та запиши до неї будь-яке число.

// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

// const userValue = 15;
// const res = userValue * Math.pow(5, userValue.toString().length);

// console.log(res);

//!8
// Виведіть на екран загальну кількість яблок і винограду.
// Різницю яблока і винограду теж виведіть у консоль.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(Math.abs(diff));

//!9
// Замінити вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// students += 50;
// console.log(students);

//!10
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
