function colorHint () {
    var colorChoice = this.options[this.selectedIndex].value;

    switch (colorChoice) {
        case "Blue":
            ElFeedBack.setAttribute('class', 'blue');
            ElFeedBack.textContent = 'Blue symbolizes loyalty, strength, wisdom and trust.';
            break;

        case "Black":
            ElFeedBack.setAttribute('class', 'black')
            ElFeedBack.textContent = 'Black symbolizes power, fear, mystery, strength, elegance, etc. ';
            break;

        case "Green":
            ElFeedBack.setAttribute('class', 'green');
            ElFeedBack.textContent = 'Green symbolizes life, nature, and energy.';
            break;
    }
}

function checkForChecBox (event) {
    var checkboxFeedBack = document.getElementById('checkbox-feedback');
    
    if (!ElCheckBox.checked) {
        checkboxFeedBack.textContent = 'Must check the checkbox first before submiting';
        event.preventDefault();
    }
}

var ElSelect = document.querySelector('select');
ElSelect.addEventListener('change', colorHint, false);

var ElFeedBack = document.querySelector('div#feedback-06');
var ElCheckBox = document.getElementById('checkBox');

var ElSubmitForm = document.getElementById('form-06');
ElSubmitForm.addEventListener('submit', checkForChecBox, false);