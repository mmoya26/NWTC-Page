$(function () {
    $('li').hide().each(function (index) {
        $(this).delay(500 * index).fadeIn(500);
    });
});