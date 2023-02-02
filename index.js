

const clock = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let mil = date.getMilliseconds();


    hour < 10 ? hour = "0" + hour : hour;
    min < 10 ? min = "0" + min : min;
    sec < 10 ? sec = "0" + sec : sec;
    

    let time = hour + ":" + min + ":" + sec;

    document.getElementById("time-date").innerHTML = time;

    let t = setTimeout(function(){ clock() }, 1000); 
}




clock();