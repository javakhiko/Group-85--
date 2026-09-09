// 1)let songs = ["Song A", "Song B", "Song C"];
// დაამატე "Song D" და "Song E" მასივის ბოლოში push()-ით.
// წაშალე ბოლო სიმღერა pop()-ით.
// კიდევ ერთხელ დაამატე "Song F".
// დაბეჭდე საბოლოო მასივი და წაშლილი ელემენტი.

let songs = ["Song A", "Song B", "Song C"]

songs.push("Song D", "Song E")

let deletedSong = songs.pop()

songs.push("Song F")

console.log(songs)
console.log(deletedSong)

// 2)let scores = [45, 67, 89, 34, 72];

// push()-ით დაამატე 91 და 56.

// შემდეგ pop()-ის გამოყენებით წაშალე ბოლო ელემენტი.

// დაბეჭდე:

// განახლებული მასივი

// მასივის ახალი სიგრძე

let scores = [45, 67, 89, 34, 72]

scores.push(91, 56)

scores.pop()

console.log(scores)
console.log(scores.length)

// 3)let students = ["Nika", "Gio", "Luka", "Ana"];
// shift()-ით ამოიღე პირველი მოსწავლე.
// unshift()-ით დასაწყისში დაამატე "Dato" და "Saba".

// დაბეჭდე საბოლოო მასივი.

let students = ["Nika", "Gio", "Luka", "Ana"]

students.shift()

students.unshift("Dato", "Saba")

console.log(students)

// 4)let messages = ["Hello", "How are you?", "Goodbye"];
// ამოიღე პირველი შეტყობინება.
// დასაწყისში დაამატე "Important!".
// დასაწყისში დაამატე "Warning!".
// ბოლოს დაამატე "See you!".
// ბოლოს ამოიღე ბოლო შეტყობინება.

// დაბეჭდე საბოლოო შედეგი.

let messages = ["Hello", "How are you?", "Goodbye"]

messages.shift()

messages.unshift("Important!")

messages.unshift("Warning!")

messages.push("See you!")

messages.pop()

console.log(messages)

// 5)let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"];

// slice()-ის გამოყენებით შექმენი:

// პირველი 3 პროდუქტის ახალი მასივი.
// ბოლო 3 პროდუქტის ახალი მასივი.
// "Phone"-დან "Watch"-მდე პროდუქტების ახალი მასივი.

// მთავარი პირობა: ორიგინალი products არ უნდა შეიცვალოს.

let products = ["Laptop", "Phone", "Tablet", "Watch", "Headphones", "Camera"]

let firstThree = products.slice(0, 3)

let lastThree = products.slice(3, 6)

let phoneToWatch = products.slice(1, 4)

console.log(firstThree)
console.log(lastThree)
console.log(phoneToWatch)
console.log(products)

// 6)let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// slice()-ით მიიღე:

// [30, 40, 50, 60]

// შემდეგ მიიღე:

// [50, 60, 70, 80]

// ორიგინალი მასივი უცვლელი უნდა დარჩეს.

let numbers = [10, 20, 30, 40, 50, 60, 70, 80]

let firstPart = numbers.slice(2, 6)

let secondPart = numbers.slice(4, 8)

console.log(firstPart)
console.log(secondPart)
console.log(numbers)


// 7)let colors = ["red", "blue", "green", "yellow", "black"];

// splice()-ის გამოყენებით:

// წაშალე "green".
// "blue"-ს შემდეგ დაამატე "purple".
// "yellow" შეცვალე "orange"-ით.

// საბოლოოდ უნდა მიიღო:

// ["red", "blue", "purple", "orange", "black"]

let colors = ["red", "blue", "green", "yellow", "black"]

colors.splice(2, 1)

colors.splice(2, 0, "purple")

colors.splice(3, 1, "orange")

console.log(colors)

// 8)let numbers = [5, 10, 15, 20, 25, 30];

// splice()-ის გამოყენებით:

// წაშალე 15 და 20;
// მათ ადგილას ჩასვი 100 და 200;
// შემდეგ ბოლოში არსებული 30 წაშალე.

let numbers2 = [5, 10, 15, 20, 25, 30]

numbers2.splice(2, 2, 100, 200)

numbers2.splice(4, 1)

console.log(numbers2)

// 9)let fruits = ["apple", "banana", "orange", "kiwi", "mango"];

// toSpliced()-ით შექმენი ახალი მასივი, სადაც:

// "orange" წაშლილია;
// მის ადგილას არის "watermelon".

// შემდეგ დაბეჭდე ორიგინალი და ახალი მასივი, რათა დარწმუნდე, რომ ორიგინალი არ შეცვლილა.

let fruits = ["apple", "banana", "orange", "kiwi", "mango"]

let newFruits = fruits.toSpliced(2, 1, "watermelon")

console.log(fruits)
console.log(newFruits)