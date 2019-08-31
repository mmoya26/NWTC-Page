(function ($) {
    var elDocument = document.documentElement; 
    elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

    // Grouping items
  console.group('Grouping items');
    console.log('Miguel Moya');
    console.log(jQuery.fn.jquery);
  console.groupEnd();

    $.fn.tabs = function() {
        $('.tab-list').each(function() {                   
            var $this = $(this);                            
            var $tab = $this.find('li.active');             
            var $link = $tab.find('a');                     
            var $panel = $($link.attr('href'));             
          
            $this.on('click', '.tab-control', function(e) { 
              e.preventDefault();                           
              var $link = $(this),                         
                  id = this.hash;                          
          
              if (id && !$link.parent().is('.active')) {    
                $panel.removeClass('active');               
                $tab.removeClass('active');                
          
                $panel = $(id).addClass('active');         
                $tab = $link.parent().addClass('active'); 
              }
            });
          });
          
          return this;
    };
}(jQuery));