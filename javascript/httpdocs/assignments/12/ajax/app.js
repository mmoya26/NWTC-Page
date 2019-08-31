var elDocument = document.documentElement;
    
elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

// Grouping items
console.group('Grouping items');
console.log('Miguel Moya');
console.log(jQuery.fn.jquery);
console.groupEnd();

$('#ajax-links a').on('click', function(e) {
    e.preventDefault();

    var url = this.href;

    $('#ajax-links a.active').removeClass('active');
    $(this).addClass('active');

    $('#websites-card').remove();
    $('#ajax-container').load(url + ' #websites-card').hide().fadeIn("slow");
});