//section 4

console.log(5=="5");

console.log(5==="5");

console.log(0==false);

console.log(0===false);

console.log(null == undefined);

console.log(null === undefined);

console.log("10">5);

console.log("2">"10");

console.log(true == 1);

console.log(true === 1);



// section 5


console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!(5 > 2));
console.log(5 > 3 && 10 > 5);
console.log(5 > 3 && 10 < 5);
console.log(5 < 3 || 10 < 5);
console.log(5 < 3 || 10 > 5);
console.log((5 > 2 && 3 > 1) || (10 < 2));



// section 6

let age ;
age >= 18 ? 
console.log("adult") : console.log("mine");

let marks ;
marks >= 50 ?
console.log("Even") : console.log("odd");

let number ;
number %2 == 0 ?
console.log("Even") : console.log("odd");


let mark = 75;
let grade = mark >= 90 ? "A" :
            mark >= 75 ? "B" :
            mark >= 60 ? "C" :
            mark >= 50 ? "D" : "fail";
console.log("grade:",grade);

            
let num = -10;
let result = num >= 0 ?
console.log("positive") : console.log("negative")

// section 8

console.log(typeof("5"+2));
console.log(typeof("5"-2));
console.log(typeof("5"*2));
console.log(typeof(true + 1));
console.log(typeof(false +"1"));


// section 9

console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(true));