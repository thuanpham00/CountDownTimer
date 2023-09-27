window.addEventListener("load", function () {
    const daysText = document.querySelector("#days");
    const hoursText = document.querySelector("#hours");
    const minutesText = document.querySelector("#minutes");
    const secondsText = document.querySelector("#seconds");

    function setTimer(date) {
        let currentTime = new Date().getTime();
        const endTime = new Date(date).getTime();
        if (isNaN(endTime) || endTime - currentTime <= 0) return;
        setInterval(changeTimer, 500); 
        // tác dụng của gọi hàm trong setInterval là chạy hàm với số lần không giới hạn với 0.5s
        // cứ 0.5s là nó 
        function changeTimer() {
            let days, hours, minutes, seconds;
            const now = new Date();
            let startTime = now.getTime();
            let countDown = parseInt((endTime - startTime) / 1000); // đổi qua từ m/s -> s
            if (countDown > 0) {
                days = parseInt(countDown / 86400);
                countDown = countDown % 86400;
                hours = parseInt(countDown / 3600);
                countDown = countDown % 3600;
                minutes = parseInt(countDown / 60);
                countDown = countDown % 60;
                seconds = parseInt(countDown);

                daysText.textContent = `${days}`.slice(-2);
                hoursText.textContent = `${hours}`.slice(-2);
                minutesText.textContent = `${minutes}`.slice(-2);
                secondsText.textContent = `${seconds}`.slice(-2);
            }
        }
    }
    setTimer("Wed Sep 27 2023 15:52:04 GMT+0700 (Indochina Time)");
});
