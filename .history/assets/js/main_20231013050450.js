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
    new TimerDate(); // khởi tạo đối tượng
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
        // this đại diện cho MusicMp3
        this.container = document.querySelector(".songs-container");
        this.currentSongIndex = 0; // Đặt chỉ mục ban đầu thành 0 hoặc chỉ mục của bài hát mặc định
        const self = this; // để lưu trữ tham chiếu đến đối tượng MusicMp3 (this).
        this.listMusicRender = {
            songs: [
                {
                    name: "24h",
                    singer: "Lyly ft Magazine",
                    path: "./assets/files/24h.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Ai mới là kẻ xấu xa",
                    singer: "MCK",
                    path: "./assets/files/ai-moi-la-ke-xau-xa.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Anh chưa thương em đến vậy đâu",
                    singer: "Lady mây",
                    path: "./assets/files/anh-chua-thuong-em-den-vay-dau.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Anh đã ổn hơn",
                    singer: "MCK",
                    path: "./assets/files/anh-da-on-hon.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Anh luôn như vây",
                    singer: "Bray",
                    path: "./assets/files/anh-luon-nhu-vay.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Anh thương em nhất mà",
                    singer: "Lã. x Log x TiB",
                    path: "./assets/files/anh-thuong-em-nhat-ma.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Bạn đời",
                    singer: "Karik",
                    path: "./assets/files/ban-doi.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Chỉ một đêm nữa thôi",
                    singer: "MCK",
                    path: "./assets/files/chi-mot-dem-nua-thoi.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Chuyện đôi ta",
                    singer: "Emcee L (Da LAB) ft Muộii",
                    path: "./assets/files/chuyen-doi-ta.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Cỏ may",
                    singer: "Hào",
                    path: "./assets/files/co-may.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Con kể ba nghe",
                    singer: "Obito",
                    path: "./assets/files/con-ke-ba-nghe.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Dalat-mango",
                    singer: "PC",
                    path: "./assets/files/dalat-mango.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Đầu đường xó chợ",
                    singer: "Obito",
                    path: "./assets/files/dau-duong-xo-cho.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Don't côi",
                    singer: "Ronboogz",
                    path: "./assets/files/Dont-coi.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Giờ thì ai cười",
                    singer: "HieuThuHai",
                    path: "./assets/files/gio-thi-ai-cuoi.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Hai đứa nhóc",
                    singer: "Ronboogz",
                    path: "./assets/files/hai-dua-nhoc.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Khi cơn mơ đang dần phai",
                    singer: "Tez",
                    path: "./assets/files/khi-con-mo-dang-dan-phai.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Làm gì có ai thương em",
                    singer: "Tóc Tiên x Touliver x Rap $onday",
                    path: "./assets/files/lam-gi-co-ai-thuong-em.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Lần cuối",
                    singer: "Ngọt",
                    path: "./assets/files/lan-cuoi.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Lan man",
                    singer: "Ronboogz",
                    path: "./assets/files/lan-man.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Last night",
                    singer: "Hazel",
                    path: "./assets/files/last-night.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Lệ lưu ly",
                    singer: "Vũ Phụng Tiên - DT",
                    path: "./assets/files/le-luu-ly.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Lời không nói",
                    singer: "Ronboogz",
                    path: "./assets/files/loi-khong-noi.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Miên man",
                    singer: "Minh Huy",
                    path: "./assets/files/mien-man.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Mưa cứ rơi",
                    singer: "Wrxdie",
                    path: "./assets/files/mua-cu-roi.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Nếu một ngày chúng ta không còn gặp",
                    singer: "Dick",
                    path: "./assets/files/neu-mot-ngay-chung-ta-khong-con-gap.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Nghe như tình yêu",
                    singer: "MCK remake",
                    path: "./assets/files/nghe-nhu-tinh-yeu-mck.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Quay lại giường đi em",
                    singer: "Hà lê",
                    path: "./assets/files/quay-lai-giuong-di-em.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Rồi một ngày",
                    singer: "Dewie",
                    path: "./assets/files/roi-mot-ngay.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Sau cơn mưa",
                    singer: "Ryder",
                    path: "./assets/files/sau-con-mua.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Sinh nhật mùa thu",
                    singer: "Dewie",
                    path: "./assets/files/sinh-nhat-mua-thu.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Tại vì sao",
                    singer: "MCK",
                    path: "./assets/files/tai-vi-sao.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Tâm ý",
                    singer: "1nG",
                    path: "./assets/files/tam-y.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Tháng 11 có em",
                    singer: "Thanh Hòa",
                    path: "./assets/files/thang-11-co-em.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Tình cờ yêu em",
                    singer: "Kunn Đức Nam",
                    path: "./assets/files/tinh-co-yeu-em.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Tỉnh thức sau giấc ngủ đông",
                    singer: "Bray",
                    path: "./assets/files/tinh-giac-sau-mua-dong.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Trên những đám mây",
                    singer: "Chillies",
                    path: "./assets/files/tren-nhung-dam-may.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Vết thương",
                    singer: "Fishy",
                    path: "./assets/files/vet-thuong.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Vì mẹ anh bắt chia tay",
                    singer: "Karik - Miu lê",
                    path: "./assets/files/vi-me-anh-bat-chia-tay.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Vô điều kiện",
                    singer: "Obito",
                    path: "./assets/files/vo-dieu-kien.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "We go hard",
                    singer: "Rap Việt",
                    path: "./assets/files/we-go-hard.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Welcome to my show",
                    singer: "Bray",
                    path: "./assets/files/welcome-to-my-show.mp3",
                    img: "./assets/img/icon1.png",
                },
                {
                    name: "Xuất phát điểm",
                    singer: "Obito",
                    path: "./assets/files/xuat-phat-diem.mp3",
                    img: "./assets/img/icon2.png",
                },
                {
                    name: "Yêu em dại khờ",
                    singer: "Lou hoàng",
                    path: "./assets/files/yeu-em-dai-kho.mp3",
                    img: "./assets/img/icon3.png",
                },
                {
                    name: "Yêu người có ước mơ",
                    singer: "Bùi Trường Linh",
                    path: "./assets/files/yeu-nguoi-co-uoc-mo.mp3",
                    img: "./assets/img/icon3.png",
                },
                // Thêm nhiều bài hát khác ở đây
            ],

            render: function () {
                const song = this.songs[self.currentSongIndex];
                const htmls = `<div class="song" data-index="${self.currentSongIndex}">
                        <h2 class="nameSong">${song.name}</h2>
                        <p>${song.singer}</p>
                        <img src="${song.img}" alt="${song.name}" class="img imgPlayerBox" />
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

        // dùng arrow-function để gọi hàm;
        // giá trị this nó sẽ trỏ đến MusicMp3
        // còn nếu gọi hàm như bình thường
        // this.btnPlay.addEventListener("click", function() {
        //      this.playMusic(); // thì giá trị this ở đây có thể bị thay đổi và this nó trỏ đến this.btnPlay
        // thay vì nó trỏ đến MusicMp3
        // });

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
        this.nameSong = document.querySelector(".nameSong");

        this.listMusic = document.querySelector(".player-list__wrapper");
        setTimeout(() => this.printListMusic(), 200);
    }
    new MusicMp3(); // khởi tạo đối tượng
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

        const indexMusic = document.querySelectorAll(".itemMusicView");
        [...indexMusic].forEach((item, index) => {
            if (index == this.currentSongIndex) {
                [...indexMusic].forEach((item) => {
                    const nameSong = item.querySelector(".nameSong");
                    const singerSong = item.querySelector(".nameSinger");
                    const imgMusic = item.querySelector(".img.img-2");
                    nameSong.classList.remove("active");
                    singerSong.classList.remove("active");
                    imgMusic.classList.remove("is-playing");
                });
                const nameSong = item.querySelector(".nameSong");
                const singerSong = item.querySelector(".nameSinger");
                const imgMusic = item.querySelector(".img.img-2");
                nameSong.classList.add("active");
                singerSong.classList.add("active");
                imgMusic.classList.add("is-playing");
            }
        });
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
        // random với độ dài mảng ròi làm tròn lên sau đó gán bằng currentSongIndex sau đó đem vào hàm playSelectedSong (phát nhạc)
        const random = Math.floor(
            this.listMusicRender.songs.length * Math.random()
        );
        this.currentSongIndex = random;
        this.playSelectedSong(this.currentSongIndex);
    };

    MusicMp3.prototype.printListMusic = function () {
        const that2 = this;
        this.listMusicRender.songs.forEach((item, index) => {
            const itemMusic = `<div class="song song-row itemMusicView" data-index="${index}">
            <img src="${item.img}" alt="${item.name}" class="img img-2" />
            <div>
                <h2 class="nameSong">${item.name}</h2>
                <p class="nameSinger">${item.singer}</p>
                <audio src="${item.path}" controls id="song" style="display: none"></audio>
            </div>
        </div>
    `;
            this.listMusic.insertAdjacentHTML("beforeend", itemMusic);
        });
        const itemMusicView = document.querySelectorAll(".itemMusicView");
        [...itemMusicView].forEach((item) =>
            item.addEventListener("click", function () {
                [...itemMusicView].forEach((item) => {
                    const nameSong = item.querySelector(".nameSong");
                    const singerSong = item.querySelector(".nameSinger");
                    const imgMusic = item.querySelector(".img.img-2");
                    nameSong.classList.remove("active");
                    singerSong.classList.remove("active");
                    imgMusic.classList.remove("is-playing");
                });
                const pathMusic = item.dataset.index;
                that2.currentSongIndex = pathMusic;
                that2.playSelectedSong(that2.currentSongIndex);
                const nameSong1 = item.querySelector(".nameSong");
                const singerSong1 = item.querySelector(".nameSinger");
                const imgMusic1 = item.querySelector(".img.img-2");
                nameSong1.classList.add("active");
                singerSong1.classList.add("active");
                imgMusic1.classList.add("is-playing");
            })
        );
    };
});

// sử dụng constructor function kèm với prototype
