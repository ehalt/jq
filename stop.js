
$(document).ready(function(){
    $('.stp').click(function(){
        $('.stptxt').slideDown(5000);
    });
    $('.stp0').click(function(){
        $('.stptxt').stop();
    });
});