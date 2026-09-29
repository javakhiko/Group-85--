// 1)შექმენი სია სადაც მოათავსებ ადამიანის სახელებს,შენი დავალებაა რომ ამ სიას გადაუარო ფორ ლუპით და გამოიტანო მხოლოდ ის ელემენტები რომლის სიგრძე მეტია 5 ზე და იწყება ასო "g" ზე

let names = ["goga", "giorgi", "gabrieli", "saba", "nika", "givi"]

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 5 && names[i][0] === "g") {
    console.log(names[i])
  }
}

// 2)შექმენი სია სადაცც იქნება მხოლოდ რიცხვები , შენი დავალებაა გამოიტანო მხოლოდ ისეთი რიცხვები რომელიც ლუწია ან 100 ზე მეტია


let numbers = [10, 25, 40, 101, 150, 73, 200, 99]

for (let x = 0; x < numbers.length; x++) {
  if (numbers[x] % 2 === 0 || numbers[x] > 100) {
    console.log(numbers[x])
  }
}

// 3)შექმენი სია სადაც იქნება სტრინგ ტიპის მოანცემები , შენი დავალებაა გამოიტანო ეს სტრინგები შემდეგნაირად -->
// 1 გოგა
// 2 საბა
// 3 იოანე 
// ...და ა.შ

let people = ["goga", "giorgi", "gabrieli", "saba", "nika", "givi"]

for (let c = 0; c < people.length; c++) {
  console.log(c + 1, people[c])
}