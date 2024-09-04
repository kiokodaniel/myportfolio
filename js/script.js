// Example of a simple JavaScript function to handle form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert("Please fill out all fields.");
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    hamburger.addEventListener("click", function() {
        sidebar.classList.add("open");
    });

    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("open");
    });

    // Close sidebar if clicking outside of it
    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target) && sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
        }
    });

    // Carousel functionality
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const carouselInner = document.querySelector(".carousel-inner");
    let index = 0;

    function showSlide(newIndex) {
        const slides = document.querySelectorAll(".carousel-item");
        const totalSlides = slides.length;

        if (newIndex >= totalSlides) {
            index = 0;
        } else if (newIndex < 0) {
            index = totalSlides - 1;
        } else {
            index = newIndex;
        }

        carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", function() {
        showSlide(index - 1);
    });

    nextBtn.addEventListener("click", function() {
        showSlide(index + 1);
    });

    // Optional: Automatically change slides every 5 seconds
    setInterval(function() {
        showSlide(index + 1);
    }, 5000);
});




/*
const popup = document.getElementById('confirm-popup');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');

let isLeaving = false;

window.addEventListener('beforeunload', function (event) {
    if (isLeaving) {
        return;
    }
    event.preventDefault();
    popup.style.display = 'flex'; // Show the popup
    event.returnValue = ''; // For standard compliance
});

confirmYes.addEventListener('click', function () {
    isLeaving = true;
    window.location.href = window.location.href; // Proceed with leaving
});

confirmNo.addEventListener('click', function () {
    popup.style.display = 'none'; // Hide the popup
    window.removeEventListener('beforeunload', function () {});
});
*/