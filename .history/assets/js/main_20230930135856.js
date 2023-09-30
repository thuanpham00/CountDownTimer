// window.addEventListener("load", function () {
//     // const daysText = document.querySelector("#days");
//     // const hoursText = document.querySelector("#hours");
//     // const minutesText = document.querySelector("#minutes");
//     // const secondsText = document.querySelector("#seconds");

//     // function setTimer(
//     //     dayInput,
//     //     monthInput,
//     //     dateInput,
//     //     yearInput,
//     //     hourInput,
//     //     minuteInput,
//     //     gmtInput
//     // ) {
//     //     let currentTime = new Date().getTime();
//     //     const endTime = new Date(
//     //         yearInput,
//     //         getMonthIndex(monthInput),
//     //         dateInput,
//     //         hourInput,
//     //         minuteInput
//     //     ).getTime();

//     //     if (isNaN(endTime) || endTime - currentTime <= 0) return;
//     //     setInterval(changeTimer, 500);
//     //     changeTimer();

//     //     function changeTimer() {
//     //         let days, hours, minutes, seconds;
//     //         const now = new Date();
//     //         let startTime = now.getTime();
//     //         let countDown = parseInt((endTime - startTime) / 1000);
//     //         if (countDown > 0) {
//     //             days = parseInt(countDown / 86400);
//     //             countDown = countDown % 86400;
//     //             hours = parseInt(countDown / 3600);
//     //             countDown = countDown % 3600;
//     //             minutes = parseInt(countDown / 60);
//     //             countDown = countDown % 60;
//     //             seconds = parseInt(countDown);

//     //             daysText.textContent = `${days}`.slice(-2);
//     //             hoursText.textContent = `${hours}`.slice(-2);
//     //             minutesText.textContent = `${minutes}`.slice(-2);
//     //             secondsText.textContent = `${seconds}`.slice(-2);
//     //         }
//     //     }

//     //     function getMonthIndex(monthName) {
//     //         const months = [
//     //             "Jan",
//     //             "Feb",
//     //             "Mar",
//     //             "Apr",
//     //             "May",
//     //             "Jun",
//     //             "Jul",
//     //             "Aug",
//     //             "Sep",
//     //             "Oct",
//     //             "Nov",
//     //             "Dec",
//     //         ];
//     //         return months.indexOf(monthName);
//     //     }
//     // }

//     // const formTimer = document.querySelector(".form-timer");
//     // formTimer.addEventListener("submit", function (e) {
//     //     e.preventDefault();
//     //     const dayInput = this.elements["day"].value;
//     //     const monthInput = this.elements["month"].value;
//     //     const dateInput = parseInt(this.elements["date"].value);
//     //     const yearInput = parseInt(this.elements["year"].value);
//     //     const hourInput = parseInt(this.elements["hour"].value);
//     //     const minuteInput = parseInt(this.elements["minute"].value);
//     //     const gmtInput = this.elements["GMT"].value;
//     //     setTimer(
//     //         dayInput,
//     //         monthInput,
//     //         dateInput,
//     //         yearInput,
//     //         hourInput,
//     //         minuteInput,
//     //         gmtInput
//     //     );
//     // });

//     // xử lý nhạc
//     const btnPlay = document.querySelector(".player-play");
//     const btnNext = document.querySelector(".player-next");
//     const btnPrev = document.querySelector(".player-prev");
//     const playerImg = document.querySelector(".player-image");
//     const bar = document.querySelector(".bar");
//     const currentTimeText = document.querySelector(".player-remaining");
//     const durationTimeText = document.querySelector(".player-duration");
//     const nameMusic = document.querySelector(".player-nameMusic");

//     let playing = true;
//     const song = document.querySelector("#song");
//     btnPlay.addEventListener("click", playMusic);
//     function playMusic(e) {
//         if (playing) {
//             // khi nhạc đang phát thì đổi thành false (tắt nhạc)
//             playing = false;
//             btnPlay.classList.remove("fa-play");
//             btnPlay.classList.add("fa-pause");
//             playerImg.classList.add("is-playing");
//             song.play();
//         } else {
//             // khi nhạc đang tắt thì đổi thành true (phát nhạc)
//             playing = true;
//             btnPlay.classList.add("fa-play");
//             btnPlay.classList.remove("fa-pause");
//             playerImg.classList.remove("is-playing");
//             song.pause();
//         }
//     }

