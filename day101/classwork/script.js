// 1)
let arr = ["eldar", "tatuli", "genadi", "shushaniki", "varqsen"];
let i = 0;
// while loop
while (i < arr.length) {
  arr[i].length < 4 ? console.log(arr[i]) : null;
  i++;
}

// do while
do {
  arr[i].length < 4 ? console.log(arr[i]) : null;
  i++;
} while (i < arr.length);

// 2)
let nums = [2, 100, 250, 67, 78];
for (let v = 0; v < nums.length; v++) {
  if (nums[v] > 50) {
    console.log("num which is greater than 50 is found " + nums[v]);
    break;
  }
  console.log(nums[v]);
}
