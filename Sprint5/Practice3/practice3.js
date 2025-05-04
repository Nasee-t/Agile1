// 1 Return longest string in array using reduce
function findLongestString(strings) {
    return strings.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    });
}
  

const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log("1. findLongestString: ", findLongestString(fruits));

// 2 Flatten array using reduce
function flattenArray(nums) {
  return nums.reduce((flattened, curr) => {
    return flattened.concat(curr); 
  }, []); 
}
const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
console.log('2. Flattened array:', flattenArray(nestedArray));

// 3 Count occurence of words in an array and return it in an object
function countOccurrences(wordList) {
  return wordList.reduce((obj, word) => {
    obj[word] = (obj[word] || 0) + 1;  
    return obj;
  }, {});  
}
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log('3. Count:', countOccurrences(words)); 

// 4 Group by property from array of objects
function groupBy(arr, property) {
  return arr.reduce( (newObj, curr) => {
    if (!newObj[curr[property]]) {
      newObj[curr[property]] = [];  
    }
    newObj[curr[property]].push(curr);
    return newObj;
  }, {});
}

const people = [
  { name: 'Rose', age: 25 },
  { name: 'Jack', age: 37 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 37 },
];
console.log('4. Group by property:', groupBy(people, 'age'));

// 5 Return tot price
function calculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price, 0);
}

const cart = [
  { item: 'apple', price: 1.5 },
  { item: 'banana', price: 2.0 },
  { item: 'orange', price: 1.25 }
];
console.log('5. Total price:', calculateTotal(cart)); 

// 6
function findFirstEvenNumber(numbers) {
  return numbers.find(num => num % 2 === 0);
}
const nums = [1, 3, 7, 10, 2];
console.log('6. Find first even num of', nums,':', findFirstEvenNumber(nums)); 

// 7
function findStudentByName(students, name) {
  return students.find(stud => stud.name === name);
}
const students = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Niya', age: 23 }
];
console.log('7. Find student by name:', findStudentByName(students, 'Bob'));

// 8
function findProductByID(products, id) {
  return products.find(product => product.id === id);
}
const products = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Phone' },
  { id: 103, name: 'Tablet' }
];
console.log('8. find Product By ID :', findProductByID(products, 102)); 

// 9 Return first task that is overdue
function findOverdueTask(tasks) {
  const currDate = new Date();  
  return tasks.find(task => new Date(task.dueDate) < currDate); 
}
const tasks = [
  { taskName: 'Task 1', dueDate: '2023-06-01' },
  { taskName: 'Task 2', dueDate: '2024-05-01' },
  { taskName: 'Task 3', dueDate: '2024-01-01' }
];
console.log('9. First overdue:', findOverdueTask(tasks));
