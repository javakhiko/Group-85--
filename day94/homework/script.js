// 1)codacademy დაასრულეთ function თავი თლიანად


// 2)რიცხვის შემოწმება — Arrow Function

// შექმენი checkNumber single-line Arrow Function-ის სახით.

// ფუნქციამ მიიღოს რიცხვი და დააბრუნოს:

// "Positive" — თუ რიცხვი დადებითია
// "Negative" — თუ უარყოფითია
// "Zero" — თუ 0-ია

const checkNumber = number => number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero"

console.log(checkNumber(10))
console.log(checkNumber(-5))
console.log(checkNumber(0))


// 3)შექმენი getGrade ფუნქცია Function Expression-ის გამოყენებით.

// მიიღოს score და დააბრუნოს:

// 90–100 → "A"
// 80–89 → "B"
// 70–79 → "C"
// 60–69 → "D"
// 0–59 → "F"

// თუ ქულა 0-ზე ნაკლებია ან 100-ზე მეტია → "Invalid score".

const getGrade = function(score) {
  if (score < 0 || score > 100) {
    return "Invalid score"
  } else if (score >= 90) {
    return "A"
  } else if (score >= 80) {
    return "B"
  } else if (score >= 70) {
    return "C"
  } else if (score >= 60) {
    return "D"
  } else {
    return "F"
  }
}

console.log(getGrade(95))
console.log(getGrade(85))
console.log(getGrade(75))
console.log(getGrade(65))
console.log(getGrade(40))
console.log(getGrade(110))


// 4)შექმენი checkWord multi-line Arrow Function-ის გამოყენებით.

// ფუნქციამ მიიღოს სიტყვა და:

// გადაიყვანოს lowercase-ში
// შეამოწმოს იწყება თუ არა "a"-თი
// თუ იწყება → დააბრუნოს "Starts with A"
// წინააღმდეგ შემთხვევაში → "Does not start with A"

const checkWord = word => {
  const lowercaseWord = word.toLowerCase()

  if (lowercaseWord.startsWith("a")) {
    return "Starts with A"
  } else {
    return "Does not start with A"
  }
}

console.log(checkWord("Apple"))
console.log(checkWord("banana"))


// 5)შექმენი analyzeNumbers Function Expression-ის გამოყენებით.

// ფუნქციამ მიიღოს 3 რიცხვი და დააბრუნოს ყველაზე დიდი რიცხვი.

// მაგალითად:

// analyzeNumbers(15, 42, 27) //42

const analyzeNumbers = function(num1, num2, num3) {
  return Math.max(num1, num2, num3)
}

console.log(analyzeNumbers(15, 42, 27))
console.log(analyzeNumbers(100, 25, 50))


// 6)შექმენი analyzeText multi-line Arrow Function.

// ფუნქციამ მიიღოს ტექსტი და დაკონსოლოს:

// ტექსტის სიგრძე
// uppercase ფორმა
// იწყება თუ არა "Hello"-თი

const analyzeText = text => {
  console.log(text.length)
  console.log(text.toUpperCase())
  console.log(text.startsWith("Hello"))
}

analyzeText("Hello World")
analyzeText("Good morning")


// 7)მიიღოს:

// price, discount

// წესები:

// თუ discount ≥ 50 → "Discount too high"
// თუ discount < 0 → "Invalid discount"
// სხვა შემთხვევაში გამოითვალოს საბოლოო ფასი.

const calculatePrice = function(price, discount) {
  if (discount >= 50) {
    return "Discount too high"
  } else if (discount < 0) {
    return "Invalid discount"
  } else {
    return price - (price * discount / 100)
  }
}

console.log(calculatePrice(100, 20))
console.log(calculatePrice(100, 50))
console.log(calculatePrice(100, -10))


// 8)შექმენი validatePassword multi-line Arrow Function-ის გამოყენებით.

// ფუნქციამ მიიღოს პაროლი და შეამოწმოს:

// სიგრძე მინიმუმ 8 სიმბოლოა?
// შეიცავს თუ არა "@" სიმბოლოს?(მოიძიეთ საჭირო მეთოდი)
// იწყება თუ არა დიდი ასოთი?

// დააბრუნოს:

// "Strong password" — თუ სამივე პირობა სრულდება
// "Weak password" — სხვა შემთხვევაში

const validatePassword = password => {
  const hasLength = password.length >= 8
  const hasAt = password.includes("@")
  const startsWithUppercase = password[0] === password[0].toUpperCase()

  if (hasLength && hasAt && startsWithUppercase) {
    return "Strong password"
  } else {
    return "Weak password"
  }
}

console.log(validatePassword("Password@123"))
console.log(validatePassword("password123"))
console.log(validatePassword("Pass@12"))


// 9)შექმენი validateUser multi-line Arrow Function-ის სახით.

// მიიღოს:

// username, age, password

// შეამოწმოს:

// username ცარიელი არ არის
// age არის 18 ან მეტი
// password-ის სიგრძე მინიმუმ 8-ია

// თუ ყველაფერი სწორია:

// "User is valid"

// თუ რომელიმე პირობა არ შესრულდა:

// "User is invalid"

const validateUser = (username, age, password) => {
  const validUsername = username !== ""
  const validAge = age >= 18
  const validPassword = password.length >= 8

  if (validUsername && validAge && validPassword) {
    return "User is valid"
  } else {
    return "User is invalid"
  }
}

console.log(validateUser("Goga", 20, "password123"))
console.log(validateUser("", 20, "password123"))
console.log(validateUser("Goga", 15, "password123"))
console.log(validateUser("Goga", 20, "pass"))