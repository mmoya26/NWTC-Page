$(function () {
    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
        },
        success: function(label) {
            label.parent().removeClass("error-parent");
        },
        rules: {
            username: {
                required: true,
                minlength: 5
            },

            password: {
                required: true,
                minlength: 5
            },

            'favoriteColor[]': {
                required: true,
                minlength: 1
            },

            bestPhone: {
                required: true
            },

            'foods[]': {
                required: true,
                minlength: 4
            },

            text: {
                required: true
            }
        },

        messages: {
            username: {
                required: "Please enter a username",
                minlength: "Your username must be at least 5 characters long"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be at least 5 characters long"
            },
            'favoriteColor[]': {
                required: "Please select a color"
            },
            bestPhone: {
                required: "Please select one of the phones"
            },
            'foods[]': {
                required: "Please select at least 4 items from the list",
                minlength: "Please select at least 4 items from the list"
            },
            text: {
                required: "Please leave a comment"
            }
        }
    });
});