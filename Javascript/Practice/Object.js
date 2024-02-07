//object creation

let classRoom={
    className:"MCA",
    Roomnumber:1011,
    RoomSize:100,
    desc:"Big room for more than 200 students",

}
//output
console.log(classRoom);
console.log(classRoom.className);
console.log(classRoom.RoomSize);
console.log(classRoom.desc);

///Nested Object in js
let car={
    BMW:{
        Model:"1003NXP",
        Name:"BMW T series ",
        Price:5000000,
    },
    Audi:{
        Model:"10TRP",
        Name:"Audi NXT5",
        Price:4050000,
    },
    Tata:{
        Model:"1001PT",
        Name:"Tata Harrier",
        Price:2000000,
    },

}
console.log(car.Audi.Name);

///////////
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
person.firstName="chinmaya";
  console.log(person.firstName);
  console.log(person.fullName());
  console.log(person.lastName);
  console.log(person.id);