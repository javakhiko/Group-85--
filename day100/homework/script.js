// 1)მოცემულია რიცხვი number = 100.

// ციკლის გამოყენებით:

// დაბეჭდე ყველა რიცხვი 1-დან 100-მდე.

// დაბეჭდე მხოლოდ ის რიცხვები, რომლებიც იყოფა 3-ზე.

// დაბეჭდე რამდენი ასეთი რიცხვია.

let number = 100;
let i = 1;
let count = 0;

while (i <= number) {
  console.log(i);
  if (i % 3 === 0) {
    console.log(i);
    count++;
  }
  i++;
}

console.log(count);

// 2)მოცემულია მასივი:

// const numbers = [-5, 10, -2, 8, 0, 15, -7];

// ციკლისა და if...else-ის გამოყენებით:

// დათვალე დადებითი რიცხვები.

// დათვალე უარყოფითი რიცხვები.

// დათვალე ნულების რაოდენობა.

const numbers = [-5, 10, -2, 8, 0, 15, -7];
let o = 0;
let positive = 0;
let negative = 0;
let zero = 0;

while (o < numbers.length) {
  if (numbers[o] > 0) {
    positive++;
  } else if (numbers[o] < 0) {
    negative++;
  } else {
    zero++;
  }
  o++;
}
console.log(positive);
console.log(negative);
console.log(zero);

// 3)const secretNumber = 7;
// let guess = 1;

// while ციკლის გამოყენებით გაზარდე guess მანამ, სანამ ის არ გაუტოლდება secretNumber-ს.

// როდესაც იპოვი, დაბეჭდე "Correct number".

const secretNumber = 7;
let guess = 1;

while (guess != secretNumber) {
  guess++;
}

console.log("Correct number");

// 4)do...while ციკლის გამოყენებით დაბეჭდე რიცხვები 1-დან 10-მდე.

// შემდეგ შეცვალე საწყისი მნიშვნელობა ისე, რომ ციკლის პირობა თავიდანვე false იყოს.

// შეამოწმე, რამდენჯერ შესრულდება ციკლი.

let p = 1;
  
do {
  console.log(p);
  p++;
} while (p <= 10);

// 5)შექმენი ფუნქცია analyzeNumbers, რომელსაც გადაეცემა რიცხვების მასივი.

// ფუნქციამ ციკლის გამოყენებით უნდა:

// იპოვოს მასივის რიცხვების ჯამი.

// დათვალოს ლუწი რიცხვები.

// დათვალოს კენტი რიცხვები.

// დააბრუნოს მიღებული შედეგები.

function analyzeNumbers(nums) {
  let sum = 0;
  let even = 0;
  let odd = 0;

  for (let k = 0; k < nums.length; k++) {
    let num = nums[k];
    sum += num;
    num % 2 == 0 ? even++ : odd++;
  }

  return [sum, even, odd];
}

console.log(analyzeNumbers([1, 2, 3, 4, 5, 6]));

// 6)const prices = [100, 250, 80, 400, 150];

// შექმენი ფუნქცია calculateDiscount, რომელსაც გადაეცემა ფასდაკლების პროცენტი.

// ფუნქციამ ციკლის გამოყენებით უნდა გამოთვალოს თითოეული პროდუქტის ახალი ფასი და დაბეჭდოს ყველა მათგანი.

const prices = [100, 250, 80, 400, 150];

function calculateDiscount(percent) {
  for (let x = 0; x < prices.length; x++) {
    prices[x] = prices[x] - (prices[x] * percent) / 100;
    console.log(prices[x]);
  }
}

calculateDiscount(20);

// 7)შექმენი ფუნქცია findDivisors, რომელსაც გადაეცემა ერთი რიცხვი.

// ციკლის გამოყენებით იპოვე და დაბეჭდე ამ რიცხვის ყველა გამყოფი.

// მაგალითად, თუ გადაეცემა 12, უნდა დაიბეჭდოს 1, 2, 3, 4, 6 და 12.

function findDivisors(num1) {
  for (let v = 1; v <= num1; v++) {
    if (num1 % v === 0) {
      console.log(v);
    }
  }
}

findDivisors(12);

// 8)შექმენი ფუნქცია countVowels, რომელსაც გადაეცემა სტრინგი.

// ციკლის გამოყენებით დათვალე, რამდენი ხმოვანი ასოა სტრინგში.

// გამოიყენე if და სტრინგის მეთოდი includes().

function countVowels(text) {
  let vowels = "aeiou";
  let count2 = 0;
  for (let z = 0; z < text.length; z++) {
    if (vowels.includes(text[z])) {
      count2++;
    }
  }
  return count2;
}

console.log(countVowels("hello"));

// 9)const numbers = [4, 8, 12, 25, 30, 40, 50];

// ციკლის გამოყენებით იპოვე პირველი რიცხვი, რომელიც 20-ზე მეტია.

// როგორც კი იპოვი, დაბეჭდე და შეწყვიტე ციკლის შესრულება break-ის გამოყენებით.

