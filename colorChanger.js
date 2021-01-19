const changeColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(delay < 3000){
                resolve(color);
            }
            reject(`delay time ${delay}`);
        }, delay)
    })
}

changeColor("red", 2000)
    .then((data) => {
        document.body.style.backgroundColor = data;
        return changeColor("yellow", 2000)
    })
    .then((data) => {
        document.body.style.backgroundColor = data;
        return changeColor("blue", 2000);
    })
    .then((data) => {
        document.body.style.backgroundColor = data;
        return changeColor("cyan", 2000);
    })
    .then((data) => {
        document.body.style.backgroundColor = data;
    })
    .catch((err) => {
        console.log(err)
    })
