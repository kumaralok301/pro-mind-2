/* =========================
   PRO-MIND Website JavaScript
   ========================= */


/* Mobile Menu Toggle */

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav ul");

    if(menuBtn && nav){

        menuBtn.addEventListener("click", function(){

            nav.classList.toggle("active");

        });

    }


    /* Smooth Scrolling */

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });



    /* Scroll Animation */

    const animatedElements =
        document.querySelectorAll(
            ".card, .service-box, .industry-item, .about-content, .founder"
        );


    function revealOnScroll(){

        animatedElements.forEach(element=>{

            const position =
            element.getBoundingClientRect().top;

            const screenHeight =
            window.innerHeight;


            if(position < screenHeight - 100){

                element.classList.add("show");

            }

        });

    }


    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();



    /* Contact Form Validation */

    const form =
    document.querySelector(".contact-form");


    if(form){

        form.addEventListener(
        "submit",
        function(e){

            e.preventDefault();


            const name =
            document.querySelector("#name").value;

            const email =
            document.querySelector("#email").value;

            const message =
            document.querySelector("#message").value;



            if(
                name === "" ||
                email === "" ||
                message === ""
            ){

                alert(
                "Please fill all required fields."
                );

                return;

            }


            alert(
            "Thank you for contacting PRO-MIND. We will connect with you soon."
            );


            form.reset();


        });

    }



    /* Current Year Footer */

    const year =
    document.querySelector("#year");


    if(year){

        year.innerHTML =
        new Date().getFullYear();

    }


});
