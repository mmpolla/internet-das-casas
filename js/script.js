/* Wait for the DOM to be fully loaded */
document.addEventListener('DOMContentLoaded', () => {

    /* Function to Update Current Year */
    function updateCopyrightYear() {
        const yearSpan = document.getElementById('currentYear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    /* Function to Handle Header Scroll Effect */
    function handleHeaderScroll() {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY >= 50) { // Add shadow after scrolling 50px
                header.classList.add('scroll');
            } else {
                header.classList.remove('scroll');
            }
        }
    }

    /* Function to Toggle Mobile Menu */
    function setupMobileMenu() {
        const navMenu = document.querySelector('nav .menu');
        const toggleButton = document.querySelector('nav .toggle');
        const navLinks = document.querySelectorAll('nav .menu ul li a');

        if (toggleButton && navMenu) {
            toggleButton.addEventListener('click', () => {
                navMenu.classList.toggle('show');
                // Toggle icon class (assuming you have CSS for icon-menu and icon-close)
                toggleButton.classList.toggle('icon-menu');
                toggleButton.classList.toggle('icon-close');
            });

            // Close mobile menu when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('show')) {
                        navMenu.classList.remove('show');
                        toggleButton.classList.remove('icon-close');
                        toggleButton.classList.add('icon-menu');
                    }
                });
            });
        }
    }

    /* Function to Initialize Scroll Reveal */
    function initScrollReveal() {
        const sr = ScrollReveal({
            origin: 'top',      // Animation starts from the top
            distance: '30px',   // Distance the element moves
            duration: 700,      // Animation duration in ms
            delay: 200,         // Delay before animation starts
            easing: 'ease-out', // Animation easing function
            reset: false         // Animations only occur once
        });

        // Reveal general elements
        sr.reveal(`
            /* #hero h1, #hero p, #hero .button, */ /* Removed hero elements */
            #about h2, #about p,
            #services h2,
            #portfolio h2, #portfolio p,
            #testimonials h2,
            #blog h2, #blog p, #blog .button,
            #contact h2, #contact p, #contact .contact-options
        `, {
            interval: 150 // Stagger effect for multiple elements
        });

        // Reveal items in grids with a bottom origin and different interval
        sr.reveal(`
            .service-item,
            .portfolio-item, /* Assuming you add items here */
            .testimonial-item, /* Assuming you add items here */
            .blog-post-preview /* Assuming you add items here */
        `, {
            origin: 'bottom',
            interval: 100
        });

         // You can add more specific reveals if needed
         // sr.reveal('.some-specific-element', { origin: 'left' });
    }

    /* Function to Highlight Active Nav Link on Scroll */
    function highlightActiveLink() {
        const sections = document.querySelectorAll('main section[id]');
        const scrollY = window.pageYOffset;
        const header = document.getElementById('header');
        // Ensure header exists before getting offsetHeight, provide fallback if needed
        const headerHeight = header ? header.offsetHeight : 70; // Default fallback height
        const offset = headerHeight + 50; // Offset to trigger highlight slightly before section top

        let currentActiveFound = false;

        // Remove active class from all links first
        document.querySelectorAll('.menu ul li a.active').forEach(link => link.classList.remove('active'));

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - offset;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.menu ul li a[href*=${sectionId}]`);

            if (correspondingLink) {
                if (
                    scrollY >= sectionTop &&
                    scrollY < sectionTop + sectionHeight
                ) {
                    correspondingLink.classList.add('active');
                    currentActiveFound = true; // Mark that we found the active section
                } else {
                     // Ensure it's removed if condition is not met (redundant due to initial removal, but safe)
                    correspondingLink.classList.remove('active');
                }
            }
        });

        // If scrolled to the very top or no section is active yet, activate 'Início'
        const heroLink = document.querySelector('.menu ul li a[href*=\'#hero\']');
        // Activate Hero if we are above the first section's trigger point OR if no other section was activated
        // (This covers the top of the page and potentially areas between sections if offsets are large)
         if (heroLink && scrollY < sections[0].offsetTop - offset) {
             heroLink.classList.add('active');
         } else if (heroLink && !currentActiveFound && scrollY < sections[0].offsetTop - offset + sections[0].offsetHeight) {
             // Fallback if near the top but technically past the first section's negative offset
              // Ensure others are not active
             document.querySelectorAll('.menu ul li a.active').forEach(link => { if(link !== heroLink) link.classList.remove('active'); });
             heroLink.classList.add('active');
         }

         // Special case for bottom: if scrolled past the last section, keep last link active
         const lastSection = sections[sections.length - 1];
         const lastLink = document.querySelector(`.menu ul li a[href*=${lastSection.getAttribute('id')}]`);
         if (lastLink && scrollY >= lastSection.offsetTop - offset + lastSection.offsetHeight - window.innerHeight) {
            // If close to or past the bottom
             if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) { // Check if near bottom of page
                document.querySelectorAll('.menu ul li a.active').forEach(link => link.classList.remove('active'));
                lastLink.classList.add('active');
             }
         }

    }

    // --- Initialize Functions --- //

    updateCopyrightYear();
    setupMobileMenu();
    initScrollReveal();

    // Add scroll listener for header effect AND active link highlighting
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        highlightActiveLink();
    });

    // Initial check in case the page loads already scrolled or on a specific section
    handleHeaderScroll();
    highlightActiveLink();

}); 