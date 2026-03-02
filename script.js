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

console.log(`Value: ${str} | Type: ${typeof str}`);
console.log(`Value: ${num} | Type: ${typeof num}`);
console.log(`Value: ${bool} | Type: ${typeof bool}`);
console.log(`Value: ${undef} | Type: ${typeof undef}`);
console.log(`Value: ${empty} | Type: ${typeof empty}`);



let colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];

console.log("First Color: " + colors[0]);
console.log("Last Color: " + colors[colors.length - 1]);
console.log("Total Colors: " + colors.length);

for (let i = 0; i < colors.length; i++) {
  console.log("Index " + i + ": " + colors[i]);
}


let subject = ["social", "science", "maths", "java", "english"];
for (let i = 0; i < subject.length; i++) {
  console.log(+ i + ": " + subject[i]);
}


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

 
 
 