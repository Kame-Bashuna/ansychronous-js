function expectedMessage(message,delayTime){
    setTimeout(()=>{
        console.log(message) },delayTime)
}
expectedMessage("I am home",1000)

const userIds=[user1,user2]
async function userData(){
    for (const userId of userId){
        try{
            const userInformation=await
            userData(userIds)
            console.log(userInformation)
        }
        catch(error){
           console.log(error)
        }
}
}
function userInformation(id){
    return Promise((resolve,reject)=>{
        setTimeout(()=>{
            const userInfo={id,name:`user$id`,age:30}
            resolve(userIds)

        },3000)
    })
}
userData()



