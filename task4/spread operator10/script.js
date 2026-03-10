//1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);


//2
let numbers = [10, 20, 30];

let cloneArray = [...numbers];

console.log(cloneArray);


//3
let obj1 = { name: "John" };
let obj2 = { role: "Developer" };

let mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);

