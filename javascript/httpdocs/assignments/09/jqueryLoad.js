$('nav a').on('click', function(e) {
    e.preventDefault();

    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container-content').remove();
    $('#content').load(url + ' #container-content').hide().fadeIn("slow");
});