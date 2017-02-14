$(function(){
  function slideRight(x){
    $(x).animate({left:'120%'},300).addClass('.reset');
  }
  //Shows definition when clicked
   $(".show-definition").click(function(){
     //show the sibling definition
     $(this).siblings('.definition').fadeIn(function(){
       //goes up in the dom to the parent then shows the panel-footer
       $(this).parent().siblings('.nextcard').slideDown(500);
     });
   });
   //animates card when done
   $('.nextcard').click(function(){
    slideRight($(this).parent());
   });
});
