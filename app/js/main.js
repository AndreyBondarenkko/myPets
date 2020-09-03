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
        btn.onclick = () => {
            let hiddenBlock = document.querySelector(".link-guide");
            hiddenBlock.classList.toggle("hidden");
        }

        //accordion
        function accordionBlock() {
            var acc = document.getElementsByClassName("faq-accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {

                    this.classList.toggle("active");

                    let panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }

        }
        accordionBlock();

        //menu
        let boxMenu = document.querySelector("#topnav");
        let btnClick = document.querySelector(".btn-mobileMenu");

        btnClick.addEventListener("click", ()=>{
            boxMenu.classList.toggle("open");
            btnClick.classList.toggle("active");
        })



    });

    window.onload = function () {};

})(jQuery);