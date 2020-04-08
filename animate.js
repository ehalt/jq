

$(document).ready(function(){
    $('.animbtn').click(function(){
        $('.animdiv').animate({
            
            left:'200px',
            width: '+=200px', //for increase 
            height: '+=200px', // for increase
            opacity: '0.5'

        });
    });
});