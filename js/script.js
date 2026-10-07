/* =========================================
   ELEMENTS
========================================= */

const cover = document.getElementById("cover");
const mainContent = document.getElementById("main-content");

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("music-button");


/* =========================================
   OPEN INVITATION
========================================= */

function openInvitation() {

    // Sembunyikan cover dengan animasi
    cover.classList.add("hide");

    // Tampilkan tombol musik
    musicButton.classList.add("active");

    // Mulai musik setelah user melakukan klik
    if (backgroundMusic) {

        backgroundMusic.volume = 0.35;

        backgroundMusic.play()
            .then(() => {

                musicButton.classList.add("playing");

            })
            .catch((error) => {

                console.log(
                    "Musik tidak dapat diputar otomatis:",
                    error
                );

            });

    }

    // Scroll kembali ke atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Aktifkan reveal animation
    setTimeout(() => {

        document
            .querySelectorAll(".section-reveal")
            .forEach(section => {

                observer.observe(section);

            });

    }, 800);

}


/* =========================================
   MUSIC CONTROL
========================================= */

let musicPlaying = false;


if (backgroundMusic) {

    backgroundMusic.addEventListener("play", () => {

        musicPlaying = true;

        musicButton.classList.add("playing");

        musicButton.querySelector(".music-icon").textContent = "♫";

    });


    backgroundMusic.addEventListener("pause", () => {

        musicPlaying = false;

        musicButton.classList.remove("playing");

        musicButton.querySelector(".music-icon").textContent = "♪";

    });

}


if (musicButton) {

    musicButton.addEventListener("click", () => {

        if (!backgroundMusic) return;


        if (musicPlaying) {

            backgroundMusic.pause();

        } else {

            backgroundMusic.play()
                .catch(error => {

                    console.log(
                        "Musik gagal diputar:",
                        error
                    );

                });

        }

    });

}


/* =========================================
   COUNTDOWN
========================================= */

// 29 November 2026, 09.00 WIB

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


        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
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

    }, 1000);


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


/* =========================================
   INITIAL REVEAL
========================================= */

document
    .querySelectorAll(".section-reveal")
    .forEach(section => {

        observer.observe(section);

    });


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
                document.getElementById("name").value.trim();


            const attendance =
                document.getElementById("attendance").value;


            const message =
                document.getElementById("message").value.trim();


            console.log({

                name,
                attendance,
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


/* =========================================
   PREVENT EMPTY MAP BUTTON
========================================= */

const mapsButton =
    document.getElementById("maps-button");


if (mapsButton) {

    mapsButton.addEventListener(
        "click",
        function (event) {

            if (
                !mapsButton.getAttribute("href") ||
                mapsButton.getAttribute("href") === "#"
            ) {

                event.preventDefault();

                alert(
                    "Link Google Maps akan ditambahkan."
                );

            }

        }
    );

}