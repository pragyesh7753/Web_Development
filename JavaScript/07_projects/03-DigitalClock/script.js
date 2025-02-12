const clock = document.getElementById("clock")
// const clock = document.querySelector("#clock")


setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)  // 1000ms = 1s -> updateing time every 1s