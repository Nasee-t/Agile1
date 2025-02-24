// 1
function calculateResult(num1, num2) {
    let product = num1 * num2;
    return product > 500 ? "Sum: "+ (num1 + num2) : "Product: "+ product;
}
console.log(calculateResult(20, 30));

// 2
const readline = require("readline-sync");

let num1 = parseInt(readline.question("Enter first number: "), 10);
let num2 = parseInt(readline.question("Enter second number: "), 10);
let num3 = parseInt(readline.question("Enter third number: "), 10);

let greatest = (num1 >= num2 && num1 >= num3) ? num1 : 
               (num2 >= num1 && num2 >= num3) ? num2 : num3;
console.log(`The greatest number is: ${greatest}`);

// 3
let num_1 = [1,2,3,1];
console.log("Removing duplicates from ", num_1, [...new Set(num_1)]); 

// 4
function removeDups(nums, remove){
    let num1= nums.filter( num => num!=remove);

    while (num1.length < nums.length) {
        num1.push("_");
    }
    return num1;
}
let nums = [3, 2, 2, 3, 4, 5, 3, 6];
let remove = 3;
console.log(nums, "After removing duplicates & adding _ : ", removeDups(nums, remove)); 

// 5
function Dups(num){
    return (new Set(num)).length != num;
}
let num = [1,2,3,1];
console.log(num, Dups(num)); 
num = [1,2,3,4];
console.log(num, Dups(num)); 

// 6
let num4 = parseInt(readline.question("Enter first number to find sum until single digit :"), 10);
while(num4>=10){
    num4 = num4.toString().split('').reduce((sum, num) => sum+ Number(num),0);
}
console.log("Single digit sum :", num4);

// 7
function duplicateZeros(arr) {
    let result = [];
    for (let num of arr) {
        if(result.length < arr.length){
            result.push(num);
            if (num === 0) result.push(0);
        }
    }
    return result;
}
let arr = [1, 0, 2, 3, 0, 4, 5, 0];
console.log(arr, "After adding duplicates: ", duplicateZeros(arr));

// 8 Intersection
function common(num1,num2){
    let set2 = new Set(num2);
    return [...new Set(num1.filter( num => set2.has(num)))];
}
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log("Intersection of", nums1, "and", nums2, common(nums1, nums2));
