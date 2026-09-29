// 1)შექმენი ფუნქცია editProducts(products), რომელსაც გადაეცემა პროდუქტების სია.

// მაგალითად:

// ["Laptop", "Mouse", "Keyboard", "Monitor"]

// ფუნქციამ უნდა:

// დასაწყისში დაამატოს "Phone"
// ბოლოში დაამატოს "Headphones"
// ამოიღოს ბოლო ელემენტი
// "Mouse" ჩაანაცვლოს "Webcam"-ით
// დააბრუნოს საბოლოო სია

function editProducts(products) {
  products.unshift("Phone");
  products.push("Headphones");
  products.pop();
  products[2] = "Webcam";

  return products;
}

console.log(editProducts(["Laptop", "Mouse", "Keyboard", "Monitor"]));

// 2)შექმენი ფუნქცია organizeNumbers(numbers).

// მოცემულია:

// [10, 20, 30, 40, 50, 60, 70, 80]

// ფუნქციამ უნდა:

// slice()-ით გამოყოს პირველი 4 ელემენტი;
// slice()-ით გამოყოს ბოლო 4 ელემენტი;
// მეორე სიის დასაწყისში დაამატოს 100;
// პირველ სიას ბოლოში დაამატოს 5;
// concat()-ით გააერთიანოს ორივე;
// დააბრუნოს საბოლოო სია.

function organizeNumbers(numbers) {
  let first = numbers.slice(0, 4);
  let second = numbers.slice(4);

  second.unshift(100);
  first.push(5);
  let result = first.concat(second);

  return result;
}

console.log(organizeNumbers([10, 20, 30, 40, 50, 60, 70, 80]));

// 3)შექმენი ფუნქცია studentManager(students).

// ["Giorgi", "Nika", "Ana", "Luka", "Saba"]

// ფუნქციამ უნდა:

// ამოიღოს პირველი სტუდენტი;
// დაამატოს "Mariam" დასაწყისში;
// დაამატოს "Dato" ბოლოში;
// "Luka" ჩაანაცვლოს "Gabrieli"-ით splice()-ის გამოყენებით;
// საბოლოო სიიდან slice()-ით შექმნას ახალი სია, რომელიც შეიცავს მხოლოდ პირველ 4 სტუდენტს;
// დააბრუნოს ახალი სია.

function studentManager(students) {
  students.shift();
  students.unshift("Mariam");
  students.push("Dato");
  students.splice(3, 1, "Gabrieli");
  let result2 = students.slice(0, 4);

  return result2;
}

console.log(studentManager(["Giorgi", "Nika", "Ana", "Luka", "Saba"]));

// 4)შექმენი ფუნქცია shoppingCart(cart).

// ["Bread", "Milk", "Cheese", "Apple", "Juice"]

// ფუნქციამ უნდა:

// დასაწყისში დაამატოს "Water";
// ბოლოში დაამატოს "Chocolate";
// ამოიღოს პირველი ელემენტი;
// splice()-ით "Cheese" ჩაანაცვლოს "Yogurt"-ით;
// slice()-ით შექმნას სიის პირველი 4 ელემენტის ასლი;
// დააბრუნოს ეს ახალი სია.

function shoppingCart(cart) {
  cart.unshift("Water");
  cart.push("Chocolate");
  cart.shift();
  cart.splice(2, 1, "Yogurt");
  let result3 = cart.slice(0, 4);

  return result3;
}

console.log(shoppingCart(["Bread", "Milk", "Cheese", "Apple", "Juice"]));

// 5)შექმენი ფუნქცია:

// finalList(numbers)

// მოცემულია:

// [15, 25, 35, 45, 55, 65]

// ფუნქციამ უნდა:

// შეამოწმოს Array.isArray()-ით, ნამდვილად სია გადაეცა თუ არა;
// თუ სია არ არის, დააბრუნოს "Not an array";
// თუ სიაა:
// shift()-ით ამოიღოს პირველი ელემენტი;
// unshift()-ით დასაწყისში დაამატოს 100;
// pop()-ით ამოიღოს ბოლო;
// push()-ით ბოლოში დაამატოს 200;
// splice()-ით შუაში დაამატოს 300;
// slice()-ით შექმნას საბოლოო სიის ასლი;
// დააბრუნოს ეს ასლი.

function finalList(numbers2) {
  if (!Array.isArray(numbers2)) {
    return "Not an array";
  }

  numbers2.shift();
  numbers2.unshift(100);
  numbers2.pop();
  numbers2.push(200);
  numbers2.splice(3, 0, 300);
  let result3 = numbers2.slice();

  return result3;
}

console.log(finalList([15, 25, 35, 45, 55, 65]));

// 9)for ციკლის გამოყენებით დაბეჭდე რიცხვები 1-დან 10-მდე.

for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 10)for-ის გამოყენებით დაბეჭდე 1-დან 20-მდე ყველა ლუწი რიცხვი.

for (i = 1; i < 21; i++) {
  i % 2 === 0 ? console.log(i) : null;
}

// 11)შექმენი ცვლადი:

// let sum = 0;

// for-ის გამოყენებით დაითვალე 1-დან 100-მდე რიცხვების ჯამი.

let sum = 0;
for (i = 1; i < 101; i++) {
  sum += i;
}
console.log(sum);

// 14)ფორ ით გამოიტანე შენი სახელი 20 ჯერ

for (i = 1; i < 21; i++) {
  console.log("andria");
}

// 15)გამოიტანე რიცხვები 20 დან 50 მდე 5 ის გამოტოვებით

for (i = 20; i < 50; i += 5) {
  console.log(i);
}

// 16)გამოიტანე შენი სახელი ასეთი ფორმატით --> 1 გოგა 2 გოგა ...

for (i = 1; i < 21; i++) {
  console.log(`${i}. andria`);
}
