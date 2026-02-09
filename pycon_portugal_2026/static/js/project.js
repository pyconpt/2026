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
    // Ensure clicking the X icon or any nav link closes the collapse on small screens
    toggler.addEventListener('click', function (e) {
        // default bootstrap toggle should handle this, but keep as fallback
        try {
            var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (!bsCollapse) bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
        } catch (err) {
            // bootstrap not available, ignore
            return;
        }
    });

    // Close the menu when a nav link is clicked (mobile behaviour)
    // But ignore our mobile submenu toggles so the collapse stays open
    document.querySelectorAll('.navbar-collapse .nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            try {
                // If this is the mobile submenu toggle, don't close the collapse
                if (link.classList && link.classList.contains('mobile-dropdown-toggle')) return;
                var bs = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bs && window.innerWidth < 992) bs.hide();
            } catch (e) {}
        });
    });
    function setHeaderHeightVar(){
        var header = document.querySelector('.header');
        if(!header) return;
        var h = header.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', h + 'px');
    }
      window.addEventListener('DOMContentLoaded', setHeaderHeightVar);
      window.addEventListener('resize', setHeaderHeightVar);
});

/* Other */
