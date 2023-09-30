window.addEventListener("load", function () {
    const daysText = document.querySelector("#days");
    const hoursText = document.querySelector("#hours");
    const minutesText = document.querySelector("#minutes");
    const secondsText = document.querySelector("#seconds");

    function setTimer(
        dayInput,
        monthInput,
        dateInput,
        yearInput,
        hourInput,
        minuteInput,
        gmtInput
    ) {
        let currentTime = new Date().getTime();
        const endTime = new Date(
            yearInput,
            getMonthIndex(monthInput),
            dateInput,
            hourInput,
            minuteInput
        ).getTime();

        if (isNaN(endTime) || endTime - currentTime <= 0) return;
        setInterval(changeTimer, 500);
        changeTimer();

        function changeTimer() {
            let days, hours, minutes, seconds;
            const now = new Date();
            let startTime = now.getTime();
            let countDown = parseInt((endTime - startTime) / 1000);
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

        function getMonthIndex(monthName) {
            const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];
            return months.indexOf(monthName);
        }
    }

    const formTimer = document.querySelector(".form-timer");
    formTimer.addEventListener("submit", function (e) {
        e.preventDefault();
        const dayInput = this.elements["day"].value;
        const monthInput = this.elements["month"].value;
        const dateInput = parseInt(this.elements["date"].value);
        const yearInput = parseInt(this.elements["year"].value);
        const hourInput = parseInt(this.elements["hour"].value);
        const minuteInput = parseInt(this.elements["minute"].value);
        const gmtInput = this.elements["GMT"].value;
        setTimer(
            dayInput,
            monthInput,
            dateInput,
            yearInput,
            hourInput,
            minuteInput,
            gmtInput
        );
    });

    // xử lý nhạc
    const listMusicRender = {
        songs: [
            {
                name: "Lần cuối",
                singer: "Ngọt",
                path: "./assets/files/lancuoi.mp3",
                img: "./assets/img/mthis.png",
            },
            {
                name: "Miên man",
                singer: "Minh Huy",
                path: "./assets/files/mien-man.mp3",
                img: "./assets/img/mthis.png",
            },
            {
                name: "Nếu một ngày chúng ta không còn gặp",
                singer: "Dick",
                path: "./assets/files/neumotngaychungtakhongcongap.mp3",
                img: "./assets/img/mthis.png",
            },
            {
                name: "Tháng 11 có em",
                singer: "Chả biết ca sĩ",
                path: "./assets/files/thang11coem.mp3",
                img: "./assets/img/mthis.png",
            },
            {
                name: "Vết thương",
                singer: "Ngọt",
                path: "./assets/files/vetthuong.mp3",
                img: "./assets/img/mthis.png",
            },
        ],

        render: function () {
            const htmls = this.songs.map((song, index) => {
                return `
                <h2>${song.name}</h2>
                <p>${song.singer}</p>
                <img src="${song.img}" alt="${song.name}" />
                <audio src="${song.path}" controls></audio>
            `;
            });
            
        },
    };
    listMusicRender.render();
    
    const btnPlay = document.querySelector(".player-play");
    const btnNext = document.querySelector(".player-next");
    const btnPrev = document.querySelector(".player-prev");
    const playerImg = document.querySelector(".player-image");
    const bar = document.querySelector(".bar");
    const currentTimeText = document.querySelector(".player-remaining");
    const durationTimeText = document.querySelector(".player-duration");
    const nameMusic = document.querySelector(".player-nameMusic"); // Thêm này
    
    let playing = false; // Khởi đầu với trạng thái tắt nhạc
    let index = 0; // Index của bài hát hiện tại
    const songs = listMusicRender.songs; // Sử dụng mảng songs từ listMusicRender
    
    const song = document.querySelector("#song"); // Tạo một đối tượng Audio mới
    
    btnPlay.addEventListener("click", playMusic);
    
    function playMusic(e) {
        if (playing) {
            // Khi nhạc đang phát thì dừng
            playing = false;
            btnPlay.classList.remove("fa-pause");
            btnPlay.classList.add("fa-play");
            playerImg.classList.remove("is-playing");
            song.src = songs[index].path; // Thiết lập nguồn bài hát từ mảng songs
            song.pause();
        } else {
            // Khi nhạc đang tắt thì bật
            playing = true;
            btnPlay.classList.remove("fa-play");
            btnPlay.classList.add("fa-pause");
            playerImg.classList.add("is-playing");
            song.src = songs[index].path; // Thiết lập nguồn bài hát từ mảng songs
            song.play();
        }
    }
    
    btnNext.addEventListener("click", function () {
        index++;
        if (index >= songs.length) {
            index = 0;
        }
        playSelectedSong(index);
    });
    
    btnPrev.addEventListener("click", function () {
        index--;
        if (index < 0) {
            index = songs.length - 1;
        }
        playSelectedSong(index);
    });
    
    song.addEventListener("ended", function () {
        // Xử lý khi bài hát kết thúc
        index++;
        if (index >= songs.length) {
            index = 0;
        }
        playSelectedSong(index);
    });
    
    function playSelectedSong(songIndex) {
        song.src = songs[songIndex].path;
        song.play();
        playing = true;
        btnPlay.classList.remove("fa-play");
        btnPlay.classList.add("fa-pause");
        playerImg.classList.add("is-playing");
    } 
});
