// 1) let score = 87

// Ternary operator-ის გამოყენებით გამოიტანე:

// 90-100 → "Excellent"
// 75-89 → "Very Good"
// 60-74 → "Good"
// 40-59 → "Passed"
// 0-39 → "Failed"

let score = 87

let result1

result1 = score >= 90 ? "Excellent" : score >= 75 ? "Very Good" : score >= 60 ? "Good" : score >= 40 ? "Passed" : "Failed"

console.log(result1)


// 2) let age = 20
// let isStudent = true

// Nested ternary-ის გამოყენებით განსაზღვრე:

// თუ ასაკი 18-ზე ნაკლებია → "Minor"
// თუ ასაკი 18 ან მეტია და სტუდენტია → "Adult Student"
// თუ ასაკი 18 ან მეტია და სტუდენტი არ არის → "Adult"
// თუ ასაკი 65 ან მეტია → "Senior"

let age = 20
let isStudent = true

let result2

result2 = age >= 65 ? "Senior" : age < 18 ? "Minor" : isStudent ? "Adult Student" : "Adult"

console.log(result2)


// 3) let number = -14

// Ternary operator-ის გამოყენებით გამოიტანე:

// თუ რიცხვი 0-ზე მეტია → "Positive"
// თუ რიცხვი 0-ზე ნაკლებია → "Negative"
// თუ რიცხვი 0-ის ტოლია → "Zero"

// შემდეგ გაართულე:

// თუ დადებითია, დამატებით განსაზღვრე ლუწია თუ კენტი:

// Positive Even
// Positive Odd
// Negative
// Zero

let number = -14

let result3

result3 = number > 0 ? number % 2 === 0 ? "Positive Even" : "Positive Odd" : number < 0 ? "Negative" : "Zero"

console.log(result3)


// 4) let username = "adminGoga"

// ცარიელია → "Username is empty"
// იწყება "admin"-ით → "Admin"
// იწყება "user"-ით → "User"
// სხვა შემთხვევაში → "Unknown user"

let username = "adminGoga"

let result4

result4 = username === "" ? "Username is empty" : username.startsWith("admin") ? "Admin" : username.startsWith("user") ? "User" : "Unknown user"

console.log(result4)


// 5) let temperature = 28

// Nested ternary-ით გამოიტანე:

// 0-ზე ნაკლები → "Freezing"
// 0-10 → "Cold"
// 11-20 → "Cool"
// 21-30 → "Warm"
// 31+ → "Hot"

let temperature = 28

let result5

result5 = temperature < 0 ? "Freezing" : temperature <= 10 ? "Cold" : temperature <= 20 ? "Cool" : temperature <= 30 ? "Warm" : "Hot"

console.log(result5)


// 6) let a = 45
// let b = 78
// let c = 32

// Math.max-ის გარეშე, მხოლოდ nested ternary-ის გამოყენებით იპოვე უდიდესი რიცხვი

let a = 45
let b = 78
let c = 32

let result6

result6 = a > b ? a > c ? a : c : b > c ? b : c

console.log(result6)


// 7) let day = 4

// switch-ის გამოყენებით გამოიტანე:

// 1 → "Monday"
// 2 → "Tuesday"
// 3 → "Wednesday"
// 4 → "Thursday"
// 5 → "Friday"
// 6 → "Saturday"
// 7 → "Sunday"
// სხვა → "Invalid day"

let day = 4

switch (day) {
  case 1:
    console.log("Monday")
    break
  case 2:
    console.log("Tuesday")
    break
  case 3:
    console.log("Wednesday")
    break
  case 4:
    console.log("Thursday")
    break
  case 5:
    console.log("Friday")
    break
  case 6:
    console.log("Saturday")
    break
  case 7:
    console.log("Sunday")
    break
  default:
    console.log("Invalid day")
    break
}


// 8) let grade = "B"

// switch-ით:

// "A" → "Excellent"
// "B" → "Very Good"
// "C" → "Good"
// "D" → "Passed"
// "F" → "Failed"
// სხვა → "Invalid grade"

let grade = "B"

switch (grade) {
  case "A":
    console.log("Excellent")
    break
  case "B":
    console.log("Very Good")
    break
  case "C":
    console.log("Good")
    break
  case "D":
    console.log("Passed")
    break
  case "F":
    console.log("Failed")
    break
  default:
    console.log("Invalid grade")
    break
}


// 9) ეს დავალება როგორ შეიძლება გამარტივდეს switch-ებით
// შეგიძლიათ მოიძიოთ და დაწეროთ/მაგრამ გაიაზრეთ და შემდეგზე ჩავიბარებ აუცილებლად

// let month = 8

// switch-ის გამოყენებით განსაზღვრე სეზონი:

// 12, 1, 2 → "Winter"
// 3, 4, 5 → "Spring"
// 6, 7, 8 → "Summer"
// 9, 10, 11 → "Autumn"

// სხვა შემთხვევაში:

let month = 8

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter")
    break
  case 3:
  case 4:
  case 5:
    console.log("Spring")
    break
  case 6:
  case 7:
  case 8:
    console.log("Summer")
    break
  case 9:
  case 10:
  case 11:
    console.log("Autumn")
    break
  default:
    console.log("Invalid month")
    break
}


// 10) let a = 20
// let b = 5
// let operator = "*"

// switch-ის გამოყენებით შეასრულე ოპერაცია:

// "+" → შეკრება
// "-" → გამოკლება
// "*" → გამრავლება
// "/" → გაყოფა
// "%" → ნაშთი
// სხვა ოპერატორზე:
// "Invalid operator"

let num1 = 20;
let num2 = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    console.log(num1 / num2);
    break;

  case "%":
    console.log(num1 % num2);
    break;

  default:
    console.log("Invalid operator");
    break;
}


// 11) let action = "withdraw"
// let balance = 500
// let amount = 200

// switch-ით შექმენი ATM-ის სისტემა:

// "balance" →
// აჩვენოს ბალანსი

// "deposit" →
// დაამატოს თანხა

// "withdraw" →
// გამოაკლოს თანხა

// "exit" → "Goodbye"

// მაგრამ withdraw-ის დროს:

// თუ თანხა ბალანსზე მეტია → "Insufficient balance"
// თუ საკმარისი თანხაა → გამოაკლოს
// საბოლოოდ
// აჩვენოს დარჩენილი ბალანსი.

// შეზღუდვა: მოქმედების არჩევისთვის გამოიყენე switch,
// ხოლო თანხის საკმარისობის შესამოწმებლად შეგიძლია გამოიყენო if ან ternary.

let action = "withdraw"
let balance = 500
let amount = 200

switch (action) {
  case "balance":
    console.log(balance)
    break
  case "deposit":
    balance += amount
    console.log(balance)
    break
  case "withdraw":
    if (amount > balance) {
      console.log("Insufficient balance")
    } else {
      balance -= amount
      console.log(balance)
    }
    break
  case "exit":
    console.log("Goodbye")
    break
  default:
    console.log("Invalid action")
    break
}