!function(e){function t(t){var o=0;e(t).each(function(){e(this).removeAttr("style"),e(this).height()>o&&(o=e(this).height())}),e(t).height(o)}e(document).ready(function(){t(".card .card-box__text"),t(".product .product-about .box"),t(".post .post-more li");let o=document.querySelector(".link-btn"),l=document.querySelector(".link-guide");o.onclick=(()=>{let e=this.querySelector(".show");o.classList.toggle("active");let t=l.classList.contains("hidden");e.innerHTML=1==!t?"Show":"Hide",l.classList.toggle("hidden")}),function(){let e=document.querySelectorAll(".faq-accordion");for(let t=0;t<e.length;t++){let o=e[t].nextElementSibling;e[t].classList.contains("active")&&(o.style.maxHeight=o.scrollHeight+"px"),e[t].addEventListener("click",()=>{e[t].classList.toggle("active"),o.style.maxHeight?o.style.maxHeight=null:o.style.maxHeight=o.scrollHeight+"px"})}}();let c=document.querySelector("#topnav"),n=document.querySelector(".btn-mobileMenu"),i=document.querySelector("body");if(n.addEventListener("click",()=>{c.classList.toggle("open"),n.classList.toggle("active"),i.classList.toggle("hidden")}),e("#owl-example").owlCarousel({items:4,dots:!0,responsive:{320:{items:1},768:{items:2},992:{items:3}}}),e("#owl-carusel-post").owlCarousel({items:4,arrows:!1,responsive:{320:{items:1},500:{items:2},768:{items:2},992:{items:3},1201:{items:4}}}),document.documentElement.clientWidth<768){!function(){let e=document.querySelectorAll(".product-thumb"),t=document.querySelectorAll(".product-title");for(let o=0;o<e.length;o++)for(let l=0;l<t.length;l++)o==l&&e[o].prepend(t[l])}(),function(){let e=document.querySelector(".desc-image");document.querySelector(".flex-footer-contacts").append(e)}()}if(console.log(document.documentElement.clientWidth),document.documentElement.clientWidth<576){!function(){let e=document.querySelector(".resume"),t=document.querySelector(".blog-doctorAbout");e.append(t)}(),e(".flex-img > img").attr("src","../images/Dogbgm.png")}}),window.onload=function(){}}(jQuery);