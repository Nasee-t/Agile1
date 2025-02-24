// 1
// npm install readline-sync
// npm audit fix
let num;
const readline = require("readline-sync");
num= parseInt(readline.question(" Enter num: "));
if (num>0) console.log("Positive.");
else console.log("Negative.");

// 2
num= parseInt(readline.question(" Enter num: "));
if (num%2==0) console.log("Even.");
else console.log("Odd.");

// 3
function power(x,y){
    console.log("Power : ", x**y);
}
let x= parseInt(readline.question(" Enter base: "));
let y= parseInt(readline.question(" Enter power: "));
power(x,y);

// 4
function bigger(x,y){
    if(x>y) console.log(x, "is greater than ", y);
    else if(x<y) console.log(y,"is greater than ",x);
    else console.log(x,"is equal to ",y);
}
x= parseInt(readline.question(" Enter first number: "));
y= parseInt(readline.question(" Enter second number: "));
bigger(x,y);

// 5
x= parseInt(readline.question(" Enter year: "));
if ((x%4==0 && x%100!=0) || (x%400==0))  console.log(x,"is a leap year.");
else console.log(x,"is not a leap year.");

// 6
let score = parseInt(readline.question("Enter the student's score: "));

let grade;
if (score >= 90 && score <= 100) grade = "A";
else if (score >= 80 && score <= 89) grade = "B";
else if (score >= 70 && score <= 79) grade = "C";
else if (score >= 60 && score <= 69) grade = "D";
else grade = "F";
console.log(`The student's grade is: ${grade}`);

// 7
let age = parseInt(readline.question("Enter your age: "));

let message;
if (age < 16){
    message = "You can't drive.";
} else if (age >= 16 && age <= 17) {
    message = "You can drive but not vote.";
} else if (age >= 18 && age <= 24) {
    message = "You can vote but not rent a car.";
} else {
    message = "You can do pretty much anything.";
}
console.log(message);

// 8
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 9
x= parseInt(readline.question(" Enter year: "));
if ((x%4==0 && x%100!=0) || (x%400==0)) console.log(x,"is a leap year.");
else console.log(x,"is not a leap year.");
