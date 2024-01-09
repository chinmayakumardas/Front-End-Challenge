const user={
    username:"chinmay",
    price:2000,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.welcomeMessage();
user.username="ajay"
user.welcomeMessage()
console.log(this);//op will be empty {}

// function chai(){
//     console.log(this);
// }
// chai()


const chai= ()=>{
    console.log(this);
}
chai()