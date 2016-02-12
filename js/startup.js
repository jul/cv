var class_saver=[];
$("#impress").hide();

function reveal_impress() { 
    $('#printable').hide();
    impress().goto(window.location.hash);
    impress().init();
  /*  class_saver=$("body").attr("class");
    $("body").attr("class",class_saver);*/
    $('#impress').show();
    $("body").css("overflow", "hidden");
};
function reveal_cv() { 
    window.location.hash = 'printable';
    /*class_saver=$("body").attr("class");*/
    $("body").removeAttr("class");
    $("#impress").hide();
    $("#printable").fadeIn();
    $(".fallback-message").hide();
    $('#printable').zIndex=90000;
    $('body').zIndex=0;
    $("body").css("overflow", "auto");
}
function select_view() { 
if (window.location.hash.indexOf("printable")!= -1){
    reveal_cv();
} else { 
    $("body").attr("class",class_saver);
impress().init();
if(window.location.hash.indexOf("init") != -1 || ! window.location.hash){
    $(".hint").show();
} else { 
    $(".hint").hide();
}
$(".fallback-message").hide();
   
    reveal_impress();
 /*   $('#printable').hide();
    impress().goto(window.location.hash);*/
    class_saver=$("body").attr("class");
}
};
$(document).ready(function() { 
    $(".loading").hide();
    cv=$('#printable').html();
    $(".content").each(function(i,el) { cv+=$(el).html() });
    $('#printable').html(cv);
   
$('#jcprt').click =reveal_cv;


window.onhashchange = select_view;
select_view();

});