//     const listMusicRender = {
//         // array object
//         songs: [
//             {
//                 name: "Lần cuối",
//                 singer: "Ngọt",
//                 path: "./assets/files/lancuoi.mp3",
//                 img: "./assets/img/mthis.mp3",
//             },
//             {
//                 name: "Miên man",
//                 singer: "Minh Huy",
//                 path: "./assets/files/mien-man.mp3",
//                 img: "./assets/img/mthis.mp3",
//             },
//             {
//                 name: "Nếu một ngày chúng ta không còn gặp",
//                 singer: "Dick",
//                 path: "./assets/files/neumotngaychungtakhongcongap.mp3",
//                 img: "./assets/img/mthis.mp3",
//             },
//             {
//                 name: "Tháng 11 có em",
//                 singer: "Chả biết ca sĩ",
//                 path: "./assets/files/thang11coem.mp3",
//                 img: "./assets/img/mthis.mp3",
//             },
//             {
//                 name: "Vết thương",
//                 singer: "Ngọt",
//                 path: "./assets/files/vetthuong.mp3",
//                 img: "./assets/img/mthis.mp3",
//             },
//         ],

//         render: function () {
//             const songsContainer = document.querySelector(".songs-container");
//             songsContainer.innerHTML = "";

//             this.songs.forEach((song, index) => {
//                 const songElement = document.createElement("div");
//                 songElement.classList.add("song");
//                 songElement.innerHTML = `
//                     <h2>${song.name}</h2>
//                     <p>${song.singer}</p>
//                     <img src="${song.img}" alt="${song.name}" />
//                     <audio src="${song.path}" controls></audio>
//                 `;
//                 songsContainer.appendChild(songElement);
//             });
//         },
//     };
//     listMusicRender.render();

//     // let listMusic = [
//     //     "mien-man.mp3",
//     //     "vetthuong.mp3",
//     //     "lancuoi.mp3",
//     //     "neumotngaychungtakhongcongap.mp3",
//     //     "thang11coem.mp3",
//     //     "tinhcoyeuem.mp3",
//     // ];
//     let index = 0;

//     btnNext.addEventListener("click", function () {
//         playing = true;
//         index++;
//         if (index > listMusicRender.songs.length - 1) {
//             index = 0;
//         }
//         song.setAttribute("src", listMusicRender.songs[index].path);
//         song.play();
//     });

//     btnPrev.addEventListener("click", function () {
//         playing = true;
//         index--;
//         if (index < 0) {
//             index = listMusicRender.songs.length - 1;
//         }
//         song.setAttribute("src", listMusicRender.songs[index].path);
//         song.play();
//     });

//     // function checkTimer() {
//     //     const { duration, currentTime } = song;
//     //     bar.max = song.duration;
//     //     bar.value = song.currentTime;
//     //     currentTimeText.textContent = formatTimeMusic(currentTime);
//     //     if (!duration) {
//     //         durationTimeText.textContent = "0:00";
//     //     } else {
//     //         durationTimeText.textContent = formatTimeMusic(duration);
//     //     }
//     // }

//     // function formatTimeMusic(number) {
//     //     const minutes = parseInt(Math.floor(number / 60));
//     //     const seconds = parseInt(Math.floor(number - minutes * 60));
//     //     return `0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
//     // }
//     // const timer = setInterval(checkTimer, 1000); // chạy hàm sau mỗi lần 1s để nó reset tăng lên thời gian hiện tại (currentTime)
//     // bar.addEventListener("change", function (e) {
//     //     song.currentTime = bar.value;
//     // });

//     // checkTimer();

//     // const btnPlay = document.querySelector(".player-play");
//     // const btnNext = document.querySelector(".player-next");
//     // const btnPrev = document.querySelector(".player-prev");
//     // const playerImg = document.querySelector(".player-image");
//     // const bar = document.querySelector(".bar");
//     // const currentTimeText = document.querySelector(".player-remaining");
//     // const durationTimeText = document.querySelector(".player-duration");
//     // const nameMusic = document.querySelector(".player-nameMusic");

//     // let playing = false; // Bắt đầu với trạng thái tắt nhạc
//     // const song = document.querySelector("#song");

//     // btnPlay.addEventListener("click", playMusic);

//     // function playMusic(e) {
//     //     if (playing) {
//     //         // Khi nhạc đang phát thì dừng
//     //         playing = false;
//     //         btnPlay.classList.remove("fa-pause");
//     //         btnPlay.classList.add("fa-play");
//     //         playerImg.classList.remove("is-playing");
//     //         song.pause();
//     //     } else {
//     //         // Khi nhạc đang tắt thì bật
//     //         playing = true;
//     //         btnPlay.classList.remove("fa-play");
//     //         btnPlay.classList.add("fa-pause");
//     //         playerImg.classList.add("is-playing");
//     //         song.play();
//     //     }
//     // }

//     // let index = 0;

//     // btnNext.addEventListener("click", function () {
//     //     index++;
//     //     if (index >= listMusicRender.songs.length) {
//     //         index = 0;
//     //     }
//     //     playSelectedSong(index);
//     // });

//     // btnPrev.addEventListener("click", function () {
//     //     index--;
//     //     if (index < 0) {
//     //         index = listMusicRender.songs.length - 1;
//     //     }
//     //     playSelectedSong(index);
//     // });

