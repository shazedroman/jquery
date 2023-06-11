// jq

$(document).ready(function(){
// old
    // $('#btn').click(function(){

    // 	alert("Welcome to my website");
    // })
// updte
$('#btn').on("click",function(){

     	alert("Welcome to my website");
    
     });

// hide
 $('#hide').on("mouseover", function(){
     $('h2').hide();

 })
 // show
 $('#show').on("mouseover", function(){
     $('h2').show();

 });
 // toggle
 $('#toggle').on("click", function(){
     $('h2').toggle();

 });
// fadeout
$('#fadeout').on("click", function(){
    $('h2').fadeOut();

});
// fadein
$('#fadein').on("click", function(){
    $('h2').fadeIn();

});
// fadetoggle
$('#fadetoggle').on("click", function(){
    $('h2').fadeToggle();

});

 });

// slide toggle
$(document).ready(function(){

$('.question').on("click", function(){
    $('.answer').slideToggle(1000);

});



     });
// drop down
$(document).ready(function(){

$('.down').on("click", function(){
    $('.box').slideDown(1000);

});



     });
// slideup
$(document).ready(function(){

$('.up').on("click", function(){
    $('.box1').slideUp(1000);

});



     });
// first p hide
$(document).ready(function(){

$("button").on("click", function(){
    $("p:first").hide();

});



     });
// this selector

$(document).ready(function(){

$("p").on("click", function(){
    $(this).hide();

});



     });
// ul li first hide
$(document).ready(function(){

$("button").on("click", function(){
    $("ul li:first").hide();

});



     });
// $("[href]") selector

$(document).ready(function(){

$("button").on("click", function(){
    $("[href]").hide();

});



     });
// $("tr:even") selector
$(document).ready(function(){

$("tr:even").css("background-color", "yellow");

});
// $("tr:odd") selector
$(document).ready(function(){

$("tr:odd").css("background-color", "green");

});

//animation
$(document).ready(function(){

$("button").on("click", function(){
    $(".ani").animate({
        left: '500px',
        opacity: '0.5',
        height : '200px',
        width : '200px',

});
});
});

//animation
$(document).ready(function(){

$("button").on("click", function(){
    $(".animat").animate({
        height : 'toggle',
});
});
});

$(document).ready(function(){

$("button").on("click", function(){
    $("p").hide("slow");
    
     

});
});

$(document).ready(function(){

$("button").on("click", function(){
    $("p1").css("color", "red").slideUp(2000).slideDown(2000);
    
     

});
});









     








	


