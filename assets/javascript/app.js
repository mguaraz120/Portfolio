$( document ).ready(function() 
{

$(".menu-toggler").on("click", function(){
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");   
});
$(".about").on("click", function(){
    $(this).toggleClass("open");
    $(".two").toggleClass("open");   
});
   const btnScrollToTop = document.querySelector("#btnScrollToTop");
   btnScrollToTop.addEventListener("click", function(){
       window.scrollTo(0, 0);
       $("html, body").animate({scrollTo:0}, "slow"); 
   })

});