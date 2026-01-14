/* Header */
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const icon1 = toggler.querySelector(".icon-1");
    const icon2 = toggler.querySelector(".icon-2");
    const navbarCollapse = document.querySelector("#navbarToggler");

    navbarCollapse.addEventListener("shown.bs.collapse", function () {
        icon1.style.display = "none";
        icon2.style.display = "inline";
    });

    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        icon1.style.display = "inline";
        icon2.style.display = "none";
    });
});

/* Other */
