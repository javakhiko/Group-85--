
//  1)დაბეჭდე ყველა მათემატიკური ოპერაცია და ნახე კონშოლში შედეგი

console.log(10-5)
console.log(10+5)
console.log(10 % 5)
console.log(10 / 5)
console.log(10*5)


// 2)დაბეჭდე:
// "Hello " + "World"


console.log("Hello " + "World")


// 3)გამოიტანე:

// My name is Nika

// მხოლოდ კონკატინაციის გამოყენებით.

console.log('My ' + 'name ' + 'is ' + 'Nika')

// 4)გამოიტანე:

// I live in Tbilisi

console.log('I live in Tbilisi')

// 5)იპოვე ამ სიტყვის სიგრძე:

// "JavaScript"

console.log("JavaScript".length)

// 6)გადაიყვანე:

// "javascript"

// დიდ ასოებად.

console.log("javascript".toUpperCase())

// 7)
// გადაიყვანე:

// "JAVASCRIPT"

// პატარა ასოებად.

console.log("JAVASCRIPT".toLowerCase())

// 8)მოაშორე ზედმეტი space:

// "      Hello      "

console.log( "      Hello      ".trim())

// 9)შეამოწმე იწყება თუ არა:

// "Programming"

// ასო "P"-ზე.

console.log("Programming".startsWith('P'))

// 10)აიღე პირველი 4 ასო:

// "Programming"

console.log("Programming".slice(0,4))

// 11)აიღე ბოლო 3 ასო:

// "JavaScript"

console.log("JavaScript".slice(7))

// 12)
// "      JavaScript      "
// მოაშორე ზედმეტი space.
// დაბეჭდე სიგრძე.
// გადაიყვანე დიდ ასოებად.

console.log("      JavaScript      ".trim().length)
console.log("      JavaScript      ".trim().toUpperCase())

// 13)მოცემულია:

// "Programming"
// აიღე პირველი 7 ასო.
// გადაიყვანე პატარა ასოებად.
// დაბეჭდე სიგრძე.

console.log("Programming".slice(0,7).toLowerCase())
console.log("Programming".slice(0,7).length)

// 14)"      JavaScript      "

// შენი დავალებაა:

// მოაშორო ზედმეტი space.
// შეამოწმო იწყება თუ არა "Java"-ზე.
// აიღო პირველი 4 ასო.
// გადაიყვანო დიდ ასოებად.
// დაბეჭდო სიმბოლოების რაოდენობა.
// კონკატინაციით გამოიტანო:
// Language: JAVA

console.log("      JavaScript      ".trim().startsWith('Java'))
console.log("      JavaScript      ".trim().slice(0,4).toUpperCase())
console.log("      JavaScript      ".trim().slice(0,4).length)
console.log('Language: ' + "      JavaScript      ".trim().slice(0,4).toUpperCase())

