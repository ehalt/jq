// fade in example


$(document).ready(function(){

    $('.fs').click(function(){
        $('.box1').fadeIn();
        $('.box2').fadeIn('slow');
        $('.box3').fadeIn(2000);
    });
    $('.fh').click(function(){
        $('.box1').fadeOut();
        $('.box2').fadeOut('slow');
        $('.box3').fadeOut(2000);
    });

});