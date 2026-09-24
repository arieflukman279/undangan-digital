/* =========================================
   OPEN INVITATION
========================================= */

function openInvitation() {

    const cover = document.getElementById("cover");
    const mainContent = document.getElementById("main-content");

    cover.style.display = "none";

    mainContent.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   COUNTDOWN
========================================= */

// 29 November 2026, 09.00 WIB
const weddingDate = new Date(
    "2026-11-29T09:00:00+07:00"
).getTime();


const countdownTimer = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    if (distance <= 0) {

        clearInterval(countdownTimer);

        document.querySelector(".countdown").innerHTML =
            `
            <p style="font-family: 'Cormorant Garamond', serif;
                      font-size: 28px;">
                Hari Bahagia Telah Tiba
            </p>
            `;

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");


}, 1000);


/* =========================================
   RSVP
========================================= */

const rsvpForm = document.getElementById("rsvp-form");


rsvpForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const attendance =
        document.getElementById("attendance").value;


    const message =
        document.getElementById("message").value;


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

});