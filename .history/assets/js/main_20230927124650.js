window.addEventListener("load", function() {
    const daysText = document.querySelector("#days")
    const hoursText = document.querySelector("#hours")
    const minutesText = document.querySelector("#minutes")
    const secondsText = document.querySelector("#seconds")

    function setTimer(date) {
        let currentTime = new Date().getTime();
        const endTime = new Date(date).getTime();
        if(isNaN(endTime) || endTime - currentTime <= 0) return;
        
        function changeTimer() {
            let days, hours, minutes, seconds;
            const now = new Date();
            let startTime = now.getTime();
            let countDown = (endTime - startTime)
        }
    }
    setTimer()
})