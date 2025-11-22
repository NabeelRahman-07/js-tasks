//Basic program to understand promise,async,await,setTimeout,promise chaining in JavaScript.


let step1=function(){
    return new Promise((resolve,reject)=>{
        console.log("Loading profile picture");
        setTimeout(()=>{
            console.log("Profile picture loaded");
            resolve();
        },2000)
    })
}
let step2=function(){
    return new Promise((resolve,reject)=>{
        console.log("Loading followers");
        setTimeout(()=>{
            console.log("Followers loaded");
            resolve();
        },3000)
    })
}
let step3=function(){
    return new Promise((resolve,reject)=>{
        console.log("Loading posts");
        setTimeout(()=>{
            console.log("Posts loaded");
            resolve();
        },4000)
    })
}
let step4=function(){
    return new Promise((resolve,reject)=>{
        console.log("Loading comments");
        setTimeout(()=>{
            console.log("Comments Loaded");
            resolve();
        },2000)
    })
}

async function loadProfile() {
    try{
        await step1();
        await step2();
        await step3();
        await step4();
        console.log("Profile loaded succesfully");
        
    }
    catch(error){
        console.log("error occurd:",error);
        
    }
}

loadProfile()