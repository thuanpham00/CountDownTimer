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

    const container = document.querySelector(".songs-container");
    let currentSongIndex = 0; // Đặt chỉ mục ban đầu thành 0 hoặc chỉ mục của bài hát mặc định
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
            // Thêm nhiều bài hát khác ở đây
        ],

        render: function () {
            const song = this.songs[currentSongIndex]; // Lấy bài hát hiện tại dựa vào chỉ mục hiện tại
            const html = `
                <div class="song" data-index="${currentSongIndex}">
                    <h2>${song.name}</h2>
                    <p>${song.singer}</p>
                    <img src="${song.img}" alt="${song.name}" />
                    <audio src="${song.path}" controls></audio>
                </div>
            `;
            container.innerHTML = html;
        },
    };

    const btnPlay = document.querySelector(".player-play");
    const btnNext = document.querySelector(".player-next");
    const btnPrev = document.querySelector(".player-prev");
    const playerImg = document.querySelector(".player-image");
    const bar = document.querySelector(".bar");
    const currentTimeText = document.querySelector(".player-remaining");
    const durationTimeText = document.querySelector(".player-duration");

    let playing = false;
    let index = 0;
    const songs = listMusicRender.songs;
    const song = document.querySelector("#song");

    btnPlay.addEventListener("click", playMusic);

    function playMusic(e) {
        if (playing) {
            playing = false;
            btnPlay.classList.remove("fa-pause");
            btnPlay.classList.add("fa-play");
            playerImg.classList.remove("is-playing");
            song.src = songs[0].path;
            song.pause();
        } else {
            playing = true;
            btnPlay.classList.remove("fa-play");
            btnPlay.classList.add("fa-pause");
            playerImg.classList.add("is-playing");
            song.src = songs[0].path;
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
        index++;
        if (index >= songs.length) {
            index = 0;
        }
        playSelectedSong(index);
    });

    function playSelectedSong(songIndex) {
        listMusicRender.render();
        currentSongIndex = songIndex;
        song.play();
        playing = true;
        btnPlay.classList.remove("fa-play");
        btnPlay.classList.add("fa-pause");
        playerImg.classList.add("is-playing");
    }
});
