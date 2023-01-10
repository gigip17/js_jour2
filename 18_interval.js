function updateClock() {
    var date = new Date();
    var clock = document.getElementById("clock");
    var day = date.getDate()
    var month = date.getMonth() + 1
    var year = date.getFullYear()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    clock.innerHTML = day+"/"+month+"/"+year+" "+hour+":"+minutes+":"+seconds;
}
setInterval(updateClock, 1000);