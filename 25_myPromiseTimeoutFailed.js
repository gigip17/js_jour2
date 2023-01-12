const sleepThrow = (milliseconds, success) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if(success){
    resolve("success");
    }else{
    reject("failed");
    }
    }, milliseconds)
    })
    }
module.exports = sleepThrow
    