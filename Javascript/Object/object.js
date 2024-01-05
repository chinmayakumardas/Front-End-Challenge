//2 way to create by

const data={
    namr:"chinmaya kumar",
    age:20,
    address:"cuttack,odisha",
    greeting:" ",

}
console.log(data.address);
data.name="ajay sahoo"


data.greeting=function(){
    console.log("welcome to my database`${age}`");
}

console.log(data.greeting())

//string interpulation
