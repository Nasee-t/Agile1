// 1
function sayHello(name){
    console.log(`Hello ${name}!`);
}
sayHello("Rose");

// 2
function sum(x,y){
    console.log(`Sum of ${x} and ${y} is ${x+y}`);
}
sum(4,6);

// 3
function multiply(x,y){
    console.log(`Product of ${x} and ${y} is ${x*y}`);
}
multiply(4,6);

// 4
function multiply2(x,y){
    console.log(`Product of ${x} and ${y} is ${x*y}`);
}
multiply2(10,10);

// 5
function divide(x,y){
    console.log(`Quotient of ${x} and ${y} is ${x/y}`);
}
divide(6,4);

// 6
function factorial(x){
    if(x==0) return 1;
    return x*factorial(x-1);
}
let fact=factorial(4);
console.log("Factorial is : ", fact);

// 7
function power(x){
    console.log(`Power of ${x} is ${x**2}`);
}
power(4);
