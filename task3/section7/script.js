//1
let text = "pratham";
for (let p of text) {
    console.log(p);
}

//2
let fruits = ["apple", "banana", "orange","pine-apple"];
for (let fruit of fruits) {
    console.log(fruit);
}

//3
let str = "pratham";
let count = 0;
for (let p of str) {
    count++;
}
console.log("Total characters:", count);


//4
let word = "pratham";
for (let p of word) {
    if ("aeiou".includes(p)) {
        console.log(p);
    }
}


//5
let numbers = [10, 20, 30];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Sum:", sum);