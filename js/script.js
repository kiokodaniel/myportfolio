



document.addEventListener("DOMContentLoaded", function() {
   
    /*sidebar */
function sideBar() {
            document.querySelector('.sidebar').style.display = 'flex';
        }

        function hideside() {
            document.querySelector('.sidebar').style.display = 'none';
        }

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


