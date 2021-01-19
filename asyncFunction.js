const delayColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); 
        }, delay)
    })
}


const rainbow = async () => {
    await delayColor("red", 1000);
    await delayColor("yellow", 1000);
    await delayColor("blue", 1000);
    await delayColor("green", 1000);
    await delayColor("voilet", 1000);
    await delayColor("cyan", 1000);
    await delayColor("orange", 1000);
    return "All colors done";
}


const next = async () => {
    await rainbow();
    console.log("every thing is executed");
}