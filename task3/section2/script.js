//1
let marks = 75
if (marks >= 90 ) {
    console.log("Grade A");
}
else if(marks >= 70){
    console.log("Grade B");
    }
else if(marks >= 50){
    console.log("Grade c");
}
else{
    console.log("Fail");   
}

//2
 let hour = 21
 if (hour < 12) {
    console.log("Morning");
 }
 else if(hour <= 17){
    console.log("Afternoon");
 }
 else if (hour <= 20){
    console.log("Evening");
 }
 else {
    console.log("Good night");  
 }

 //3
 let number = 0
 if (number > 0){
    console.log("Positive");
 
} else if (number <0) {
    console.log("Negative");
 }
 else{
    console.log("zero");  
 }

 //4
let score = 88
 if (score>= 100) {
    console.log("Winner"); 
 } 
 else if (score >50){
    console.log("Good");
 }
 else{
    console.log("Try again");  

 }

 //5
let a = 50;
let b = 55;
let c = 35;

if (a >= b && a >= c){
    console.log("Largest number is:", a);
}
else if (b >= a && b >= c) {
    console.log("Largest number is:", b);
}
else{
    console.log("Largest number is:", c);
}