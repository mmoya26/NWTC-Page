$(function () {
    var $list = $('ul');
    var $showButton = $('h2 a');
    var showList = false;

    $list.hide(); // Hides the list

    $showButton.on('click', function (e) {

        $list.toggle(700, function () {
            if (showList === false) {
                $showButton.text('Hide');
                $showButton.addClass('show-dark');
                $(this).show();
                showList = true;
            } else if (showList === true) {
                $showButton.text('Show');
                $showButton.removeAttr('class');
                $(this).hide();
                showList = false;
            }
        });

        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    });
});