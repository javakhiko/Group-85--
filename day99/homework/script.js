// let prices = [120, 45, 300, 80, 150, 25, 400];

// შექმენი პროგრამა, რომელიც:

// for ციკლით გადაუვლის ყველა ფასს.

// თუ ფასი 100-ზე მეტია, ფასს  20 იანფასდაკლებას გაუკეთებს.

// თუ ფასი 50-დან 100-მდეა, ფასს 10-იან ფასდაკლებას გაუკეთებს.

// სხვა შემთხვევაში ფასს არ შეცვლის.

// განაახლებს ფასებს თავდაპირველ მასივში.

// დაითვლის ფასდაკლებული პროდუქტების საერთო ღირებულებას (ჯამს).

// უკუღმა ციკლით დაბეჭდავს საბოლოო ფასებს.

let prices = [120, 45, 300, 80, 150, 25, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
  if (prices[i] > 100) {
    prices[i] = prices[i] - 20;
    total = total + prices[i];
  } else if (prices[i] >= 50 && prices[i] < 100) {
    prices[i] = prices[i] - 10;
    total = total + prices[i];
  }
}

console.log(total);

for (let v = prices.length - 1; v >= 0; v--) {
  console.log(prices[v]);
}

// 2)let messages = [
//   "  Hello Goga  ",
//   "JAVASCRIPT is fun",
//   "  I LOVE CODING ",
//   "React is awesome",
//   "  Learn JavaScript  "
// ];

// შექმენი პროგრამა, რომელიც:

// თითოეულ შეტყობინებას მოაშორებს ზედმეტ სივრცეებს გვერდებიდან.

// ყველა შეტყობინებას გადაიყვანს პატარა ასოებში.

// შეამოწმებს, შეიცავს თუ არა შეტყობინება სიტყვას "javascript" --> includes() გამოიყენეთ.

// თუ შეიცავს, დაბეჭდავს "JavaScript message found".

// დაითვლის, რამდენი შეტყობინება შეიცავს ამ სიტყვას დაგჭრდებათ count = 0 ცვლადი .

// უკუღმა ციკლით დაბეჭდავს ყველა შეტყობინებას, რომელიც 15 სიმბოლოზე გრძელია.

let messages = [
  "  Hello Goga  ",
  "JAVASCRIPT is fun",
  "  I LOVE CODING ",
  "React is awesome",
  "  Learn JavaScript  ",
];

let count = 0;

for (let x = 0; x < messages.length; x++) {
  messages[x] = messages[x].trim().toLowerCase();

  if (messages[x].includes("javascript")) {
    console.log("JavaScript message found");
    count++;
  }
}

console.log(count);

for (let c = messages.length - 1; c >= 0; c--) {
  if (messages[c].length > 15) {
    console.log(messages[c]);
  }
}

// 3)მოცემულია:

// let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];

// შექმენი პროგრამა, რომელიც:

// დაბეჭდავს ყველა ლუწ რიცხვს.

// დაითვლის ყველა კენტი რიცხვის ჯამს.

// იპოვის ყველაზე დიდ რიცხვს.

// იპოვის ყველაზე პატარა რიცხვს.

// თუ რიცხვი 10-ზე მეტია და 25-ზე ნაკლებია, დაბეჭდავს "Special number".

// უკუღმა ციკლით დაბეჭდავს ყველა რიცხვს, რომელიც 3-ის ჯერადია.

let numbers = [12, 5, 18, 7, 24, 9, 30, 11, 6, 21];
let sum = 0;
let great = numbers[0];
let small = numbers[0];

for (let y = 0; y < numbers.length; y++) {
  numbers[y] % 2 === 0 ? console.log(numbers[y]) : (sum += numbers[y]);
  numbers[y] > great ? (great = numbers[y]) : null;
  numbers[y] < small ? (small = numbers[y]) : null;
  numbers[y] > 10 && numbers[y] < 25 ? console.log("Special number") : null;
}

for (let f = numbers.length - 1; f >= 0; f--) {
  numbers[f] % 3 === 0 ? console.log(numbers[f]) : null;
}

console.log(sum);
console.log(great);
console.log(small);

// 4)let names = [
//   "  goga ",
//   "NIKA",
//   "  ana  ",
//   "Giorgi",
//   "  mariam"
// ];

// შექმენი პროგრამა, რომელიც:

// ყველა სახელს მოაშორებს ზედმეტ სივრცეებს.

// თითოეული სახელის პირველ ასოს გადაიყვანს დიდ ასოში, ხოლო დანარჩენ ასოებს — პატარა ასოებში.

// განაახლებს თავდაპირველ მასივს.

// დაითვლის, რამდენი სახელი შეიცავს ასო "a"-ს.

// უკუღმა ციკლით დაბეჭდავს სახელებს.

// თუ სახელი "goga"-ს უდრის, გამოიტანს "Hello Goga!" შეტყობინებას.

let names = ["  goga ", "NIKA", "  ana  ", "Giorgi", "  mariam"];
let count2 = 0;

for (let g = 0; g < names.length; g++) {
  names[g] = names[g].trim();
  names[g] = names[g][0].toUpperCase() + names[g].slice(1).toLowerCase();

  if (names[g].includes("a")) {
    count++;
  }

  if (names[g].toLowerCase() === "goga") {
    console.log("Hello Goga!");
  }
}