const nums2 = [4, 8, 12, 25, 30, 40, 50];
for (let b = 0; b < nums2.length; b++) {
  if (nums2[b] > 20) {
    console.log(nums2[b]);
    break;
  }
}

// 10)შექმენი ფუნქცია calculateSum, რომელსაც გადაეცემა რიცხვი n.

// ფუნქციაში შექმენი ცვლადი sum, რომლის საწყისი მნიშვნელობა იქნება 0.

// ციკლის გამოყენებით იპოვე 1-დან n-ის ჩათვლით რიცხვების ჯამი და დააბრუნე შედეგი.

// ფუნქციის გარეთ შექმენი სხვა ცვლადი სახელად sum და შეამოწმე, შეიცვალა თუ არა მისი მნიშვნელობა ფუნქციის შესრულების შემდეგ.

let sum2 = 0;

function calculateSum(n) {
  let sum2 = 0;
  for (let m = 1; m <= n; m++) {
    sum2 += m;
  }

  return sum2;
}

console.log(calculateSum(10));
console.log(sum2);

// 11)const text = "JavaScript is fun and JavaScript is powerful";

// შექმენი ფუნქცია analyzeText, რომელსაც გადაეცემა სტრინგი.

// ფუნქციამ უნდა:

// ციკლის გამოყენებით დაბეჭდოს სტრინგის თითოეული სიმბოლო.

// დათვალოს სტრინგში არსებული "a" ასოების რაოდენობა.

// დათვალოს სტრინგში არსებული გამოტოვებების რაოდენობა.

// გამოიყენოს if და შეამოწმოს, არის თუ არა სიმბოლო ხმოვანი ასო.

// იპოვოს პირველი გამოტოვება და შეწყვიტოს ციკლი break-ის გამოყენებით.

// დაბეჭდოს სტრინგი უკუღმა.

const text = "JavaScript is fun and JavaScript is powerful";

function analyzeText(text) {
  let aCount = 0;
  let spaceCount = 0;

  for (let h = 0; h < text.length; h++) {
    let char = text[h];

    console.log(char);

    if (char === "a") {
      aCount++;
    }

    if (char === " ") {
      spaceCount++;
    }

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      console.log(char + " არის ხმოვანი");
    }

    if (char === " ") {
      console.log("პირველი გამოტოვება არის index ზე: " + h);
      break;
    }
  }

  console.log("a ს რაოდენობა: ", aCount);
  console.log("გამოტოვებების რაოდენობა: ", spaceCount);

  let reversed = "";

  for (let j = text.length - 1; j >= 0; j--) {
    reversed += text[j];
  }

  console.log("უკუღმა: ", reversed);
}

analyzeText(text);

// 12)შექმენი ფუნქცია numberGame, რომელსაც გადაეცემა საიდუმლო რიცხვი.

// ფუნქციაში:

// შექმენი ცვლადი guess, რომლის საწყისი მნიშვნელობა იქნება 1.

// გამოიყენე while ციკლი.

// თუ guess საიდუმლო რიცხვზე ნაკლებია, გაზარდე ის 1-ით.

// თუ guess საიდუმლო რიცხვს გაუტოლდება, დაბეჭდე "You found it!" და შეწყვიტე ციკლი break-ით.

// დათვალე, რამდენი გამეორება დასჭირდა რიცხვის პოვნას.

// დააბრუნე გამეორებების რაოდენობა.

function numberGame(secretNumber) {
  let guess = 1;
  let attempts = 0;

  while (true) {
    attempts++;

    if (guess < secretNumber) {
      guess++;
    }

    if (guess === secretNumber) {
      console.log("You found it!");
      break;
    }
  }

  return attempts;
}

console.log(numberGame(7));

// 13)შექმენი პროგრამა, რომელიც 1-დან 500-მდე ყველა რიცხვს გადაუვლის.

// იპოვე:

// რამდენი რიცხვია 3-ის ჯერადი;
// რამდენი რიცხვია 5-ის ჯერადი;
// რამდენი რიცხვია ერთდროულად 3-ის და 5-ის ჯერადი;
// ყველა იმ რიცხვის ჯამი, რომელიც არც 3-ის და არც 5-ის ჯერადი არ არის;
// ყველაზე დიდი რიცხვი, რომელიც 7-ზე იყოფა.

let multipleOf3 = 0;
let multipleOf5 = 0;
let multipleOfBoth = 0;
let sum = 0;
let biggestDivisibleBy7 = 0;

for (let k = 1; k <= 500; k++) {
  if (k % 3 === 0) {
    multipleOf3++;
  }

  if (k % 5 === 0) {
    multipleOf5++;
  }

  if (k % 3 === 0 && k % 5 === 0) {
    multipleOfBoth++;
  }

  if (k % 3 !== 0 && k % 5 !== 0) {
    sum += k;
  }

  if (k % 7 === 0) {
    biggestDivisibleBy7 = k;
  }
}

console.log("3 ის ჯერადი: ", multipleOf3);
console.log("5 ის ჯერადი: ", multipleOf5);
console.log("3 ის და 5 ის ჯერადი: ", multipleOfBoth);
console.log("არც 3 ის და არც 5 ის ჯერადების ჯამი: ", sum);
console.log("7 ზე გაყოფადი ყველაზე დიდი რიცხვი: ", biggestDivisibleBy7);

