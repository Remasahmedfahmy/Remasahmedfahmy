// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get all containers
    const homeContaner = document.querySelector('.home-contaner');
    const aboutContaner = document.querySelector('.about-contaner');
    const servicesContaner = document.querySelector('.services-contaner');
    const experienceContaner = document.querySelector('.experience-contaner');
    const contactContaner = document.querySelector('.contact-contaner');

    // Add transition for smooth effect
    [homeContaner, aboutContaner, servicesContaner, experienceContaner, contactContaner].forEach(cont => {
        if (cont) cont.style.transition = 'opacity 0.5s';
    });

    // Hide all sections
    function hideAll() {
        [homeContaner, aboutContaner, servicesContaner, experienceContaner, contactContaner].forEach(cont => {
            if (cont) cont.style.opacity = '0';
        });
        setTimeout(() => {
            [homeContaner, aboutContaner, servicesContaner, experienceContaner, contactContaner].forEach(cont => {
                if (cont) cont.style.display = 'none';
            });
        }, 500);
    }

    // Helper to show section
    function showSection(section) {
        hideAll();
        setTimeout(() => {
            section.style.display = 'block';
            setTimeout(() => {
                section.style.opacity = '1';
            }, 10);
        }, 500);
    }

    // Navigation logic
    function navHandler(selector, section) {
        const el = document.querySelector(selector);
        if (el && section) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                showSection(section);
            });
        }
    }

    navHandler('#homeBtn', homeContaner);
    navHandler('#aboutBtn', aboutContaner);
    navHandler('.services', servicesContaner);
    navHandler('.experience', experienceContaner);
    navHandler('.contact', contactContaner);

    // // Contact Me button inside Home section
    // const contactMeBtn = document.querySelector('.home-box button');
    // if (contactMeBtn) {
    //     contactMeBtn.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         showSection(contactContaner);
    //     });
    // }

    // Optional: set Home as default visible
    [aboutContaner, servicesContaner, experienceContaner, contactContaner].forEach(cont => {
        if (cont) {
            cont.style.display = 'none';
            cont.style.opacity = '0';
        }
    });
    if (homeContaner) {
        homeContaner.style.display = 'block';
        homeContaner.style.opacity = '1';
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".color-box");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      const bg = window.getComputedStyle(box).backgroundImage;
      document.body.style.backgroundImage = bg;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.transition = "background 0.5s ease-in-out";
    });
  });
});
