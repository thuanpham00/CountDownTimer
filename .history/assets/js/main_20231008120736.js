window.addEventListener("load", function () {
    function TimerDate() {
        // this đại diện cho timerDate
        this.daysText = document.querySelector("#days");
        this.hoursText = document.querySelector("#hours");
        this.minutesText = document.querySelector("#minutes");
        this.secondsText = document.querySelector("#seconds");
        this.formTimer = document.querySelector(".form-timer");

        this.formTimer.addEventListener("submit", (e) =>
            this.timerInputForm(e)
        );
    }
    new TimerDate();
    timerDate.prototype.setTimer = function (
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
            this.getMonthIndex(monthInput),
            dateInput,
            hourInput,
            minuteInput
        ).getTime();

        if (isNaN(endTime) || endTime - currentTime <= 0) return;
        const that = this; // that để lưu trữ tham chiếu đến đối tượng timerDate (this).
        setInterval(function () {
            changeTimer.call(that);
        }, 500);
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

                that.daysText.textContent = `${days}`.slice(-2);
                that.hoursText.textContent = `${hours}`.slice(-2);
                that.minutesText.textContent = `${minutes}`.slice(-2);
                that.secondsText.textContent = `${seconds}`.slice(-2);
            }
        }
    };
    timerDate.prototype.getMonthIndex = function (monthName) {
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
    };
    timerDate.prototype.timerInputForm = function (e) {
        e.preventDefault();
        const dayInput = this.formTimer.elements["day"].value;
        const monthInput = this.formTimer.elements["month"].value;
        const dateInput = parseInt(this.formTimer.elements["date"].value);
        const yearInput = parseInt(this.formTimer.elements["year"].value);
        const hourInput = parseInt(this.formTimer.elements["hour"].value);
        const minuteInput = parseInt(this.formTimer.elements["minute"].value);
        const gmtInput = this.formTimer.elements["GMT"].value;
        this.setTimer( // chạy hàm
            dayInput,
            monthInput,
            dateInput,
            yearInput,
            hourInput,
            minuteInput,
            gmtInput
        );
    };

    // xử lý nhạc
    const container = document.querySelector(".songs-container");
    let currentSongIndex = 0; // Đặt chỉ mục ban đầu thành 0 hoặc chỉ mục của bài hát mặc định
    const listMusicRender = {
        songs: [
            {
                name: "Lần cuối",
                singer: "Ngọt",
                path: "./assets/files/lan-cuoi.mp3",
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
                path: "./assets/files/neu-mot-ngay-chung-ta-khong-con-gap.mp3",
                img: "./assets/img/mthis.png",
            },
            {
                name: "Tháng 11 có em",
                singer: "Thanh Hòa",
                path: "./assets/files/thang-11-co-em.mp3",
                img: "./assets/img/mthis.png",
            },
            {
                name: "Tình cờ yêu em",
                singer: "Kunn Đức Nam",
                path: "./assets/files/tinh-co-yeu-em.mp3",
                img: "./assets/img/mthis.png",
            },
            {
                name: "Vết thương",
                singer: "Fishy",
                path: "./assets/files/vet-thuong.mp3",
                img: "./assets/img/mthis.png",
            },
            // Thêm nhiều bài hát khác ở đây
        ],

        render: function () {
            const song = this.songs[currentSongIndex];
            const htmls = `<div class="song" data-index="${currentSongIndex}">
                    <h2>${song.name}</h2>
                    <p>${song.singer}</p>
                    <img src="${song.img}" alt="${song.name}" class="img" />
                    <audio src="${song.path}" controls id="song" style="display: none"></audio>
                </div>
            `;
            container.innerHTML = htmls;
        },
    };

    listMusicRender.render();
    const btnPlay = document.querySelector(".player-play");
    const btnNext = document.querySelector(".player-next");
    const btnPrev = document.querySelector(".player-prev");
    const bar = document.querySelector(".bar");
    const currentTimeText = document.querySelector(".player-remaining");
    const durationTimeText = document.querySelector(".player-duration");
    const audio = document.querySelector("#song");

    let playing = false;
    const songs = listMusicRender.songs;

    btnPlay.addEventListener("click", playMusic);

    function playMusic(e) {
        if (playing) {
            playing = false;
            btnPlay.classList.remove("fa-pause");
            btnPlay.classList.add("fa-play");
            audio.pause();
        } else {
            playing = true;
            btnPlay.classList.remove("fa-play");
            btnPlay.classList.add("fa-pause");
            audio.play();
        }
    }

    btnNext.addEventListener("click", function () {
        handleChangeMusic(1);
    });

    btnPrev.addEventListener("click", function () {
        handleChangeMusic(-1);
    });

    audio.addEventListener("ended", function () {
        handleChangeMusic(1);
    });

    function handleChangeMusic(dir) {
        if (dir === 1) {
            currentSongIndex++;
            if (currentSongIndex >= songs.length) {
                currentSongIndex = 0;
            }
            playSelectedSong(currentSongIndex);
        } else if (dir === -1) {
            currentSongIndex--;
            if (currentSongIndex < 0) {
                currentSongIndex = songs.length - 1;
            }
            playSelectedSong(currentSongIndex);
        }
    }

    function playSelectedSong(songIndex) {
        currentSongIndex = songIndex; // Cập nhật chỉ mục bài hát hiện tại
        listMusicRender.render(); // Cập nhật giao diện người dùng
        audio.src = songs[currentSongIndex].path;
        audio.play();
        playing = true;
        btnPlay.classList.remove("fa-play");
        btnPlay.classList.add("fa-pause");
    }

    function checkTimer() {
        const { duration, currentTime } = audio;
        bar.max = audio.duration;
        bar.value = audio.currentTime;
        currentTimeText.textContent = formatTimeMusic(currentTime);
        if (!duration) {
            durationTimeText.textContent = "0:00";
        } else {
            durationTimeText.textContent = formatTimeMusic(duration);
        }
    }

    function formatTimeMusic(number) {
        const minutes = parseInt(Math.floor(number / 60));
        const seconds = parseInt(Math.floor(number - minutes * 60));
        return `0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }
    const timer = setInterval(checkTimer, 1000); // chạy hàm sau mỗi lần 1s để nó reset tăng lên thời gian hiện tại (currentTime)
    bar.addEventListener("change", function (e) {
        audio.currentTime = bar.value;
    });

    checkTimer();
});
