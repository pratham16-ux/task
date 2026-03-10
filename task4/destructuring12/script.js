//1
let numbers = [10, 20, 30, 40];

let [a, b, c, d] = numbers;

console.log(a, b, c, d);

//2
let employee = {
    name: "Naveen",
    role: "Developer",
    salary: 40000
};

let {name, role, salary} = employee;

console.log(name);
console.log(role);
console.log(salary);


//3
let arr = [10, 20, 30, 40];

let [first, , , last] = arr;

console.log("First:", first);
console.log("Last:", last);


//4
let data = [1, 2, [3, 4]];

let [x, y, [z, w]] = data;

console.log(x);
console.log(y);
console.log(z);
console.log(w);