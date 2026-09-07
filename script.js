document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MOBILE MENU
    // =========================

    const menuButton = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            mobileMenu.classList.toggle("open");

            const isOpen = mobileMenu.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            // Change hamburger to X
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        // Close menu after clicking a link
        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent = "☰";
            });

        });

        // Close menu if user taps outside it
        document.addEventListener("click", (event) => {

            if (
                mobileMenu.classList.contains("open") &&
                !mobileMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                mobileMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent = "☰";
            }

        });
    }


    // =========================
    // WHATSAPP QUOTE FORM
    // =========================

    const quoteForm = document.querySelector("[data-whatsapp-form]");

    if (quoteForm) {

        quoteForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                quoteForm
                    .querySelector('[name="name"]')
                    ?.value
                    .trim();

            const phone =
                quoteForm
                    .querySelector('[name="phone"]')
                    ?.value
                    .trim();

            const message =
                quoteForm
                    .querySelector('[name="message"]')
                    ?.value
                    .trim();

            if (!name || !phone || !message) {
                alert("Please complete all the fields.");
                return;
            }

            const whatsappMessage =
                `Hi Willie, my name is ${name}. ` +
                `My phone number is ${phone}. ` +
                `I would like a quote for: ${message}`;

            const whatsappURL =
                `https://wa.me/27717021048?text=${encodeURIComponent(
                    whatsappMessage
                )}`;

            window.open(whatsappURL, "_blank");
        });
    }


    // =========================
    // CURRENT YEAR
    // =========================

    const yearElements =
        document.querySelectorAll("[data-year]");

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(element => {
        element.textContent = currentYear;
    });

});
