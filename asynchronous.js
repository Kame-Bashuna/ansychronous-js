function expectedMessage(message,delayTime){
    setTimeout(()=>{
        console.log(message) },delayTime)
}
expectedMessage("I am home",1000)


//no3
async function callPerformTask(){
    try{
        await callPerformTask()
        console.log(`task achieved`)
    }
    catch (error){
        console.log(`error`, + error)
    }
}
function performTask(){
    return newPromise((resolve,reject)=>{
        const success =true
        setTimeout(()=>{
        if(success){
          resolve()
        }
else{
    reject(`it is not right`)
}},1000);
    })
}
callPerformTask();



//no2
const userIds=['user1','user2','user3'];
async function fetchAndLogUserData(){
    for(const userId of userIds){
        try{
            const userId = await
            getUserData(userId)
            console.log(userData)
        }
        catch(error){
            console.log(` error has happened for user ${userId}:${error}`);
        }
    }
}
function getUserData(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const userData = {id,name:`user ${id},age:20`}
            resolve(userData)
        },1000)
    });
};
fetchAndLogUserData()




 