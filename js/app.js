jq2 = jQuery.noConflict();
jq2(function ($) {
    // Code using $ as usual goes here; the actual jQuery object is jq2
    // NAVI AUF UND ZU

    // Get the nav toggle element
    var navToggle = document.querySelector('.nav_toggle');

    function toggle_menu() {
        document.body.classList.toggle('menu_open');
        document.documentElement.classList.toggle('menu_open'); // 'html' element
    }

    // Add click event listener
    if (navToggle) {
        navToggle.addEventListener('click', function (event) {
            event.preventDefault(); // Equivalent to returning false in jQuery
            toggle_menu();
        });
    }


    // Scroll to the Elements
    document.querySelectorAll('.on_site_nav a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                // Smooth scroll to the target
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });

                // Call the toggle_menu function
                toggle_menu();
            }
        });
    });


    // Utility function to toggle text content between two options
    function toggleText(element, text1, text2) {
        element.textContent = element.textContent.trim() === text1 ? text2 : text1;
    }

    // Add click event to all elements with class "imprint_toggle"
    document.querySelectorAll('.imprint_toggle').forEach(function (toggleBtn) {
        toggleBtn.addEventListener('click', function (event) {
            event.preventDefault();

            document.body.classList.toggle('imprint_open');
            toggleText(this, 'Impressum', 'Schließen');
        });
    });


});

   

