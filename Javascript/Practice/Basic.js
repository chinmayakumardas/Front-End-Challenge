// let a=22;
// let b="chinmaya"
// let age=[1,3,4,5,67,7]
// let d;
// let e=" ";
// let country= Symbol("INDIA")
// let student={
//     mca:{
//         name:"chinmaya",
//         age:23,
//     },mba:{
//         name:"Ajay",
//         age:43,
//     },
// }
// let bi=2100000000000000002111n;
// console.log(bi);
// console.log(a);
// console.log(b);
// console.log(age);
// console.log(d);
// console.log(e);
// console.log(country);
// console.log(student);
// console.log(student.mca.age);
// console.log(student.mba);

// function sum(a,b){
//     console.log(a+b);
// }

// console.log(sum);

//class and object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

class persons {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const persons1 = new persons("satish", 22);

console.log(persons1.name);

//string
let str1 = "ajay";
let str2 = "Bijay";
console.log(str1.length);
console.log(str1.charAt(0));
console.log(str1.concat(str2));
console.log(str1.substr(1,3));
