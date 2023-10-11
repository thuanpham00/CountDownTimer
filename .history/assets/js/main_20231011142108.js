window.addEventListener("load", function () {
    function TimerDate() {
        // this đại diện cho TimerDate
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
    TimerDate.prototype.setTimer = function (
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
        const that = this; // that để lưu trữ tham chiếu đến đối tượng TimerDate (this).
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

                // slice cắt và không thay đổi mảng gốc
                // splice cắt và làm thay đổi mảng gốc
                // nếu ở đây không gán that = this; thì this ở đây nó hiểu là của changeTimer
                that.daysText.textContent = `${days}`.slice(-2);
                that.hoursText.textContent = `${hours}`.slice(-2);
                that.minutesText.textContent = `${minutes}`.slice(-2);
                that.secondsText.textContent = `${seconds}`.slice(-2);
            }
        }
    };
    TimerDate.prototype.getMonthIndex = function (monthName) {
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
    TimerDate.prototype.timerInputForm = function (e) {
        e.preventDefault();
        const dayInput = this.formTimer.elements["day"].value;
        const monthInput = this.formTimer.elements["month"].value;
        const dateInput = parseInt(this.formTimer.elements["date"].value);
        const yearInput = parseInt(this.formTimer.elements["year"].value);
        const hourInput = parseInt(this.formTimer.elements["hour"].value);
        const minuteInput = parseInt(this.formTimer.elements["minute"].value);
        const gmtInput = this.formTimer.elements["GMT"].value;
        this.setTimer(
            // chạy hàm
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
    function MusicMp3() {
        this.container = document.querySelector(".songs-container");
        this.currentSongIndex = 0; // Đặt chỉ mục ban đầu thành 0 hoặc chỉ mục của bài hát mặc định
        const self = this; // để lưu trữ tham chiếu đến đối tượng MusicMp3 (this).
        this.listMusicRender = {
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
                {
                    name: "Bạn đời",
                    singer: "Karik",
                    path: "./assets/files/ban-doi.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "Vì mẹ anh bắt chia tay",
                    singer: "Karik - Miu lê",
                    path: "./assets/files/vi-me-anh-bat-chia-tay.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "We go hard",
                    singer: "Rap Việt",
                    path: "./assets/files/we-go-hard.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "Anh đã ổn hơn",
                    singer: "MCK",
                    path: "./assets/files/anh-da-on-hon.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "Anh luôn như vây",
                    singer: "Bray",
                    path: "./assets/files/anh-luon-nhu-vay.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "Chỉ một đêm nữa thôi",
                    singer: "MCK",
                    path: "./assets/files/chi-mot-dem-nua-thoi.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "Giờ thì ai cười",
                    singer: "HieuThuHai",
                    path: "./assets/files/gio-thi-ai-cuoi.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "Khi cơn mơ đang dần phai",
                    singer: "Tez",
                    path: "./assets/files/khi-con-mo-dang-dan-phai.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "Nghe như tình yêu",
                    singer: "MCK remake",
                    path: "./assets/files/nghe-nhu-tinh-yeu-mck.mp3",
                    img: "./assets/img/mthis.png",
                },
                {
                    name: "Tại vì sao",
                    singer: "MCK",
                    path: "./assets/files/tai-vi-sao.mp3",
                    img: "./assets/img/mthis.png",
                },
                // Thêm nhiều bài hát khác ở đây
            ],

            render: function () {
                const song = this.songs[self.currentSongIndex];
                const htmls = `<div class="song" data-index="${self.currentSongIndex}">
                        <h2 class="nameSong">${song.name}</h2>
                        <p>${song.singer}</p>
                        <img src="${song.img}" alt="${song.name}" class="img" />
                        <audio src="${song.path}" controls id="song" style="display: none"></audio>
                    </div>
                `;
                self.container.innerHTML = htmls;
            },
        };

        this.btnPlay = document.querySelector(".player-play");
        this.btnNext = document.querySelector(".player-next");
        this.btnPrev = document.querySelector(".player-prev");
        this.bar = document.querySelector(".bar");
        this.currentTimeText = document.querySelector(".player-remaining");
        this.durationTimeText = document.querySelector(".player-duration");
        this.audio = document.querySelector("#song");

        this.listMusicRender.render();
        this.playing = false;
        this.songs = this.listMusicRender.songs;

        this.btnPlay.addEventListener("click", (e) => this.playMusic());

        this.btnNext.addEventListener("click", () => this.handleChangeMusic(1));

        this.btnPrev.addEventListener("click", () =>
            this.handleChangeMusic(-1)
        );

        this.audio.addEventListener("ended", () => this.handleChangeMusic(1));

        this.bar.addEventListener(
            "change",
            (e) => (this.audio.currentTime = this.bar.value)
        );

        const timer = setInterval(() => this.checkTimer(), 1000); // chạy hàm sau mỗi lần 1s để nó reset tăng lên thời gian hiện tại (currentTime)

        this.random = document.querySelector(".random");
        this.random.addEventListener("click", () => this.randomMusic());
        this.nameSong = document.querySelector(".nameSong")
    }
    new MusicMp3();
    MusicMp3.prototype.playMusic = function () {
        this.audio.setAttribute(
            "src",
            `${this.listMusicRender.songs[this.currentSongIndex].path}`
        );
        if (this.playing) {
            this.playing = false;
            this.btnPlay.classList.remove("fa-pause");
            this.btnPlay.classList.add("fa-play");
            this.audio.pause();
        } else {
            this.playing = true;
            this.btnPlay.classList.remove("fa-play");
            this.btnPlay.classList.add("fa-pause");
            this.audio.play();
        }
    };

    MusicMp3.prototype.handleChangeMusic = function (dir) {
        if (dir === 1) {
            this.currentSongIndex++;
            if (this.currentSongIndex >= this.songs.length) {
                this.currentSongIndex = 0;
            }
            this.playSelectedSong(this.currentSongIndex);
        } else if (dir === -1) {
            this.currentSongIndex--;
            if (this.currentSongIndex < 0) {
                this.currentSongIndex = this.songs.length - 1;
            }
            this.playSelectedSong(this.currentSongIndex);
        }
    };

    MusicMp3.prototype.playSelectedSong = function (songIndex) {
        this.currentSongIndex = songIndex; // Cập nhật chỉ mục bài hát hiện tại
        this.listMusicRender.render(); // Cập nhật giao diện người dùng
        this.audio.src = this.listMusicRender.songs[this.currentSongIndex].path;
        this.audio.play();
        this.playing = true;
        this.btnPlay.classList.remove("fa-play");
        this.btnPlay.classList.add("fa-pause");
    };

    MusicMp3.prototype.checkTimer = function () {
        const { duration, currentTime } = this.audio;
        this.bar.max = this.audio.duration;
        this.bar.value = this.audio.currentTime;
        this.currentTimeText.textContent = this.formatTimeMusic(currentTime);
        if (!duration) {
            this.durationTimeText.textContent = "0:00";
        } else {
            this.durationTimeText.textContent = this.formatTimeMusic(duration);
        }
    };

    MusicMp3.prototype.formatTimeMusic = function (number) {
        const minutes = parseInt(Math.floor(number / 60));
        const seconds = parseInt(Math.floor(number - minutes * 60));
        return `0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    };

    MusicMp3.prototype.randomMusic = function () {
        const random = this.listMusicRender.sóng
            // this.listMusicRender.songs[
            //     Math.floor(this.listMusicRender.songs.length * Math.random())
            // ];
        // console.log(random.name);
        this.audio.src = random.path;
        this.audio.play();
        this.listMusicRender.render();
        this.playing = true;
        this.btnPlay.classList.remove("fa-play");
        this.btnPlay.classList.add("fa-pause");
    };
});
