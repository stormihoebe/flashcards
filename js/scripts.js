$(function(){
  var cardArray = [];
  var cardCount = 20;

  //pushing each card into an array and changing the z-index due to the position stacking in reverse order
  $('.card').each(function(){
    $(this).css('z-index',cardCount);
    cardArray.push(this);
    cardCount--;
  });

  //Animation for the card to exit the screen
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
