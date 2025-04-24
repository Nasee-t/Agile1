// 1
function replaceAllOccurrences(originalString, old, newSub) {
  return originalString.replaceAll(old, newSub);
}

const inputString = 'apple banana apple grape apple';
const result = replaceAllOccurrences(inputString, 'apple', 'orange');
console.log("1. Replace : ", result);

// 2
function arrayIncludesValue(arr, value) {
    return arr.includes(value);
}
  
const fruits = ['apple', 'banana', 'cherry'];
console.log("\n2. Includes? : ", arrayIncludesValue(fruits, 'banana'));  

// 3
console.log("\n3. async, await, fetch");

async function getdata() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        if (!response.ok){
            throw new Error('Network response not ok');
        }

        const data=await response.json();
        console.log("Fetched Data:", data);
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}

getdata();

// 4
console.log("\n4. Divide 2 nums :");

function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero not allowed.");
      }
      return a / b;
    } 
    catch (error) {
      return error.message;
    }
}

console.log(divideNumbers(4, 2));
console.log(divideNumbers(4, 0)); 

// 5
function template(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
  
 console.log("\n5. Template: ", template('John', 30));

// 6
function logPersonDetails(person) {
    const { name, age, city } = person;
    console.log(name);
    console.log(age);
    console.log(city);
}

console.log("\n6. deconstructing assignment :");
const personObj = { name: 'Alice', age: 25, city: 'New York' };
logPersonDetails(personObj);

// 7
function addNumbers(a, b = 10) {
    return a + b;
}

console.log("\n7. default parameter :");
console.log(addNumbers(5, 20));
console.log(addNumbers(5));

// 8
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("\n8. Rest parameters :")
console.log(sumAll(1, 2, 3, 4, 5));

// 9
function sumArray(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}

console.log("\n9. Sum of array: ", sumArray([1, 2, 3, 4, 5])); 
  
   