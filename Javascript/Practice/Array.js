let mark=[43,64,11100,54664,90,57]

mark.push(50)//end
mark.unshift(50)//start
mark.splice(0,0,11,22)

//delete array element 
// mark.pop(1)
// mark.shift(2)
// mark.splice(1,1)
// mark.toString()
// mark.join("-")
// console.log(mark.slice(0,4));

mark.sort();
let m=mark.sort((a,b)=>{
    return b-a;
})
mark.reverse()
// for(let i=0;i<mark.length;i++){
//     console.log(mark[i]);
// }
//Iterations
mark.forEach(function even(value){
   if(value%2==0)
   console.log(value+1);
})

// let a=new Array(1,2,3);
// let a1=new Array(1,2,3);
// console.log([...a,...a1]);

// let dates=new Date("2021-03-25-10-15")
// console.log(dates.getHours())
// console.log(Math.sqrt(4))
// console.log(Math.round(4.23))
// console.log(Math.ceil(4.23))
// console.log(Math.floor(4.51))

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.random()*100);

// console.log(Math.floor(Math.random()*10));
// console.log(Math.random()*10);
// console.log(Math.random()*100);


for(let key in mark){
    console.log(mark[key]+200);
}

for(let y of mark){
    console.log(y+100);
}

let sets=new Map()
sets.set('IN','India')
console.log(sets);
console.log(sets.get("IN"));