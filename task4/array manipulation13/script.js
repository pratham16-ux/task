//1
let arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log("After push:", arr);

arr.pop();
console.log("After pop:", arr);

arr.shift();
console.log("After shift:", arr);

arr.unshift(0);
console.log("After unshift:", arr);


//2
let numbers = [1, 2, 3, 40, 50, 6];
numbers.splice(3, 2, 4, 5);

console.log(numbers);