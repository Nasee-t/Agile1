// 1
console.log("Numbers from 1 to 10 using for loop: ");
for(let i=1; i<11; i++){
    console.log(i);
}

// 2
console.log("Even numbers from 1 to 10 using for loop: ");
for(let i=1; i<=20; i++){
    if(i%2==0) console.log(i);
}

// 3
console.log("Even numbers from 1 to 10 using for loop: ");
for(let i=1; i<=20; i++){
    if(i%2!=0) console.log(i);
}

// 4
let num=5, fact=1;
console.log(`Factorial of ${num} is : `);
for(let i=num; i>1; i--){
    fact = fact*i;
}
console.log(fact);

// 5
let sum=0;
for( let i=1; i<=100; i++){
    sum+=i;
}
console.log("Sum of numbers from 1 to 100 : ", sum);

// 6
let num_1= [1, 2, 3, 4, 5], tot=0 , avg;
for( let num of num_1){
    tot += num;
}
avg = tot/num_1.length;
console.log(`Average of elements in ${num_1} is ${avg}`);

// 7 Squar
console.log("Square : ");
let x= 4; pattern = "";
for(let i=1; i<=x; i++){
    for(let j=1; j<=x; j++){
        pattern += "* ";
    }
    pattern += "\n";
}
console.log(pattern);

// 8 Square
console.log("Triangle : ");
x= 4; pattern = "";
for(let i=1; i<=x; i++){
    for(let j=1; j<=i; j++){
        pattern += "* ";
    }
    pattern += "\n";
}
console.log(pattern);

// 7 Diamond
console.log("Diamond : ");
let n= 4; pattern = "";
for(let i=1; i<=n; i++){
    pattern += " ".repeat(n-i) + "*".repeat(2*i-1) + "\n";
}
for(let i=n-1; i>=1; i--){
    pattern += " ".repeat(n-i) + "*".repeat(2*i-1) + "\n";
}
console.log(pattern);

// 8
console.log("Numbers from 1 to 5 :")
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 9
console.log("Numbers from 1 to 10 :")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10
let arr = [10, 20, 30, 40, 10];
if (arr[0] === arr[arr.length - 1]) console.log(`The first and last elements in ${arr} are same.`);
else console.log(`The first and last elements in ${arr} are not same.`);

// 11
console.log(`Elements divisible by 5 in ${arr} are :`);
arr.forEach( num => {
    if(num%5==0) console.log(num); 
});

// 12
function checkChar(char) {
    /[aeiouAEIOU]/.test(char) ? console.log(`${char} is a vowel`) : 
    console.log(`${char} is a consonant`);
}

checkChar('A'); // Vowel
checkChar('b'); // Consonant

// 13
let evenCount = 0, oddCount = 0;
for (let i = 10; i <= 55; i++) {
    i % 2 === 0 ? evenCount++ : oddCount++;
}
console.log(`From 10 to 55 :\n Even Count: ${evenCount}, Odd Count: ${oddCount}`);

// 14
console.log("Numbers from 1 to 25, excluding multiples of 5");
for (let i = 1; i <= 25; i++) {
    if (i % 5 !== 0) console.log(i);
}

// 15
let nums1 = [3, 4, 5, 6];
console.log("Factorials of", nums1);
let factorial = num => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

let factorials = nums1.map(factorial);
console.log(factorials);

// 16
console.log("Product or Sum : ");
function productOrSum(a, b) {
    let product = a * b;
    return product > 500 ? a + b : product;
}
console.log(productOrSum(10, 50));

// 17
let a = 25, b = 40;
console.log(`Greatest of ${a} and ${b} is ${a > b ? a : b}`);

// 18
let num1=33, num2=44, num3=55;
let greatest = (num1 >= num2 && num1 >= num3) ? num1 : 
               (num2 >= num1 && num2 >= num3) ? num2 : num3;
console.log(`The greatest number among ${num1}, ${num2} and ${num3} is : ${greatest}`);

// 19
let nums = [23, 4, -6, 23, -9, 21, 3, -45, -8];

let positiveNums = nums.filter(num => num >= 0);
let negativeNums = nums.filter(num => num < 0);

console.log("Positive Numbers:", positiveNums);
console.log("Negative Numbers:", negativeNums);
