let num=[1,2,3,41,32,1,3,142];
console.log(num.sort());
console.log(num.sort((a,b)=>{
    return b-a;
}));


let college=[];
college[0]="GIET";
college[1]="IMIT";
college[2]="KISS";

console.log(college);
console.log(college.toString());

let arr=[];
//insert array
arr.push(6)
arr.push(2)
arr.push(67)
arr.unshift(123)
arr.unshift(12)
arr.unshift(13)

//remove array
arr.pop()
arr.shift()
console.log(arr);