//named function
function sum(a,b){
    console.log(a+b);
}

console.log(sum(1,20));
//iife
let message=(function(){
    let name="chinmaya";
    return name;
})();
//result;
///scope in js

let friend = "Jennifer";

function getFriend() {
  console.log(friend);
  
  let enemy = "Peter";
  return function getEnemy() {
    console.log(enemy);
  };
}

getFriend();


let n=4;
{
    console.log(n);
}
console.log(n);

var m=33;
console.log(m);{
    var m=333;
    console.log(m);
}
//temp cel to frahenite conversion
function temp(temp){
    let ctf=9/5*temp+32;
    return (console.log(ctf));
}
temp(100)

