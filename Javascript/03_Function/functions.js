function sum(a,b){
    console.log(a+b)
}

sum(1,3);

let sum1=sum(5.5,34)
function loginmessgae(username){
    if(username===undefined)
    {
        console.log("Enter a username")
    }
    return `${username} just Logged in`;
}

console.log(loginmessgae("ajay"))