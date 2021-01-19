const req = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject("connection timeout :(");
            }else{
                resolve("Got response");
            }
        }, delay)
    }) 
}

async function makeReq() {
    const dat = await req("hello");
    console.log(dat);
}