$(function () {
    
    var elDocument = document.documentElement;
    
    elDocument.className = elDocument.className.replace(/(^|\s)no-js(\s|$)/, '$1');

    // Grouping items
    console.group('Grouping items');
        console.log('Miguel Moya');
        console.log(jQuery.fn.jquery);
    console.groupEnd();


    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        success: function(label) {
            label.parent().removeClass("error-parent");
        },
        rules: {
            firstName: {
                required: true
            },

            username: {
                required: true,
                minlength: 5
            },

            password: {
                required: true,
                minlength: 5
            },

            email: {
                required: true,
                email: true
            },

            gender: {
                required: true
            },

            food : {
                required: true
            },

            'colors[]': {
                required: true,
                minlength: 2
            },

            text: {
                required: true
            }
        },

        messages: {
            firstName: {
                required: "Please enter your first name"
            },

            username: {
                required: "Please enter a username",
                minlength: "Your username must be at least 5 characters long"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 5 characters long"
            },

            email: {
                required: "Please enter a valid Email Address"
            },
            
            'favoriteColor[]': {
                required: "Please select a color"
            },

            gender: {
                required: "Please select an option"
            },

            food: {
                required: "Please select an option"
            },

            'colors[]': {
                required: "Please select at least 2 items from the list",
                minlength: "Please select at least 2 items from the list"
            },

            text: {
                required: "Please leave a comment"
            }
        }
    });
});