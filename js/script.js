/* =====================================================
   WEDDING INVITATION SCRIPT
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const cover =
    document.getElementById("cover");

const mainContent =
    document.getElementById("main-content");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("music-button");

const rsvpForm =
    document.getElementById("rsvp-form");


/* =====================================================
   MUSIC STATE
===================================================== */

let musicPlaying = false;


/* =====================================================
   UPDATE MUSIC BUTTON
===================================================== */

function updateMusicButton() {

    if (!musicButton) return;

    const icon =
        musicButton.querySelector(".music-icon");

    if (!icon) return;


    if (musicPlaying) {

        icon.textContent = "♫";

        musicButton.classList.add("playing");

    } else {

        icon.textContent = "♪";

        musicButton.classList.remove("playing");

    }

}


/* =====================================================
   OPEN INVITATION
===================================================== */

function openInvitation() {

    console.log(
        "Tombol Buka Undangan diklik."
    );


    /* -------------------------------------
       HIDE COVER
    ------------------------------------- */

    if (cover) {

        cover.classList.add("hide");

    }


    /* -------------------------------------
       SHOW MUSIC BUTTON
    ------------------------------------- */

    if (musicButton) {

        musicButton.classList.add("active");

    }


    /* -------------------------------------
       PLAY MUSIC
    ------------------------------------- */

    if (backgroundMusic) {

        backgroundMusic.volume = 0.5;

        const playPromise =
            backgroundMusic.play();


        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    musicPlaying = true;

                    updateMusicButton();

                    console.log(
                        "✓ Musik berhasil diputar."
                    );

                })

                .catch((error) => {

                    musicPlaying = false;

                    updateMusicButton();

                    console.error(
                        "✕ Musik gagal diputar:",
                        error
                    );

                });

        }

    }


    /* -------------------------------------
       PAGE POSITION
    ------------------------------------- */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   MUSIC BUTTON
===================================================== */

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

                        musicPlaying = true;

                        updateMusicButton();

                    })

                    .catch((error) => {

                        console.error(
                            "Musik tidak dapat diputar:",
                            error
                        );

                    });

            }

        }
    );

}


/* =====================================================
   MUSIC EVENTS
===================================================== */

if (backgroundMusic) {

    backgroundMusic.addEventListener(
        "play",
        function () {

            musicPlaying = true;

            updateMusicButton();

        }
    );


    backgroundMusic.addEventListener(
        "pause",
        function () {

            musicPlaying = false;

            updateMusicButton();

        }
    );


    backgroundMusic.addEventListener(
        "error",
        function () {

            console.error(
                "✕ File musik tidak dapat dimuat."
            );

        }
    );

}


/* =====================================================
   COUNTDOWN
===================================================== */

const weddingDate =
    new Date(
        "2026-11-29T09:00:00+07:00"
    ).getTime();


const countdownTimer =
    setInterval(
        function () {

            const now =
                new Date().getTime();


            const distance =
                weddingDate - now;


            if (distance <= 0) {

                clearInterval(
                    countdownTimer
                );


                const countdown =
                    document.querySelector(
                        ".countdown"
                    );


                if (countdown) {

                    countdown.innerHTML = `

                        <p style="
                            font-family:
                            'Cormorant Garamond',
                            serif;

                            font-size:
                            28px;

                            color:
                            #f5dfe3;
                        ">

                            Hari Bahagia
                            Telah Tiba ♡

                        </p>

                    `;

                }

                return;

            }


            const days =
                Math.floor(
                    distance /
                    (
                        1000 *
                        60 *
                        60 *
                        24
                    )
                );


            const hours =
                Math.floor(
                    (
                        distance %
                        (
                            1000 *
                            60 *
                            60 *
                            24
                        )
                    )
                    /
                    (
                        1000 *
                        60 *
                        60
                    )
                );


            const minutes =
                Math.floor(
                    (
                        distance %
                        (
                            1000 *
                            60 *
                            60
                        )
                    )
                    /
                    (
                        1000 *
                        60
                    )
                );


            const seconds =
                Math.floor(
                    (
                        distance %
                        (
                            1000 *
                            60
                        )
                    )
                    /
                    1000
                );


            const daysElement =
                document.getElementById("days");

            const hoursElement =
                document.getElementById("hours");

            const minutesElement =
                document.getElementById("minutes");

            const secondsElement =
                document.getElementById("seconds");


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

        },

        1000
    );


/* =====================================================
   SCROLL REVEAL
===================================================== */

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


document
    .querySelectorAll(".section-reveal")
    .forEach(
        function (section) {

            observer.observe(section);

        }
    );


/* =====================================================
   RSVP
===================================================== */

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

                name:
                    name,

                attendance:
                    attendance,

                message:
                    message

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


/* =====================================================
   GOOGLE MAPS
===================================================== */

const mapsButton =
    document.getElementById(
        "maps-button"
    );


if (mapsButton) {

    mapsButton.addEventListener(
        "click",
        function (event) {

            const mapsLink =
                mapsButton.getAttribute(
                    "href"
                );


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


/* =====================================================
   READY
===================================================== */

console.log(
    "✓ Wedding invitation script berhasil dimuat."
);


console.log(
    "✓ Musik:",
    backgroundMusic
        ? "element ditemukan"
        : "element TIDAK ditemukan"
);