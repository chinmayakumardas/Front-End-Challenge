//promise way 1
const promiseOne=new Promise(function(resolve,reject){
        //do an  async task
        //DB call,cryptgraphy,network call etc
        setTimeout(function(){
            console.log('Async task completed')
            resolve()
        },1000)
});

promiseOne.then(function(){
    console.log("promise consumed");
});


//promise way2

new Promise(function(resolve,reject){
    setTimeout(function()  {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});


//promise way 3

const   promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


//promise 4

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"chinmaya",password:"chin123"})
        }else{
            reject('Error:Something went wrong');
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise either resolved or Rejected"));


//promise 5
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"java",password:"123"})
        }else{
            reject('Error:Java went wrong');
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUsers(){
    const response=await fetch('http://jsonplaceholder.typicode.com/users')
    const data=response.json()
    console.log(data);
}

getAllUsers()