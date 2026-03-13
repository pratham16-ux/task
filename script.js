let name = "pratham";
let age = 22;
let city = "bangalore"

console.log(name);
console.log(age);
console.log(city);


prompt("what is your name")
alert("welcome");

let learnJs = confirm("do you want learn javascript ")
if (learnJs) {
    alert("great choice")
 } else {
        alert("no problem")
}

let str = "Hello World";
let num = 100;
let bool = true;
let undef;
let empty = null;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(empty, typeof empty);



let colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];

console.log("First Color: " + colors[0]);
console.log("Last Color: " + colors[colors.length - 1]);
console.log("Total Colors: " + colors.length);

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]);



let subjects = ["Math", "Science", "English", "History", "Computer"];


console.log(0, subjects[0]);
console.log(1, subjects[1]);
console.log(2, subjects[2]);
console.log(3, subjects[3]);
console.log(4, subjects[4]);

let student = {
    name: "Pratham",
    age: 22,
    course: "Computer Science",
    skills: ["HTML", "CSS", "JavaScript"]
};

console.log("Student Name:", student.name);
console.log("Second Skill:", student.skills[1]);
console.log("Course Name:", student.course);


let product = {
  name: "Laptop",
  price: 45000,
  category: "Electronics",
  inStock: true
};

console.log("Product Name: " + product.name);
console.log("Price: " + product.price);

if (product.inStock == true) {
  console.log("Available: Yes");
} else {
  console.log("Out of Stock");
}


let fruits = {
  tropical: ["mango", "pineapple"],
  berries: ["strawberry", "blueberry"],
  citrus: ["orange", "lemon"]
};

 console.log(fruits.berries[1]);
 console.log(fruits.tropical[0]);
 console.log(fruits.citrus[1]);
 console.log("Total Categories: 3");

 
 
 
