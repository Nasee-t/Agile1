// 1
let firstName="name1";
let last_name="name2";
let $name="name3";
let name4="name4";

// 2
const pi=3.14;
//pi=5; Error

// 3
let arr= [ 1, 2, 3];
console.log(arr);
console.log(arr[0]);
arr.push(4, 5, 6);
arr.pop();
arr.reverse()
console.log(arr);

// 4
let x=5;
let y=6;
let z=x+y;
console.log("sum : " + z);

// 5
let rad=5;
console.log(`Area of Circle with radius ${ rad } is ` + (Math.PI*rad*rad).toFixed(2));

// 6
let length = 10;
let width = 5;
let areaRectangle = length * width;
console.log("Area of Rectangle:", areaRectangle);

// 7
let base = 8;
let height = 6;
let areaTriangle = (base + height)/2;
console.log("Area of Triangle:", areaTriangle);

// 8
function calculator(num1, num2) {
    console.log("Addition:", num1 + num2);
    console.log("Subtraction:", num1 - num2);
    console.log("Multiplication:", num1 * num2);
    console.log("Division:", num1 / num2);
}
calculator(20, 4);

// 9
let value = 10;
value += 5;  
console.log("After += :", value); 

value -= 3;  
console.log("After -= :", value); 

value *= 2;  
console.log("After *= :", value); 

value /= 4;  
console.log("After /= :", value); 

// 10
let count = 10;

count++;  
console.log("After Increment:", count); 

count--;  
console.log("After Decrement:", count); 

// 11
let a = 7;
let b = "7";

console.log("a == b:", a == b);   
console.log("a === b:", a === b); 
console.log("a != b:", a != b);   
console.log("a !== b:", a !== b); 
console.log("a > b:", a > b);     
console.log("a < b:", a < b);     
console.log("a >= b:", a >= b);   
console.log("a <= b:", a <= b); 12

// 12
let _true = true;
let _false = false;
console.log("AND (&&):", _true && _false);
console.log("OR (||):", _true || _false);
console.log("NOT (!):", !_true);

// 13
let p = 5, q = 10;
[p, q] = [q, p];
console.log(`After Swap: p = ${p}, q = ${q}`);

// 14
let num_1 = 10, num_2 = 20, num_3 = 30;
let average = (num_1 + num_2 + num_3) / 3;
console.log("Average:", average);

// 15
let _a = 10, _b = 30, _c = 12, _d = 3;
let result = (_a + _b) * _c / _d;
console.log("Final Result:", result);

// 16
let tamil = 90, english = 90, maths = 90, science = 90, social = 90;

let totalMarks = tamil + english + maths + science + social;
let averageMarks = totalMarks / 5;
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
