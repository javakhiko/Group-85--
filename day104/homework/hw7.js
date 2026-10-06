// 7)შექმენი ორი მოთამაშე:

// let player1 = 0;
// let player2 = 0;

// თითოეული მოთამაშისთვის შექმენი 3 შემთხვევითი რაუნდის ქულა, სადაც თითოეული ქულა არის 1-დან 10-მდე.

// მაგალითად:

// Player 1:
// რაუნდი 1 → 7
// რაუნდი 2 → 4
// რაუნდი 3 → 9

// Player 2:
// რაუნდი 1 → 6
// რაუნდი 2 → 8
// რაუნდი 3 → 5

// შემდეგ:

// დაითვალე თითოეული მოთამაშის სამი რაუნდის ჯამი.
// თუ რომელიმე რაუნდში მოთამაშემ ზუსტად 10 ქულა მიიღო, მას დამატებით 5 ბონუსი დაემატოს.
// თუ მოთამაშემ სამივე რაუნდში 5-ზე მეტი ქულა მიიღო, მას დამატებით 3 ბონუსი დაემატოს.
// საბოლოოდ შეადარე მოთამაშეების ქულები.
// გამოიტანე გამარჯვებული ან "ფრეა!"

let player1 = 0;
let player2 = 0;

let round1Player1 = Math.floor(Math.random() * 10) + 1;
let round2Player1 = Math.floor(Math.random() * 10) + 1;
let round3Player1 = Math.floor(Math.random() * 10) + 1;

let round1Player2 = Math.floor(Math.random() * 10) + 1;
let round2Player2 = Math.floor(Math.random() * 10) + 1;
let round3Player2 = Math.floor(Math.random() * 10) + 1;

player1 = round1Player1 + round2Player1 + round3Player1;
player2 = round1Player2 + round2Player2 + round3Player2;

console.log("Player 1:", round1Player1, round2Player1, round3Player1);
console.log("Player 2:", round1Player2, round2Player2, round3Player2);

if (round1Player1 === 10 || round2Player1 === 10 || round3Player1 === 10) {
  player1 += 5;
}

if (round1Player2 === 10 || round2Player2 === 10 || round3Player2 === 10) {
  player2 += 5;
}

if (round1Player1 > 5 && round2Player1 > 5 && round3Player1 > 5) {
  player1 += 3;
}

if (round1Player2 > 5 && round2Player2 > 5 && round3Player2 > 5) {
  player2 += 3;
}

console.log("Player 1 საბოლოო ქულა:", player1);
console.log("Player 2 საბოლოო ქულა:", player2);

if (player1 > player2) {
  console.log("Player 1-მა მოიგო!");
} else if (player2 > player1) {
  console.log("Player 2-მა მოიგო!");
} else {
  console.log("ფრეა!");
}