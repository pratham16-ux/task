//1
let student = {
  name: "Pratham",
  age: 22,
  department: "Computer Science"
};

for (let key in student) {
  console.log(student[key]);
}


//2
let stud = {
  name: "Pratham",
  age: 22,
  department: "Computer Science"
};

for (let key in stud) {
  console.log(key);
}

//3
let stud1 = {
  name: "Pratham",
  age: 22,
  department: "Computer Science"
};

for (let key in stud1) {
  console.log(key + " : " + stud1[key]);
}