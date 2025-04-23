// 1
const input = [1, 2, 3, 4, 5];

function traditionalFunc(numbers) {
    return numbers.map(function(num) {
        return num * num;
    });
}

const arrowFunc = (numbers) => {
    return numbers.map(num => num * num);
};

console.log("1.");
console.log("Traditional:", traditionalFunc(input));
console.log("Arrow:", arrowFunc(input));

// 2
function mergeObjects(obj1, obj2, obj3) {
    return { ...obj1, ...obj2, ...obj3 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

console.log("\n2. Spread operator :");
console.log(mergeObjects(obj1, obj2, obj3)); 

// 3
function getStudentScore(students, studentName){
    const studMap = new Map();

    students.forEach(stud =>{
        studMap.set(stud.name, stud.score);
    });

    return studMap.get(studentName);
}

const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];

const nameToFind = 'Bob';
console.log("\n3. Score of ", nameToFind, "is", getStudentScore(students, nameToFind));

// 4
function getUniqueNumbers(numbers) {
    return [...new Set(numbers)]; // Using spread to convert set back to list(array)
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log("\n4. using set : ", getUniqueNumbers(numbers));

// 5
function filterLongWords(words) {
    return words.filter(word => word.length > 5);
}

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
console.log("\n5. Filtered words : ",filterLongWords(words));

// 6
function getProduct(numbers) {
    return numbers.reduce( (prod, currval) => prod*currval, 1);
}
const nums = [1, 2, 3, 4, 5];
console.log("\n6. Reduced product : ", getProduct(nums)); // Output: 120

// 7
function find(arr, target) {
    return {
      firstIndex: arr.indexOf(target),
      lastIndex: arr.lastIndexOf(target)
    };
}
  
const nums1 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
const result = find(nums1, target);

console.log("\n7. ",result); 

// 8
function isArray(variable) {
    return Array.isArray(variable);
}

console.log('8. Array? ');
console.log(isArray([1, 2, 3])); 
console.log(isArray('Hello'));

// 9
function check(sentence, word) {
    return sentence.includes(word);
}

console.log('9. ');
console.log(check('The quick brown fox jumps over the lazy dog', 'fox')); 
console.log(check('The quick brown fox jumps over the lazy dog', 'cat')); 

// 10
function printIndexes(arr) {
    const keys = arr.keys();
    for (let i of keys) {
      console.log(i);
    }
}

console.log('10. Index ');
printIndexes(['apple', 'banana', 'cherry']);
  
