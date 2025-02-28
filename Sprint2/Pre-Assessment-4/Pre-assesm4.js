// 1 Password
function passwordChecker(password){
    let regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@$%&*?])[a-zA-Z\d!@$%&*?]{8,}$/;
    return regex.test(password) ? "Strong password" : "Weak password";
}
console.log( "First password: ", passwordChecker("aAi2a45@2"));
console.log( "Second password: ", passwordChecker("aAc23"));

// 2
function arrayWrapper(nums, operation) {
    flat=nums.flat();
    let sum=0;
    if (operation=="Add"){
        return flat.reduce((sum, num) => sum+=num, 0);
    } else if (operation=="String"){
        return flat;
    }
}

console.log(arrayWrapper([[1, 2], [3, 4]], "Add"));
console.log(arrayWrapper([[23, 98], [42, 70]], "String")); 

// 3
let arr1=[5, 10, 20, 2, 0, 33, 100, 90];
let i=0, temp=[], sum1;
while (i<arr1.length){
    sum1=0;
    temp.push(arr1[i],arr1[i+1]);
    sum1 = arr1[i] + arr1[i+1];
    temp.push(sum1);
    i+=2;
}
console.log("Original array :", arr1, "\nPattern :", temp)  

// 4 Move zeroes to the end
let nums = [0,1,0,3,12];
i=0;

console.log("Before moving zeroes : ", nums);
for ( let num of nums){
    if (num!==0){
        nums[i++]= num;
    }
}
while(i<nums.length){
    nums[i++]= 0;
}
console.log("After moving zeroes :", nums);

// 5
let str1="Hello How Are You? ";
let newStr="";
console.log("Before : ", str1);
i=0;
for ( let char of str1 ){
    if (char!=" ") newStr+=char;
}
console.log("After removing spaces :", newStr);

// 6
let x = 5, y = 10;

console.log(`Before swapping: x = ${x}, y = ${y}`);
x=x^y;
y=x^y;
x=x^y;
console.log(`After swapping: x = ${x}, y = ${y}`);

// 7
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    return [...str1].sort().join('') === [...str2].sort().join('');
}

console.log("Anagram? :")
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
