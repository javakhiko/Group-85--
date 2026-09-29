// # რადგან დღეს გაერთიანებული გაკვეთლი გვქონდა სხვა ჯგუფთან და დავალებები ვერ განვიხილეთ წინა გაკვეთლის შემდეგისთვის ბევრ დავალებას არ დაგიმატებთ , თხოვნაა კარგად იმეცადინოთ იმ მასალაზე სადაც ახლა ვართ და თქვენითაც შეასრულოთ ექსპერიმენტები და პრაქტიკული ამოცანები

// ===============

// 1)შექმენი ფუნქცია processNumber, რომელსაც ექნება ორი პარამეტრი:

// number
// operation

// operation უნდა იყოს ფუნქცია.

// შექმენი 3 ცალკე ფუნქცია:

// double(number)
// triple(number)
// square(number)

// თითოეულმა უნდა დააბრუნოს შესაბამისი შედეგი.

// შემდეგ processNumber-ს გადასცი სხვადასხვა ფუნქცია და დაბეჭდე შედეგები.

// მაგალითად, საბოლოოდ უნდა შეგეძლოს:

// processNumber(5, double)
// processNumber(5, triple)
// processNumber(5, square)

function processNumber(number, operation) {
  return operation(number);
}

function double(number) {
  return number * 2;
}

function triple(number) {
  return number * 3;
}

function square(number) {
  return number * number;
}

console.log(processNumber(5, double));
console.log(processNumber(5, triple));
console.log(processNumber(5, square));

// 2)შექმენი ფუნქცია:

// processText(text, action)

// რომელიც მიიღებს ტექსტს და მეორე არგუმენტად ფუნქციას.

// შექმენი 3 ფუნქცია:

// makeUpperCase — ტექსტი გადაიყვანოს დიდ ასოებში
// makeLowerCase — ტექსტი გადაიყვანოს პატარა ასოებში
// getLength — დააბრუნოს ტექსტის სიგრძე

// შემდეგ processText გამოიყენე სამივე ფუნქციასთან.

// მაგალითად:

// processText("JavaScript", makeUpperCase)
// processText("JavaScript", makeLowerCase)
// processText("JavaScript", getLength)

function processText(text, action) {
  return action(text);
}

function makeUpperCase(text) {
  return text.toUpperCase();
}

function makeLowerCase(text) {
  return text.toLowerCase();
}

function getLength(text) {
  return text.length;
}

processText("JavaScript", makeUpperCase);
processText("JavaScript", makeLowerCase);
processText("JavaScript", getLength);

// 3)შექმენი ფუნქცია:

// calculate(a, b, operation)

// რომელიც მიიღებს ორ რიცხვს და მესამე არგუმენტად ფუნქციას.

// შექმენი 4 ცალკე ფუნქცია:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

// თითოეულმა შესაბამისი მათემატიკური მოქმედება უნდა შეასრულოს.

// შემდეგ გამოიყენე:

// calculate(10, 5, add)
// calculate(10, 5, subtract)
// calculate(10, 5, multiply)
// calculate(10, 5, divide)

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
