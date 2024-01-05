const user=new Object()

console.log(user);
user.id="UI-101";
user.name="chinmaya kumar";
user.isLoggedin=false;


//nested object is possible in javascript
//and acces value by . notation
const reguser={
    email:"vxgs@gmail.com",
    address:{
        fulladd:{
            city:"ctc",
            state:"odisha",
            district:'cuttack'
        },
        Pin:754025
    }

}
console.log(reguser.address)
// o/p will be
// {
//   fulladd: { city: 'ctc', state: 'odisha', district: 'cuttack' },
//   Pin: 754025
// }

console.log(reguser.address.fulladd);

//if any properties not exist but we call them the we have to use ? in that call o/w it show error
console.log(reguser.address.fulladd?.district)
//op willbe cuttack



//combine object
const obj1={1:"a", 2:"b"}
const obj2={3:"A", 4:"B"}

const obj3={obj1,obj2}
console.log(obj3)
//it return a rarray under array  to over come nellow

//follow this type assign
const obj4=Object.assign(obj1,obj2)
console.log(obj4)

 