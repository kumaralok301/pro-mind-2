/*==================================================
PRO-MIND
Main JavaScript
Version 2.0
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=====================================
      Sticky Header
    =====================================*/

    const header = document.querySelector(".header");

    function stickyHeader() {

        if (window.scrollY > 80) {

            header.style.background = "#061324";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

        } else {

            header.style.background = "rgba(8,27,51,.95)";
            header.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", stickyHeader);

    stickyHeader();

    /*=====================================
      Reveal Animation
    =====================================*/

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(function (el) {

        observer.observe(el);

    });

    /*=====================================
      Mobile Navigation
    =====================================*/

    const menuButton = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".nav-menu");

    if (menuButton && menu) {

        menuButton.addEventListener("click", function () {

            menu.classList.toggle("mobile-open");

            menuButton.classList.toggle("open");

        });

    }

    /*=====================================
      Smooth Scroll
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });

    /*=====================================
      Counter Animation
    =====================================*/

    const counters = document.querySelectorAll(".stat-box h2");

    function runCounter(counter) {

        const text = counter.innerText;

        const number = parseInt(text.replace(/\D/g, ""));

        if (isNaN(number)) return;

        let current = 0;

        const increment = Math.ceil(number / 80);

        const timer = setInterval(function () {

            current += increment;

            if (current >= number) {

                counter.innerText = text;

                clearInterval(timer);

            } else {

                if (text.includes("%")) {

                    counter.innerText = current + "%";

                }

                else if (text.includes("+")) {

                    counter.innerText = current + "+";

                }

                else {

                    counter.innerText = current;

                }

            }

        }, 20);

    }

    const counterObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    runCounter(entry.target);

                    counterObserver.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.6

        }

    );

    counters.forEach(function (counter) {

        counterObserver.observe(counter);

    });

    /*=====================================
      Active Navigation Highlight
    =====================================*/

    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll(".nav-menu a").forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

    /*=====================================
      Button Hover Effect
    =====================================*/

    document.querySelectorAll(".btn-primary").forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            button.style.transform = "translateY(-3px)";

        });

        button.addEventListener("mouseleave", function () {

            button.style.transform = "translateY(0px)";

        });

    });

    /*=====================================
      Footer Year
    =====================================*/

    const year = new Date().getFullYear();

    document.querySelectorAll(".copyright").forEach(function (item) {

        item.innerHTML =
            "© " +
            year +
            " PRO-MIND Strategic Growth & Business Advisory. All Rights Reserved.";

    });

});
