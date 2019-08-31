$(function () {

    function loadContent(url) {
        $('#content').load(url + ' #container-content').hide().fadeIn('slow');
    }

    $('nav a').on('click', function(e) {
        e.preventDefault();
    
        var url = this.href;
    
        $('nav a.current').removeClass('current');
        $(this).addClass('current');
    
        $('#container-content').remove();
        loadContent(url);
        history.pushState('', this.text, url);
    });

    window.addEventListener('popstate', function () {
        var locationPath = location.pathname;
        loadContent(locationPath);

        var newPage = locationPath.substring(locationPath.lastIndexOf('/') + 1);
        $('nav a ').removeClass('current');
        $('[href="' + newPage + '"]').addClass('current');
    });
});