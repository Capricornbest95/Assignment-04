
// Task 02


var userNumber =+ prompt("Enter the Number");
var table = "";
console.log("Table of " + userNumber + ":");
for (var i = 1; i <= 10; i++) { 
  table = userNumber * i;
  console.log(userNumber + " x " + i + " = " + table);
} console.log('----------------------');


// // Task 03

var userNumber2 =+ prompt ("Enter the Number")
var table2 = "";

for (var i = 2; i <= userNumber2; i++) {
  console.log("Table of " + i + ":");
  for (var j = 1; j <= 10; j++) {
    var table2 = i * j;
    console.log(i + " x " + j + " = " + table2);
  }
  console.log('----------------------');
}





