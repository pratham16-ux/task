//1 
let employees = [
 {name:"Ravi", salary:25000},
 {name:"Meena", salary:60000},
 {name:"Arun", salary:45000},
 {name:"Priya", salary:80000},
 {name:"John", salary:30000}
]
//salary greater than 40000
let newFilter = employees.filter((c,i,t)=>{

    return c.salary < 40000

})
 console.log(newFilter);

//salary above 70000
 let newFind = employees.find((c,i,t)=>{
       
    return c.salary > 70000

 })
 console.log(newFind);

 //total salary of all employees
 let overAllsalary = employees.reduce((acc,c,i,t)=>{

return acc + c.salary

 },0)
console.log(overAllsalary);


//salary below 20000
let newSome = employees.some((c,i,t)=>{
    
    return c.salary < 20000
})

console.log(newSome);

//salary above 20000
let newEvery = employees.every((c,i,t)=>{
    return c.salary > 20000
})
console.log(newEvery);


//2
let products = ["laptop","mobile","tablet","smartwatch","mobile"]

// tablet exist in the product list
console.log(products.includes("tablet"));


//find the first index of mobile
console.log(products.indexOf("mobile"));


//find the last index of mobile 
console.log(products.lastIndexOf("mobile"));


//check if camera exists
console.log(products.includes("camera"));


//3
let username = " naveenkumar "

console.log(username);
//remove extra spaces
console.log(username.trim());

//convert the username to uppercase
console.log(username.toUpperCase());

//convert the username to lowercase
let username1 = " NAVEENKUMAR "
console.log(username1.toLowerCase());

//extract only first 6 characters to the username
console.log(username.slice(0,7));


//4
let games = ["cricket","football","hockey","tennis"]
//print all games using foreach
 games.forEach((c,i,t)=>{
     
    console.log(c);
    
 })

 //create a new array
 games.map((c,i,t)=>{
    
    console.log("map:" ,c);
    
 })


//5
let marks = [45, 90, 23, 67, 88, 12];

//sort marks ascending order
 let newSort = marks.sort((a,b)=>{

    return a-b
 })

 console.log(newSort);
 
//sort marks descending order
let newMarks = marks.sort((a,b)=>{

    return b-a
})

console.log(newMarks);

//reverse the marks array
let mark= [45, 90, 23, 67, 88, 12];
mark.reverse();

console.log(mark);


//6
let salaries = [10000,20000,30000,40000]

//find total salary paid by company
let allSalary = salaries.reduce((acc,c,i,t)=>{

return acc + c

 },0)
console.log(allSalary);

//find average salary
let avgsalaries = salaries.reduce((acc,c,i,t)=>{
    
    return acc + c / salaries.length

},0)
console.log(avgsalaries);


//7
let url = "www-stackly-com"

//convert the string into array using split()
console.log(url.split("-"));


//8
let role = "python developer"

//replace python to javascript
console.log(role.replace("python developer","javascript"));

//Check if role starts with "python"
console.log(role.startsWith("p"));

//Check if role ends with "developer"
console.log(role.endsWith("r"));


//9
let data = [1,2,[3,4,[5.6]]]

//flatten the array to
 let newVal = data.flat(Infinity)

console.log(newVal);
 

//10
let sports = ["cricket","football","tennis","hockey","golf"]

//extract football and tennis
let newSports = sports.slice(1,3)

console.log(newSports);

//extract first 3 sports
let newSlice = sports.slice(0,3)

console.log(newSlice);
