/* =========================================
   ELEMENTS
========================================= */

const cover = document.getElementById("cover");
const mainContent = document.getElementById("main-content");

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("music-button");


/* =========================================
   MUSIC STATE
========================================= */

let musicPlaying = false;


/* =========================================
   OPEN INVITATION
========================================= */

function openInvitation() {

    console.log("Tombol Buka Undangan diklik.");


    /* -----------------------------------------
       CLOSE COVER
    ----------------------------------------- */

    if (cover) {

        cover.classList.add("hide");

    }


    /* -----------------------------------------
       SHOW MUSIC BUTTON
    ----------------------------------------- */

    if (musicButton) {

        musicButton.classList.add("active");

    }


    /* -----------------------------------------
       PLAY MUSIC
    ----------------------------------------- */

    if (backgroundMusic) {

        backgroundMusic.volume = 0.5;

        const playPromise = backgroundMusic.play();


        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    console.log(
                        "✓ Musik berhasil diputar."
                    );

                    musicPlaying = true;

                    updateMusicButton();

                })
                .catch((error) => {

                    console.error(
                        "✕ Musik gagal diputar:",
                        error
                    );

                    console.log(
                        "Pastikan file berada di: assets/music/wedding-song.mp3"
                    );

                });

        }

    } else {

        console.error(
            "✕ Elemen backgroundMusic tidak ditemukan."
        );

    }


    /* -----------------------------------------
       SCROLL TO TOP
    ----------------------------------------- */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   MUSIC PLAY / PAUSE
========================================= */

if (backgroundMusic) {

    /* -----------------------------------------
       MUSIC PLAY EVENT
    ----------------------------------------- */

    backgroundMusic.addEventListener(
        "play",
        function () {

            musicPlaying = true;

            updateMusicButton();

        }
    );


    /* -----------------------------------------
       MUSIC PAUSE EVENT
    ----------------------------------------- */

    backgroundMusic.addEventListener(
        "pause",
        function () {

            musicPlaying = false;

            updateMusicButton();

        }
    );

}


/* =========================================
   UPDATE MUSIC BUTTON
========================================= */

function updateMusicButton() {

    if (!musicButton) return;


    const musicIcon =
        musicButton.querySelector(".music-icon");


    if (!musicIcon) return;


    if (musicPlaying) {

        musicIcon.textContent = "♫";

        musicButton.classList.add("playing");

    } else {

        musicIcon.textContent = "♪";

        musicButton.classList.remove("playing");

    }

}


/* =========================================
   MUSIC BUTTON CLICK
========================================= */

if (musicButton) {

    musicButton.addEventListener(
        "click",
        function () {

            if (!backgroundMusic) {

                console.error(
                    "Elemen musik tidak ditemukan."
                );

                return;

            }


            if (musicPlaying) {

                backgroundMusic.pause();

            } else {

                backgroundMusic.volume = 0.5;

                backgroundMusic.play()
                    .then(() => {

                        console.log(
                            "✓ Musik dimainkan kembali."
                        );

                    })
                    .catch((error) => {

                        console.error(
                            "✕ Musik gagal dimainkan:",
                            error
                        );

                    });

            }

        }
    );

}


/* =========================================
   COUNTDOWN
========================================= */

// 29 November 2026
// 09.00 WIB

const weddingDate =
    new Date(
        "2026-11-29T09:00:00+07:00"
    ).getTime();


const countdownTimer =
    setInterval(function () {

        const now =
            new Date().getTime();


        const distance =
            weddingDate - now;


        /* -----------------------------------------
           WEDDING DAY
        ----------------------------------------- */

        if (distance <= 0) {

            clearInterval(countdownTimer);


            const countdown =
                document.querySelector(".countdown");


            if (countdown) {

                countdown.innerHTML = `
                    <p style="
                        font-family: 'Cormorant Garamond', serif;
                        font-size: 32px;
                        color: #f5dfe3;
                    ">
                        Hari Bahagia Telah Tiba ♡
                    </p>
                `;

            }


            return;

        }


        /* -----------------------------------------
           CALCULATE TIME
        ----------------------------------------- */

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (
                    distance %
                    (1000 * 60)
                ) /
                1000
            );


        /* -----------------------------------------
           ELEMENTS
        ----------------------------------------- */

        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");


        /* -----------------------------------------
           UPDATE
        ----------------------------------------- */

        if (daysElement) {

            daysElement.textContent =
                String(days).padStart(2, "0");

        }


        if (hoursElement) {

            hoursElement.textContent =
                String(hours).padStart(2, "0");

        }


        if (minutesElement) {

            minutesElement.textContent =
                String(minutes).padStart(2, "0");

        }


        if (secondsElement) {

            secondsElement.textContent =
                String(seconds).padStart(2, "0");

        }

    }, 1000);


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


/* =========================================
   INITIAL SCROLL REVEAL
========================================= */

document
    .querySelectorAll(".section-reveal")
    .forEach(
        function (section) {

            observer.observe(section);

        }
    );


/* =========================================
   RSVP
========================================= */

const rsvpForm =
    document.getElementById("rsvp-form");


if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const attendance =
                document
                    .getElementById("attendance")
                    .value;


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            console.log({

                name: name,

                attendance: attendance,

                message: message

            });


            alert(
                "Terima kasih, " +
                name +
                ". Konfirmasi Anda sudah diterima."
            );


            rsvpForm.reset();

        }
    );

}


/* =========================================
   GOOGLE MAPS BUTTON
========================================= */

const mapsButton =
    document.getElementById("maps-button");


if (mapsButton) {

    mapsButton.addEventListener(
        "click",
        function (event) {

            const mapsLink =
                mapsButton.getAttribute("href");


            if (
                !mapsLink ||
                mapsLink === "#"
            ) {

                event.preventDefault();


                alert(
                    "Link Google Maps akan ditambahkan."
                );

            }

        }
    );

}


/* =========================================
   PAGE READY
========================================= */

console.log(
    "✓ Wedding invitation script berhasil dimuat."
);

console.log(
    "✓ Musik:",
    backgroundMusic
        ? "element ditemukan"
        : "element TIDAK ditemukan"
);