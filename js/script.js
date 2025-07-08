/* JavaScript to Page loader */
window.onload = function () {
    // Set a timeout to hide the loader after 1 second
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 1000);
};


/* JavaScript to Sticky Navbar on Scroll */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });
});


/* JavaScript to Smooth Scrolling */
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


/* JavaScript to Dark Mode Toggle */
function ThemeToggle() {
    const themeToggle = document.getElementById('theme');
    const setTheme = (isDark) => {
        if (isDark) {
            document.body.style.backgroundColor = 'var(--bg-light)';
            document.body.style.color = 'var(--text-light)';
        } else {
            document.body.style.backgroundColor = 'var(--bg-dark)';
            document.body.style.color = 'var(--text-dark)';
        }
    };
    setTheme(true);
    themeToggle.addEventListener('change', (event) => {
        setTheme(event.target.checked);
    });
}
// Call the function to initialize the theme toggle when the DOM is loaded
document.addEventListener('DOMContentLoaded', ThemeToggle);


/* JavaScript to Calculate Age */
function calculateAge(dobString) {
    const dob = new Date(dobString);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('age').textContent = calculateAge('2002-03-12');
});



/* JavaScript to Load the like count from localStorage or default to 500 */
function LikeCount() {
    let likeCount = localStorage.getItem('likeCount') || 500;
    document.getElementById('like-count').textContent = likeCount;
    document.querySelector('.trigger').addEventListener('click', function() {
        likeCount++;
        localStorage.setItem('likeCount', likeCount); // Save the new like count to localStorage
        document.getElementById('like-count').textContent = likeCount;
    });
}
// Call the function to initialize the LikeCount when the DOM is loaded
document.addEventListener('DOMContentLoaded', LikeCount);