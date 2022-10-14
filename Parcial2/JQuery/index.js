$(document).ready(function(){
    let clicks = 0;

    $('.card-inside').click(function(){
        clicks += 1
        $(this).toggleClass("selected");
        if (clicks == 2) {
            setTimeout(function () { $('.card-inside').removeClass("selected")}, 500)
            clicks = 0
        }
    });
});