// 14)let number = 58374629;

// Loop-ის გამოყენებით გაარკვიე:

// რამდენი ციფრია რიცხვში;
// რამდენი ციფრია ლუწი;
// რამდენი კენტია;
// ციფრების ჯამი;
// ყველაზე დიდი ციფრი;
// ყველაზე პატარა ციფრი;
// რამდენი ციფრია 5-ზე მეტი.

// 15)let numbers = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5];

// გაიარე მასივი loop-ით.

// თუ რიცხვი კენტია → გამოტოვე continue-ით.
// თუ რიცხვი 50-ზე მეტია → საერთოდ შეწყვიტე loop break-ით.
// დანარჩენი ლუწი რიცხვები გამოიტანე.
// ბოლოს გამოიტანე მათი ჯამი.

let numbers2 = [15, 8, 23, 42, 11, 67, 30, 19, 54, 72, 5];

let sum3 = 0;

for (let h = 0; h < numbers2.length; h++) {
  if (numbers2[h] % 2 !== 0) {
    continue;
  }

  if (numbers2[h] > 50) {
    break;
  }

  console.log(numbers2[h]);
  sum3 += numbers2[h];
}

console.log(sum3);

// 16)let balance = 1200;
// let operations = [200, -150, -500, 300, -200, -1000, 400];

// დადებითი რიცხვი ნიშნავს შეტანას, უარყოფითი — გატანას.

// Loop-ის საშუალებით:

// თითოეული ოპერაცია დაამუშავე;
// თანხის შეტანისას გაზარდე balance;
// თანხის გატანისას შეამოწმე საკმარისი თანხაა თუ არა;
// თუ თანხა საკმარისი არ არის, ოპერაცია არ შეასრულო;
// დაითვალე რამდენი გატანა შესრულდა;
// დაითვალე რამდენი ოპერაცია ვერ შესრულდა;
// ბოლოს გამოიტანე საბოლოო ბალანსი.

// 17)მოცემულია:

// let numbers = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29];

// ერთი ან რამდენიმე loop-ის გამოყენებით იპოვე:

// მაქსიმუმი;
// მინიმუმი;
// ჯამი;
// საშუალო;
// ლუწების რაოდენობა;
// კენტების რაოდენობა;
// 50-ზე მეტი რიცხვების რაოდენობა;
// 50-ზე ნაკლები რიცხვების რაოდენობა;
// ყველაზე დიდი ლუწი;
// ყველაზე დიდი კენტი;
// ყველაზე პატარა ლუწი;
// ყველაზე პატარა კენტი.

let numbers3 = [34, 12, 89, 45, 67, 23, 90, 11, 56, 78, 43, 29];
let max = numbers[0];
let min = numbers[0];
let sum4 = 0;
let evenCount = 0;
let oddCount = 0;
let biggerThan50 = 0;
let smallerThan50 = 0;
let biggestEven = 0;
let biggestOdd = 0;
let smallestEven = numbers[0];
let smallestOdd = numbers[1];

for (let x = 0; x < numbers3.length; x++) {
  let number = numbers3[x];

  sum4 += number;

  if (number > max) {
    max = number;
  }

  if (number < min) {
    min = number;
  }

  if (number % 2 === 0) {
    evenCount++;

    if (number > biggestEven) {
      biggestEven = number;
    }

    if (number < smallestEven) {
      smallestEven = number;
    }
  } else {
    oddCount++;

    if (number > biggestOdd) {
      biggestOdd = number;
    }

    if (number < smallestOdd) {
      smallestOdd = number;
    }
  }

  if (number > 50) {
    biggerThan50++;
  }

  if (number < 50) {
    smallerThan50++;
  }
}

let average = sum4 / numbers3.length;

console.log(
  max,
  min,
  sum,
  average,
  evenCount,
  oddCount,
  biggerThan50,
  smallerThan50,
  biggestEven,
  biggestOdd,
  smallestEven,
  smallestOdd,
);

// 18)let correctPin = 4821;
// let attempts = [1234, 1111, 4821, 5555];

// გადაამოწმე მცდელობები თანმიმდევრობით.

// თუ PIN სწორია → "Access granted" და break.
// არასწორი PIN-ის შემთხვევაში დაითვალე მცდელობა.
// თუ 3 არასწორი მცდელობა დაგროვდა → "Card blocked" და break.
// თუ სწორი PIN საერთოდ ვერ მოიძებნა → "Access denied".

let correctPin = 4821;

let attempts = [1234, 1111, 4821, 5555];

let wrongAttempts = 0;
let found = false;

for (let d = 0; d < attempts.length; d++) {
  if (attempts[d] === correctPin) {
    console.log("Access granted");
    found = true;
    break;
  }

  wrongAttempts++;

  if (wrongAttempts === 3) {
    console.log("Card blocked");
    break;
  }
}

if (!found && wrongAttempts < 3) {
  console.log("Access denied");
}
