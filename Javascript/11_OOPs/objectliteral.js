const user={
    username:"chinmay",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log("Got user details from DB");
        //console.log(`${user.username} ${user.loginCount}`);
        console.log(this.signedIn);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this.username);//it have in block scope

const user2={
    username:"sanu",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        console.log("Got user details from DB");
        //console.log(`${user.username} ${user.loginCount}`);
        console.log(this.signedIn);
    }
}


///////////////////////////////////constructor function
const date=new Date();

function User(username,loginCount,signedIn){
    this.myusername=username;
    this.loginCount=loginCount;
    this.signedIn=signedIn;
    return this;
}

const userOne=new User("hitesh",12,true)
console.log(userOne);