const fakeCall = (url) => {
    return new Promise((resolve, reject) => {
        var delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay < 4000){
                resolve("Getting into a site");
            }else{
                reject("Connection Timeout!!");
            }
        }, delay)
    })  

}


fakeCall("google.com/api1")
    .then((data) => {
        console.log(data);
        console.log("page 1 loaded");
        return fakeCall("google.com/api2")
    })
    .then(() => {
        console.log("page 2 loaded");
        return fakeCall("google.com/api3")
    })
    .then(() => {
        console.log("page 3 loaded");
    })
    .catch(() => {
        console.log("Connection Timeout :(");
    })
    
