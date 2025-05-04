// 1
function findFirstPositive(numbers) {
    return numbers.find(num => num > 0);
}

const nums = [-5, -3, 0, 9, 2];
console.log('1. find First Positive:', findFirstPositive(nums)); 

// 2
function findBookByTitle(books, title) {
    return books.find(book => book.title === title);
}

const books = [
{ title: '1984', author: 'George Orwell' },
{ title: 'To Kill a Mockingbird', author: 'Harper Lee' },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];
console.log('2. find Book By Title:', findBookByTitle(books, '1984'));

// 3
function findEmployeeById(employees, id) {
    return employees.find(employee => employee.id === id);
}

const employees = [
{ id: 1, name: 'Alice', position: 'Manager' },
{ id: 2, name: 'Bob', position: 'Engineer' },
{ id: 3, name: 'Charlie', position: 'Technician' }
];
console.log("3. find Employee By Id:", findEmployeeById(employees, 2));

// 4
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findFirstPrime(numbers) {
return numbers.find(isPrime);
}
const numArray = [4, 6, 8, 9, 11, 15];
console.log("4. find First Prime:", findFirstPrime(numArray));

// 5 Destructuring
function detailsOfPerson(person) {
    const { firstName, lastName, age } = person;
    return `${firstName} ${lastName} is ${age} years old!`;
}

const details = { firstName: 'John', lastName: 'Doe', age: 30 };
console.log("5. details Of Person:", detailsOfPerson(details));

// 6
function getEvenSquares(numbers) {
    return numbers.filter(num => num % 2 === 0).map(num => num ** 2);
}
const numbers_1 = [1, 2, 3, 4, 5, 6];
console.log("6 Output:", getEvenSquares(numbers_1));

// 7
function joinWordsBySeparator(separator = ',', ...words) {
    return words.join(separator);
}
console.log("7. separate by - :", joinWordsBySeparator('-', 'apple', 'banana', 'cherry'));
console.log("7. default separator :", joinWordsBySeparator('apple', 'banana', 'cherry'));

// 8
function getUniqueElements(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
const uniqueElts = getUniqueElements([1, 2, 3], [3, 4, 5]);
console.log("8. Unique elements:", uniqueElts);

// 9
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log("9. Async/await:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}
fetchTodo();

// 10
function productsAboveAverage(products) {
    const totalPrice = products.reduce((total, currProd) => total + currProd.price, 0);
    const averagePrice = totalPrice / products.length;
  
    return products
      .filter(({ price }) => price > averagePrice)
      .map(({ name }) => name);
  }
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
  ];
  console.log("10 products Above Average:", productsAboveAverage(products)); 
