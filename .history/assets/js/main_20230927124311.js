window.addEventListener("load", function() {
    const daysText = document.querySelector("#days")
    const hoursText = document.querySelector("#hours")
    const minutesText = document.querySelector("#minutes")
    const secondsText = document.querySelector("#seconds")

    function setTimer(date) {
        const currentTime = new Date().getTime();
        const endTime = new Date()
        console.log(currentTime)
    }
    setTimer()
})