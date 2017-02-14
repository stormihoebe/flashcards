$(function(){
  function slideRight(x){
    console.log(x);
    $(x).animate({left:'120%'},300);
  }
   $(".show-definition").click(function(){
     $(this).siblings('.definition').fadeIn(function(){
       $('.nextcard').slideDown(500);
     });
   });
   $('.nextcard').click(function(){
    slideRight($(this).parent());
    // console.log($(this).parent());

   });
});
