$(document).ready(function() {
    $("#nav a").hover(function() {
        $(this).toggleClass("navbar_chang");
    });
});

$(document).ready(function() {
    $("i").mouseenter(function() {
        $(this).css("color","#db4865");
    });
    $("i").mouseleave(function() {
        $(this).css("color","#535353");
    });
});

smoothScroll.init();


$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 750) {
        $('.bottomMenu').fadeIn().css("margin-top","0px");
    } else {
        $('.bottomMenu').fadeOut('fast');
    }
});

/*jQUI Accordion*/
$(document).ready(function () {
    $( "#accordion" ).accordion();

    $( "#dialog-link, #icons li" ).hover(
        function() {
            $( this ).addClass( "ui-state-hover" );
        },
        function() {
            $( this ).removeClass( "ui-state-hover" );
        }
    );
});
/*Ends*/

/*Interest Icon*/
$(document).ready(function () {
    $("#i_music").mouseenter(function () {
        $(this).find("span").text("聽音樂");
    });
    $("#i_music").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_film").mouseenter(function () {
        $(this).find("span").text("看電影");
    });
    $("#i_film").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_book").mouseenter(function () {
        $(this).find("span").text("讀小說");
    });
    $("#i_book").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_pencil").mouseenter(function () {
        $(this).find("span").text("抒文字");
    });
    $("#i_pencil").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_eye").mouseenter(function () {
        $(this).find("span").text("觀展覽");
    });
    $("#i_eye").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_scissors").mouseenter(function () {
        $(this).find("span").text("做手工");
    });
    $("#i_scissors").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_camera").mouseenter(function () {
        $(this).find("span").text("玩攝影");
    });
    $("#i_camera").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_code").mouseenter(function () {
        $(this).find("span").text("寫程式");
    });
    $("#i_code").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_eat").mouseenter(function () {
        $(this).find("span").text("品美食");
    });
    $("#i_eat").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_coffee").mouseenter(function () {
        $(this).find("span").text("啜午茶");
    });
    $("#i_coffee").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_bicycle").mouseenter(function () {
        $(this).find("span").text("騎鐵馬");
    });
    $("#i_bicycle").mouseleave(function () {
        $(this).find("span").text("");
    });
});

$(document).ready(function () {
    $("#i_globe").mouseenter(function () {
        $(this).find("span").text("探世界");
    });
    $("#i_globe").mouseleave(function () {
        $(this).find("span").text("");
    });
});
/*Ends*/
