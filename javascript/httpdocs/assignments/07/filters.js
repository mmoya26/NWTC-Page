$ (function () {
    
    var $divs = $('.filter-divs');

    $divs.last().css({
        "background-color": "red",
        "width": "100"
    });

    $divs.eq(0).css({
        "background-color": "blue",
        "width" : "200"
    });

    $('div.filter-divs:lt(2)').css({
        "color": "#fff",
        "padding": "5px",
        "font-weight": "bold"
    });

    $('div.filter-divs:contains("Hello")').css({
        "color": "pink",
        "font-weight": "bold"
    });

    $divs.has('p').css("box-shadow", "2px 3px");
    
});