
//menu
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.overlay-content .nav-bar-link').forEach(function(link) {
        link.addEventListener('click', function() {
            toggleClassActive(); 
        });
    });
});

function toggleClassActive() {
    $('.menu-trigger').toggleClass('active');
    $('.overlay-blur').toggleClass('active');

    var navBar = document.getElementById("nav-bar");

    if (navBar.style.display === "none" || navBar.style.display === "") {
        navBar.style.display = "block";
        navBar.style.opacity = "1";
        navBar.style.transition = "2s ease-in";
    } else {
        navBar.style.display = "none";
        navBar.style.opacity = "0";
        navBar.style.transition = "2s ease-in";

    }
}
