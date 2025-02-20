// 1
function filterNegative(arr){
    let neg = arr.filter( num => num<0 );
    console.log(neg);
}
let arr = [5,2,-7,3,-2,-1];
filterNegative(arr)

// 2
let arr1 = [5,2,-7,3,-2,-1];
console.log( arr1.map(num => (num%2==0 ? num : 0)) );

// 3
// npm install readline-sync
// npm audit fix
const readline = require("readline-sync");
sum=0;
let num;
while(true){
    num= parseInt(readline.question(" Enter num: "));
    if (num==0) break;
    sum += num;
}
console.log(sum);

// 5
sum=0;
for(let i=1; i<=10; i++){
    console.log(`Previous sum ${i-1}: `, sum);
    sum += i;
    console.log(`Previous sum ${i}: `, sum, "\n");
}

// 6
let evenCount = 0, oddCount = 0;

for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);
