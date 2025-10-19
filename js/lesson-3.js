//!1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const arr = numbers.map(el => el * el);
// console.log(arr);

//!2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const arr = data.flatMap(el => el.values);

// console.log(arr);

//!3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// console.log(people.some(el => el.age < 20));

//!4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// console.log(numbers.every(el => el % 2 === 0));

//!5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log(numbers.find(el => el % 2 !== 0));

//!6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// console.log(numbersArray.toSorted((a, b) => a - b));

//!7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// console.log(stringArray.toSorted((a, b) => a.localeCompare(b.localeCompare)));

//!8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// console.log(users.toSorted((a, b) => a.age - b.age));

//!9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const arr = user.filter(el => el.age > 20);

// console.log(arr);

//!10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const arr = numbers.reduce((a, b) => a + b);

// console.log(arr);

//!11
// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:

// class Calculator {
//   number(value) {
//     this.value = value;
//     console.log(`Початкове значення: ${value}`);
//     return this;
//   }
//   getResult() {
//     console.log(`Результат: ${this.value}`);
//     return this;
//   }
//   add(value) {
//     this.value += value;
//     console.log(`Додаємо ${value}`);
//     this.getResult();
//     return this;
//   }
//   subtract(value) {
//     this.value -= value;
//     console.log(`Віднімаємо ${value}`);
//     this.getResult();
//     return this;
//   }
//   divide(value) {
//     if (value === 0) return 'Неможливо ділити на нуль';
//     this.value /= value;
//     console.log(`Ділимо на ${value}`);
//     this.getResult();
//     return this;
//   }
//   multiply(value) {
//     this.value *= value;
//     console.log(`Множимо на ${value}`);
//     this.getResult();
//     return this;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

//!12
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const user = new Client(`John`, `test@mail.ua`);

// console.log(user);

// user.email = 'test@';

// console.log(user);

//!13
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Empoyee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const user = new Person('andy', '23', 'M', 'test@');
// console.log(user.getDetails());

// const andy = new Empoyee('andy', `23`, `M`, `test@`, '500', `dev`);
// console.log(andy.getDetails());
// console.log(andy.getEmployeeDetails());

//!Завдання з репозиторію
//!1
// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

// const letMeSeeYourName = callback => {
//   let name = '';
//   while (name.length < 1) {
//     name = prompt("Вкажи ім'я");
//   }
//   return callback(name);
// };

// const greet = name => `Привіт ${name}`;

// console.log(letMeSeeYourName(greet));

//!2
//Підрахунок кількості повторень
//Дано масив:
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
// apple: 3,
// banana: 2,
// orange: 1
//}

// const obj = fruits.reduce((acc, el) => {
//   if (acc[el]) acc[el]++;
//   else acc[el] = 1;
//   return acc;
// }, {});

// console.log(obj);

//!3
// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//!4
// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action.call(product);
// }

// // =====================================================
// callAction(product.showPrice);

//!5
// Найбільше число в масиві
//Дано масив чисел:

// const numbers = [10, 25, 48, 7, 32, 18];
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48

// const num = numbers.reduce((acc, el) => {
//   if (el > acc) acc = el;
//   return acc;
// }, 0);

// console.log(num);

//!6
//Згладження вкладеного масиву
//Дано вкладений масив:

// const nestedArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
//Завдання: За допомогою reduce перетворіть вкладений масив у плаский.
//Очікуваний результат:
//[1, 2, 3, 4, 5, 6]

// console.log(nestedArray.flatMap(el => el));

//!7
// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

// const savePassword = password => {
//   return isValid(password);
// };

// const isValid = pass => {
//   return pass === 'пароль';
// };

// console.log(savePassword('пароль'));

//!8
//Підрахунок загальної вартості товарів
//Дано масив товарів:
// const cart = [
//   { product: 'Apple', price: 1, quantity: 4 },
//   { product: 'Banana', price: 0.5, quantity: 10 },
//   { product: 'Orange', price: 0.8, quantity: 6 },
// ];
//Завдання: За допомогою reduce підрахуйте загальну вартість усіх товарів у кошику.
//Очікуваний результат:
//13.8

// console.log(cart.reduce((acc, el) => acc + el.price * el.quantity, 0));

//!9
//Сортування чисел за зростанням
//Дано масив чисел:
// const numbers = [5, 2, 9, 1, 5, 6];
//Завдання: Використайте toSorted, щоб відсортувати числа за зростанням.
//Очікуваний результат:

//[1, 2, 5, 5, 6, 9]

// console.log(numbers.toSorted((a, b) => a - b));

//!10
// Напиши клас Notes, який керує колекцієї заміток у властивості items
// Замітка - це об"єкт із властивостями text та priority
// Додай класу статичну властивість PRIORITY,
//     в якому буде зберігатися об"єкт з пріоритетами
//     Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)

// class Notes {
//   static PRIORITY = {
//     LOW: 1,
//     HIGHT: 2,
//   };
//   items = [];

//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     this.items = this.items.filter(el => el.text !== text);
//   }
//   updatePriority(text, newPriority) {
//     const temp = this.items.find(el => el.text === text);
//     temp.priority = newPriority;
//   }
// }

// const note1 = new Notes();

// note1.addNote({ text: 'Note1', priority: Notes.PRIORITY.LOW });
// note1.addNote({ text: 'Note2', priority: Notes.PRIORITY.LOW });
// note1.addNote({ text: 'Note3', priority: Notes.PRIORITY.LOW });
// note1.removeNote('Note1');
// note1.updatePriority('Note2', Notes.PRIORITY.HIGHT);
// console.log(note1.items);

//!11
//Сортування рядків за довжиною
//Дано той самий масив рядків:

// const words = ['banana', 'apple', 'grape', 'orange', 'kiwi'];
//Завдання: Відсортуйте рядки за їхньою довжиною (від найкоротшого до найдовшого).
//Очікуваний результат:

//['kiwi', 'apple', 'grape', 'banana', 'orange']

// console.log(words.toSorted((a, b) => a.length - b.length));

//!12
//Перетворення масиву в об'єкт
//Дано масив об'єктів:
// const people = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ];
//Завдання: За допомогою reduce перетворіть масив у об'єкт, де ключем буде id, а значенням — відповідний об'єкт.
//Очікуваний результат:

//{
// 1: { id: 1, name: 'Alice' },
// 2: { id: 2, name: 'Bob' },
// 3: { id: 3, name: 'Charlie' }
//}

// const obj = people.reduce((acc, el) => {
//   acc[el.id] = el;
//   return acc;
// }, {});

// console.log(obj);
