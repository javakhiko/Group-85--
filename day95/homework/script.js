// 1)https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
  return num > 0 ? -num : num;
}

// 2)https://www.codewars.com/kata/544675c6f971f7399a000e79

const stringToNumber = function (str) {
  return Number(str);
};

// 3)https://www.codewars.com/kata/55a70521798b14d4750000a4

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// 4)https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7

function makeUpperCase(str) {
  return str.toUpperCase();
}

// 5)https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!"
  }

  switch (p1) {
    case "rock":
      return p2 === "scissors" ? "Player 1 won!" : "Player 2 won!";
      break

    case "paper":
      return p2 === "rock" ? "Player 1 won!" : "Player 2 won!";
      break

    case "scissors":
      return p2 === "paper" ? "Player 1 won!" : "Player 2 won!";
      break
  }
};

// 6)https://www.codewars.com/kata/555a67db74814aa4ee0001b5

function testEven(n) {
  return n % 2 === 0
}

// 7)მოცემულია კოდი:

// let name = "Goga";

// function first() {
//     let age = 20;

//     function second() {
//         let city = "Tbilisi";

//         console.log(name);
//         console.log(age);
//         console.log(city);
//     }

//     second();
// }

// first();

// დავალება:

// მიუთითე თითოეული ცვლადის Scope.
// რომელი ცვლადის გამოყენება შეუძლია second() ფუნქციას?
// რომელი ცვლადის გამოყენება არ შეუძლია first() ფუნქციას?
// შეცვალე კოდი ისე, რომ city დაბეჭდო first() ფუნქციიდანაც.

// name → Global Scope
// age → Function Scope
// city → Function Scope

// name 
// age 
// city

// city

let name = "Goga"

function first() {
    let age = 20
    let city = "Tbilisi"

    function second() {
        console.log(name)
        console.log(age)
        console.log(city)
    }

    console.log(city)
    second()
}

first()

// 8)იპოვე შეცდომა Scope-ში
// let score = 100;

// if (score > 50) {
//     let message = "Passed";
// }

// console.log(message);

// დავალება:
// ახსენი, რატომ იძლევა ეს კოდი შეცდომას და შეცვალე ისე, რომ "Passed" დაიბეჭდოს.

// რადგან if ბლოკის scope-შია message ცვლადი.

if (score > 50) {
    let message = "Passed"
    console.log(message)
}


// 9)let x = 10;

// function outer() {
//     let x = 20;

//     function middle() {
//         let y = 30;

//         function inner() {
//             let x = 40;

//             console.log(x);
//             console.log(y);
//         }

//         inner();
//     }

//     middle();
// }

// outer();

// დავალება:

// რა დაიბეჭდება? 40 30
// inner()-ში რომელი x გამოიყენება? 40
// თუ inner()-დან let x = 40 წავშლით, რომელი x იქნება გამოყენებული? 20
// თუ middle()-დანაც წავშლით let y = 30-ს, რა მოხდება console.log(y)-ზე? udefined

// 10)let country = "Georgia";

// function school() {
//     let students = 20;

//     if (students > 10) {
//         let teacher = "Goga";

//         console.log(country);   Global Scope
//         console.log(students); block Scope
//         console.log(teacher); Block Scope
//     }
// }

// დავალება: თითოეულ console.log()-თან მიუწერე:

// country → ______ scope
// students → ______ scope
// teacher → ______ scope