//     // song.addEventListener("ended", function () {
//     //     // Xử lý khi bài hát kết thúc
//     //     index++;
//     //     if (index >= listMusicRender.songs.length) {
//     //         index = 0;
//     //     }
//     //     playSelectedSong(index);
//     // });

//     // function playSelectedSong(songIndex) {
//     //     const selectedSong = listMusicRender.songs[songIndex];
//     //     song.setAttribute("src", selectedSong.path);
//     //     song.play();
//     //     playing = true;
//     //     btnPlay.classList.remove("fa-play");
//     //     btnPlay.classList.add("fa-pause");
//     //     playerImg.classList.add("is-playing");
//     //     nameMusic.textContent = selectedSong.name;
//     // }

//     // const listMusicRender = {
//     //     songs: [
//     //         {
//     //             name: "Lần cuối",
//     //             singer: "Ngọt",
//     //             path: "./assets/files/lancuoi.mp3",
//     //             img: "./assets/img/mthis.mp3",
//     //         },
//     //         {
//     //             name: "Miên man",
//     //             singer: "Minh Huy",
//     //             path: "./assets/files/mien-man.mp3",
//     //             img: "./assets/img/mthis.mp3",
//     //         },
//     //         {
//     //             name: "Nếu một ngày chúng ta không còn gặp",
//     //             singer: "Dick",
//     //             path: "./assets/files/neumotngaychungtakhongcongap.mp3",
//     //             img: "./assets/img/mthis.mp3",
//     //         },
//     //         {
//     //             name: "Tháng 11 có em",
//     //             singer: "Chả biết ca sĩ",
//     //             path: "./assets/files/thang11coem.mp3",
//     //             img: "./assets/img/mthis.mp3",
//     //         },
//     //         {
//     //             name: "Vết thương",
//     //             singer: "Ngọt",
//     //             path: "./assets/files/vetthuong.mp3",
//     //             img: "./assets/img/mthis.mp3",
//     //         },
//     //     ],

//     //     render: function () {
//     //         const songsContainer = document.querySelector(".songs-container");
//     //         songsContainer.innerHTML = "";

//     //         this.songs.forEach((song, index) => {
//     //             const songElement = document.createElement("div");
//     //             songElement.classList.add("song");
//     //             songElement.innerHTML = `
//     //             <h2>${song.name}</h2>
//     //             <p>${song.singer}</p>
//     //             <img src="${song.img}" alt="${song.name}" />
//     //             <audio src="${song.path}" controls></audio>
//     //         `;
//     //             songsContainer.appendChild(songElement);
//     //         });
//     //     },
//     // };
//     // listMusicRender.render();
// });

const listMusicRender = {
    songs: [
        {
            name: "Lần cuối",
            singer: "Ngọt",
            path: "./assets/files/lancuoi.mp3",
            img: "assets/img/mthis.png",
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
            img: "./assets/img/mthis.mp3",
        },
        {
            name: "Tháng 11 có em",
            singer: "Chả biết ca sĩ",
            path: "./assets/files/thang11coem.mp3",
            img: "./assets/img/mthis.mp3",
        },
        {
            name: "Vết thương",
            singer: "Ngọt",
            path: "./assets/files/vetthuong.mp3",
            img: "./assets/img/mthis.mp3",
        },
    ],

    render: function () {
        const songsContainer = document.querySelector(".songs-container");
        songsContainer.innerHTML = "";

        this.songs.forEach((song, index) => {
            const songElement = document.createElement("div");
            songElement.classList.add("song");
            songElement.innerHTML = `
                <h2>${song.name}</h2>
                <p>${song.singer}</p>
                <img src="${song.img}" alt="${song.name}" />
                <audio src="${song.path}" controls></audio>
            `;
            songsContainer.appendChild(songElement);
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
const nameMusic = document.querySelector(".player-nameMusic");

let playing = false; // Bắt đầu với trạng thái tắt nhạc
let index = 0; // Index của bài hát hiện tại
const songs = listMusicRender.songs; // Sử dụng mảng songs từ listMusicRender

const song = new Audio(); // Tạo một đối tượng Audio mới

btnPlay.addEventListener("click", playMusic);

function playMusic(e) {
    if (playing) {
        // Khi nhạc đang phát thì dừng
        playing = false;
        btnPlay.classList.remove("fa-pause");
        btnPlay.classList.add("fa-play");
        playerImg.classList.remove("is-playing");
        song.pause();
    } else {
        // Khi nhạc đang tắt thì bật
        playing = true;
        btnPlay.classList.remove("fa-play");
        btnPlay.classList.add("fa-pause");
        playerImg.classList.add("is-playing");
        song.src = songs[index].path; // Thiết lập nguồn bài hát từ mảng songs
        song.play();
        nameMusic.textContent = songs[index].name;
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
    nameMusic.textContent = songs[songIndex].name;
}
