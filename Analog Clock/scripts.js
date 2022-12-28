const clock = (function () {
    const second = document.querySelector(".frame .second");
    const minute = document.querySelector(".frame .minute");
    const hour = document.querySelector(".frame .hour");
    
    const now = new Date();
    let secondDeg = now.getSeconds() *6;
    let minuteDeg = now.getMinutes() *6;
    let hourDeg = (now.getHours() *30) + (minuteDeg /60); 

    // rotate arms to initial degrees
    rotate(second, secondDeg);
    rotate(minute, minuteDeg);
    rotate(hour, hourDeg);

    tick(); //first tick
    setInterval(tick, 1000);

    function tick() {
        rotate(second, secondDeg);
        // increase second degree with mod 360
        secondDeg = (secondDeg + 6) % 360;

        if(secondDeg === 0) {
            rotate(minute, minuteDeg);
            rotate(hour, hourDeg);

            minuteDeg = (minuteDeg + 6) % 360;
            hourDeg = (hourDeg + (6/60)) % 360;
        }
    }

    function rotate(el, deg) {
        el.style.transform = `rotateZ(${deg}deg)`;
    }
})();