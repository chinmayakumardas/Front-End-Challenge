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

let arr=[1,3,5];
arr.shift()
arr.unshift()
// arr.delete()
// arr.concat()
// arr.copyWithin()
// arr.flat()
// arr.splice()
// arr.toSpliced()
// arr.slice()


console.log(arr.length);