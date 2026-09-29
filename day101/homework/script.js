// 1)შექმენი ფუნქცია sayHello, რომელიც აბრუნებს:

// "Hello, student!"

// შემდეგ ეს ფუნქცია შეინახე ცვლადში greeting.

// გამოიძახე greeting() და დაბეჭდე შედეგი.

function sayHello() {
  return "Hello, student!";
}

const greeting = sayHello;
console.log(greeting());

// 2)შექმენი:

// function add(a, b) {
//     return a + b;
// }

// შემდეგ:

// შექმენი calculate ცვლადი
// calculate-ს მიანიჭე add
// გამოიძახე calculate

function add(a, b) {
  return a + b;
}

const calculate = add
console.log(calculate(1,100))

// 3)შექმენი ორი ფუნქცია:

// multiply(a, b)
// subtract(a, b)

// პირველმა უნდა დააბრუნოს ორი რიცხვის ნამრავლი, მეორემ — სხვაობა.

// შემდეგ:

// let operation = multiply;

// გამოიყენე operation 5 და 4-ზე.

// შემდეგ შეცვალე:

// operation = subtract;

// და ისევ გამოიყენე 5 და 4-ზე.

function multiply(a ,b){
  return a * b
}

function subtract(a ,b){
  return a - b
}

let operation = multiply
console.log(operation(5,4))
operation = subtract
console.log(operation(5,4))


// 4)შექმენი სამი ფუნქცია:

// add(a, b)
// subtract(a, b)
// multiply(a, b)

// შემდეგ შექმენი ცვლადი:

// let operation;

// მას თავდაპირველად მიანიჭე add.

// გამოიძახე operation(20, 5).

// შემდეგ operation გადააკეთე multiply ფუნქციად და იგივე რიცხვებზე ისევ გამოიძახე.

// ბოლოს operation გადააკეთე subtract ფუნქციად.

// შედეგები უნდა იყოს:

// 25
// 100
// 15

function add2(a,b){
  return a + b
}

function multiply2(a ,b){
  return a * b
}

function subtract2(a ,b){
  return a - b
}

let operation2 = add2
console.log(operation2(20, 5))
operation2 = multiply2
console.log(operation2(20, 5))
operation2 = subtract2
console.log(operation2(20, 5))


// 5)function calculate(a, b, operation) {
//     // აქ უნდა გამოიყენო operation
// }

// ასევე შექმენი:

// add(a, b)
// multiply(a, b)

// calculate()-ს გადასცი სხვადასხვა ფუნქცია რომელიც უნდა გახდეს operation პარამეტრის მნშვნელობა.

// მაგალითად:

// calculate(5, 3, add)
// calculate(5, 3, multiply)

// შედეგი უნდა იყოს:

// 8
// 15

function add3(a, b) {
  return a + b
}

function multiply3(a, b) {
  return a * b
}

function calculate2(a, b, operation3) {
  return operation3(a, b)
}

console.log(calculate2(5, 3, add3))
console.log(calculate2(5, 3, multiply3))

// 6)double(number)
// square(number)
// negative(number)

// რომლებიც შესაბამისად:

// გააორმაგებს რიცხვს
// აიყვანს კვადრატში
// გახდის უარყოფითს

// შემდეგ შექმენი:

// function processNumber(number, operation) {

// }

// operation უნდა იყოს ფუნქცია.

// მაგალითად:

// processNumber(5, double)
// processNumber(5, square)
// processNumber(5, negative)

// მოსალოდნელი შედეგები:

// 10
// 25
// -5

function double(num) {
  return num * 2
}

function square(num) {
  return num * num
}

function negative(num) {
  return -num
}

function processNumber(num, operation4) {
  return operation4(num)
}

console.log(processNumber(5, double))
console.log(processNumber(5, square))
console.log(processNumber(5, negative))

// 7)შექმენი სამი ფუნქცია:

// passed(score)
// failed(score)

// passed უნდა დააბრუნოს:

// "Student passed"

// ხოლო failed:

// "Student failed"

// შემდეგ შექმენი:

// function showResult(score, resultFunction) {

// }

// resultFunction უნდა იყოს ფუნქცია, რომელსაც შენ გადასცემ.

// გამოიყენე:

// showResult(90, passed)
// showResult(40, failed)

function passed(score) {
  return "Student passed"
}

function failed(score) {
  return "Student failed"
}

function showResult(score, resultFunction) {
  return resultFunction(score)
}

console.log(showResult(90, passed))
console.log(showResult(40, failed))

// 8)მოცემულია:

// let price = 200;

// შექმენი სამი ფუნქცია:

// discount(price)
// tax(price)
// shipping(price)

// ფუნქციებმა უნდა გააკეთონ:

// discount → 20-ით შეამციროს ფასი
// tax → 18 დაუმატოს
// shipping → 30 დაუმატოს

// შემდეგ შექმენი:

// function processPrice(price, operation) {

// }

// გამოიყენე სამივე ფუნქცია ცალ-ცალკე.

// მაგალითად:

// processPrice(price, discount)
// processPrice(price, tax)
// processPrice(price, shipping)

let price = 200

function discount(price) {
  return price - 20
}

function tax(price) {
  return price + 18
}

function shipping(price) {
  return price + 30
}

function processPrice(price, operation) {
  return operation(price)
}

console.log(processPrice(price, discount))
console.log(processPrice(price, tax))
console.log(processPrice(price, shipping))

// 9)შექმენი:

// function transform(number, operation) {

// }

// და შემდეგ ეს ოთხი ფუნქცია:

// double(number)
// square(number)
// addTen(number)
// half(number)

// transform()-მა უნდა მიიღოს რიცხვი და ფუნქცია და დააბრუნოს შესაბამისი შედეგი.

// შემდეგ შეამოწმე:

// transform(20, double)
// transform(20, square)
// transform(20, addTen)
// transform(20, half)

// დამატებითი პირობა: transform()-ში არ უნდა დაწერო არც ერთი if და არც switch

function double(number) {
  return number * 2
}

function square(number) {
  return number * number
}

function addTen(number) {
  return number + 10
}

function half(number) {
  return number / 2
}

function transform(number, operation) {
  return operation(number)
}

console.log(transform(20, double))
console.log(transform(20, square))
console.log(transform(20, addTen))
console.log(transform(20, half))
