(function ($) {

    //Выравнивание блоков по высоте
    function heightBlock(class_block) {
        var max_col_height = 0;
        $(class_block).each(function () {
            $(this).removeAttr('style');
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $(class_block).height(max_col_height);
    };

    $(document).ready(function () {

        //Выравнивание блоков по высоте
        heightBlock('.card .card-box__text');
        heightBlock('.product .product-about .box');
        heightBlock('.post .post-desc');
        heightBlock('.post .post-more li');

        //block hidden
        let btn = document.querySelector(".link-btn");
        let hiddenBlock = document.querySelector(".link-guide");

        btn.onclick = () => {
            let span = this.querySelector(".show");
            let findC = hiddenBlock.classList.contains("hidden");
            !findC == true ? span.innerHTML = "Show" : span.innerHTML = "Hide";
            hiddenBlock.classList.toggle("hidden");
        }


        //accordion
        function accordionBlock() {

            let acc = document.querySelectorAll(".faq-accordion");
            for (let k = 0; k < acc.length; k++) {
                let panel = acc[k].nextElementSibling;
                let findC = acc[k].classList.contains("active");

                if (findC) {
                    panel.style.maxHeight = panel.scrollHeight + "px"
                }

                acc[k].addEventListener("click", () => {

                    acc[k].classList.toggle("active");
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                })
            }
        }
        accordionBlock();

        //menu
        let boxMenu = document.querySelector("#topnav");
        let btnClick = document.querySelector(".btn-mobileMenu");
        let body = document.querySelector("body");

        btnClick.addEventListener("click", () => {
            boxMenu.classList.toggle("open");
            btnClick.classList.toggle("active");
            body.classList.toggle("hidden");
        })


        // slider
        $('#owl-example').owlCarousel({
            items: 4,
            dots: true,
            responsive: {
                320: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        })

        $('#owl-carusel-post').owlCarousel({
            items: 4,
        })
        
        if (document.documentElement.clientWidth < 768) { 
            //перенос заголовка
            function chengeTitle () {
                let productTitle = document.querySelectorAll(".product-thumb");
                let title = document.querySelectorAll(".product-title");
    
                for(let k = 0; k < productTitle.length; k++){
                    for(let i = 0; i < title.length; i++){
                        k == i ? productTitle[k].prepend(title[i]) : false;
                    }
                }
            }
            chengeTitle();
            //перенос картинки футер
            let fotImage = document.querySelector(".desc-image");
            let footerBlock = document.querySelector(".flex-footer-contacts");
            footerBlock.append(fotImage);
        }

        if (document.documentElement.clientWidth < 576) { 
            let resume = document.querySelector(".resume")
            let resumeContent = document.querySelector(".blog-doctorAbout");
            resume.append(resumeContent);
            //change src
            $('.flex-img > img').attr('src', '../images/dogBG-m.png');
        }





    });

    window.onload = function () {};

})(jQuery);