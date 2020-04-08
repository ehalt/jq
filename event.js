// click event

$(document).ready(function(){
    $('p').click(function(){
        $(this).hide();
    });
});

// double click event

$(document).ready(function(){
    $('.dblclick').dblclick(function(){
        $(this).hide();
    });
});

// mouseenter with alert

$(document).ready(function(){
    $('.mewa').mouseenter(function(){
        alert('hi');
    });
});


// mouse leave event

$(document).ready(function(){
    $('.mleave').mouseleave(function(){
        alert('Assalamu alaikum');
    });
});

// mouse hover [ hi and bye]


$(document).ready(function(){
    $('.mousehover').hover(function(){
        alert('hola');
    },
    function(){
        alert('Bye')
    });
});