console.log(count2);

for (let h = names.length - 1; h >= 0; h--) {
  console.log(names[h]);
}

// 5)let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];

// შექმენი პროგრამა, რომელიც:

// დაითვლის ყველა მოსწავლის ქულების ჯამს --> let sum = 0.

// გამოთვლის საშუალო ქულას --> შეინახეთ ცვლადდში --> avarage .

// დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას. ჩაჭრილია მოსწავლე, რომელსაც 50-ზე ნაკლები ქულა აქვს  , მათ ოდენობა შეინახეთ ცვლადში failedStudents = 0.

// იპოვის ყველაზე მაღალ და ყველაზე დაბალ ქულას შეინახეთ ცვლადებში.

// მასივის ყველა ქულას შეამოწმებს და დაბეჭდავს --> :

// 90 ან მეტი — "Excellent"

// 70-დან 89-მდე — "Good"

// 50-დან 69-მდე — "Passed"

// 50-ზე ნაკლები — "Failed"

// შექმნის ახალ მასივს, რომელშიც მხოლოდ 80-ზე მაღალი ქულები იქნება დაგჭირდებათ ცარიელი მასივი და .push().

// უკუღმა ციკლით დაბეჭდავს ყველა ქულას.

// დაითვლის, რამდენი მოსწავლე იღებს საშუალოზე მაღალ ქულას--> შეადარებთ სიის თითოეულ ელემენტს ზემოთ გამოთვლილ საშვალო ქულას და დაითვლით ცვლადში moreThanAvarageScoreCount = 0.

let scores = [45, 90, 67, 32, 100, 78, 55, 88, 40, 95];

let sum2 = 0;
let avarage = 0;
let failedStudents = 0;
let highest = scores[0];
let lowest = scores[0];
let highScores = [];
let moreThanAvarageScoreCount = 0;

for (let j = 0; j < scores.length; j++) {
  sum2 += scores[j];

  if (scores[j] < 50) {
    failedStudents++;
  }

  if (scores[j] > highest) {
    highest = scores[j];
  }

  if (scores[j] < lowest) {
    lowest = scores[j];
  }

  if (scores[j] >= 90) {
    console.log("Excellent");
  } else if (scores[j] >= 70) {
    console.log("Good");
  } else if (scores[j] >= 50) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }

  if (scores[j] > 80) {
    highScores.push(scores[j]);
  }
}

avarage = sum2 / scores.length;

for (let z = scores.length - 1; z >= 0; z--) {
  console.log(scores[z]);
}

for (let a = 0; a < scores.length; a++) {
  if (scores[a] > avarage) {
    moreThanAvarageScoreCount++;
  }
}

console.log(sum2);
console.log(avarage);
console.log(failedStudents);
console.log(highest);
console.log(lowest);
console.log(highScores);
console.log(moreThanAvarageScoreCount);

// 6)let names = ["goga", "NIKA", "ana", "Giorgi", "MARIAM", "dato"];

// let scores = [85, 42, 96, 67, 51, 73];

// შექმენი პროგრამა, რომელიც:

// ორივე მასივს ერთი და იმავე for ციკლით გადაუვლის.

// თითოეულ სახელს მოაშორებს ზედმეტ სივრცეებს და პირველ ასოს დიდად გამოიტანს.

// თითოეული მოსწავლის ქულას შეამოწმებს და შესაბამის შეფასებას მიანიჭებს:

// 90–100: "Excellent"

// 75–89: "Very Good"

// 60–74: "Good"

// 50–59: "Passed"

// 50-ზე ნაკლები: "Failed"

// დაითვლის ჩაჭრილი მოსწავლეების რაოდენობას.

// დაითვლის 80-ზე მაღალი ქულების ჯამს.

// იპოვის ყველაზე მაღალი ქულის მქონე მოსწავლის სახელსა და ქულას.

// გამოთვლის ყველა მოსწავლის საშუალო ქულას.

// უკუღმა ციკლით გამოიტანს ყველა მოსწავლის სახელსა და ქულას.

// 7)მოცემულია მაღაზიის პროდუქტების სახელები, ფასები და გაყიდული რაოდენობები:

// let products = ["Laptop", "Phone", "Mouse", "Keyboard", "Monitor", "Headphones"];

// let prices = [2500, 1800, 80, 150, 900, 300];

// let quantities = [3, 5, 20, 12, 4, 8];

// შექმენი პროგრამა, რომელიც:

// თითოეული პროდუქტისთვის გამოთვლის გაყიდვების თანხას — ფასი გამრავლებული გაყიდულ რაოდენობაზე.

// თუ პროდუქტის გაყიდვების თანხა 5000-ზე მეტია, გამოიტანს "High sales".

// თუ გაყიდვების თანხა 1000-დან 5000-მდეა, გამოიტანს "Medium sales".

// სხვა შემთხვევაში გამოიტანს "Low sales".

// დაითვლის ყველა პროდუქტის გაყიდვებიდან მიღებულ საერთო თანხას.

// დაითვლის იმ პროდუქტების რაოდენობას, რომელთა გაყიდული რაოდენობა 10-ზე მეტია.

// უკუღმა ციკლით გამოიტანს პროდუქტების სახელებსა და გაყიდვების თანხებს.
