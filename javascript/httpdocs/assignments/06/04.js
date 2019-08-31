function CheckUserName (e, ElUserName) {
    if (ElUserName.value.length < 5) {
        userFeedBackDiv.setAttribute('class', 'warning');
        userFeedBackDiv.textContent = 'Username has to be at least 5 characters';
    } else {
        userFeedBackDiv.textContent = '';
    }
}

function CheckPassword (e, ElPassword) {
    if (ElPassword.value.length < 10) {
        passFeedBackDiv.setAttribute('class', 'warning');
        passFeedBackDiv.textContent = 'Password has to be at least 10 characters';
    } else {
        passFeedBackDiv.textContent = '';
    }
}

var ElUserName = document.getElementById('userName');
var ElPassword = document.getElementById('uPassword');
var userFeedBackDiv = document.querySelector('div#feedback');
var passFeedBackDiv = document.querySelector('div#feedbackPass')

ElUserName.addEventListener('blur', function (e) {
    CheckUserName(e, ElUserName)
}, false);
ElPassword.addEventListener('blur', function(e) {
    CheckPassword(e, ElPassword)
}, false);