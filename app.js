const fakeReq = (url, success, failure) => {
    var delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000){
            failure("Connection TimeOut!!");
        }else{
            success("Got Response for the request");
        }
    }, delay)
} 


fakeReq("movie", 
    (data) => {
        console.log(data);
        console.log("Login to first page");
        fakeReq("google", 
            (data) => {
                console.log(data);
                console.log("Login to second Page")
            }, 
            (err) => {
                console.log(err);
                console.log("Second page not found");
            })
    }, 
    (err) => {
        console.log(err);
        console.log("Error 404 not found");
    })



