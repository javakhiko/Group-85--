// 1)let numbers = [12, 45, 7, 23, 89, 34, 16, 50];
// პირველი ელემენტი შეცვალე 100-ით
// ბოლო ელემენტი შეცვალე 200-ით
// მესამე ელემენტი გაზარდე 10-ით
// მეხუთე ელემენტი გაანახევრე
// მეოთხე და მეშვიდე ელემენტები ადგილებზე გაცვალე

// საბოლოოდ გამოიტანე განახლებული მასივი.

let numbers = [12, 45, 7, 23, 89, 34, 16, 50]

numbers[0] = 100
numbers[7] = 200
numbers[2] += 10
numbers[4] /= 2

let temp = numbers[3]
numbers[3] = numbers[6]
numbers[6] = temp

console.log(numbers)

// 2)კონკრეტული ელემენტების პოვნა და შეცვლა
// let numbers = [15, 8, 42, 8, 31, 42, 19, 8];

// მოთხოვნები:

// პირველი 8 შეცვალე 80-ით
// პირველი 42 შეცვალე 420-ით
// ბოლო 8 შეცვალე 800-ით
// მეორე ელემენტი გაზარდე 5-ით
// ბოლოს დაბეჭდე მასივი

// 3)let fruits = ["apple", "banana", "orange", "kiwi", "mango", "peach"];

// შექმენი ცვლადი:

// let index = 3;

// პროგრამამ უნდა:

// გამოიტანოს არჩეულ ინდექსზე არსებული ხილი;
// შეცვალოს ის "watermelon"-ით;
// ისევ გამოიტანოს ეს ელემენტი;
// გამოიტანოს საბოლოო მასივი.

// შემდეგ შეცვალე index სხვადასხვა მნიშვნელობით და შეამოწმე შედეგი.

let fruits = ["apple", "banana", "orange", "kiwi", "mango", "peach"]

let index = 3

console.log(fruits[index])

fruits[index] = "watermelon"

console.log(fruits[index])

console.log(fruits)

// 4)შექმენი სახელების სია ,ასევე შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებ რაიმე რიცხვს(დაგჭირდებათ შემოტანილი მნშვენლობის რიცხვად გარდაქმნა) და გამოიტანეთ ამ რიცხვზე მდგომი ელემენტი კონსოლში

let names = ["Andria", "Giorgi", "Nika", "Saba", "Luka"]

let index2 = Number(prompt("შეიყვანე რიცხვი:"))

console.log(names[index2])

// 5)ელემენტის ჩანაცვლება მისი პოზიციის მიხედვით
// let students = [
//     "Giorgi",
//     "Nika",
//     "Saba",
//     "Luka",
//     "Dato",
//     "Ana"
// ];

// მოცემულია:

// let position = 4;
// let newName = "Goga";

// position აღნიშნავს ადამიანურ პოზიციას — ანუ 1 ნიშნავს პირველ ელემენტს.

// დავალება:

// position-ის მიხედვით იპოვე შესაბამისი ელემენტი;
// ჩაანაცვლე newName-ით;
// თუ ასეთი პოზიცია არ არსებობს, გამოიტანე "Invalid position".

let students = [
  "Giorgi",
  "Nika",
  "Saba",
  "Luka",
  "Dato",
  "Ana"
]

let position = 4
let newName = "Goga"

if (position >= 1 && position <= students.length) {
  students[position - 1] = newName
  console.log(students)
} else {
  console.log("Invalid position")
}

// 6). ელემენტის წაშლა და მის ადგილას ახლის ჩასმა
// let colors = ["red", "blue", "green", "yellow", "black", "white"];

// დავალება:

// წაშალე "green";
// მის ადგილას ჩასვი "purple";
// "black" შეცვალე "pink"-ით;
// პირველი ელემენტი გადაიტანე ბოლოში.

let colors = ["red", "blue", "green", "yellow", "black", "white"]

colors[2] = "purple"
colors[4] = "pink"
colors[5] = colors[0]

console.log(colors)

// 7)let numbers = [5, 10, 15, 20, 25, 30, 35, 40];

// უნდა მიიღო:

// [5, 100, 150, 200, 250, 300, 35, 40]

// ანუ მეორე ელემენტიდან მეექვსე ელემენტამდე თითოეული ელემენტი გაამრავლე 10-ზე.

let numbers = [5, 10, 15, 20, 25, 30, 35, 40]

numbers[1] *= 10
numbers[2] *= 10
numbers[3] *= 10
numbers[4] *= 10
numbers[5] *= 10

console.log(numbers)

// 8)let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// პროგრამამ უნდა შეასრულოს:

// კენტ ინდექსებზე მყოფი ელემენტები გაზარდოს 5-ით;
// ლუწ ინდექსებზე მყოფი ელემენტები გაამრავლოს 2-ზე.

let numbers = [10, 20, 30, 40, 50, 60, 70, 80]

numbers[0] *= 2
numbers[1] += 5
numbers[2] *= 2
numbers[3] += 5
numbers[4] *= 2
numbers[5] += 5
numbers[6] *= 2
numbers[7] += 5

console.log(numbers)