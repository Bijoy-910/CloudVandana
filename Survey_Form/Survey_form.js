var surveyForm = document.getElementById('surveyForm');
var popup = document.getElementById('popup');
var closePopup = document.getElementById('closePopup');
var submitBtn = document.getElementById('submitBtn');
var resetBtn = document.getElementById('resetBtn');
var results = document.getElementById('results');

surveyForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Gather form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var genderElements = document.getElementsByName('gender');
    var gender = '';
    for (var elem of genderElements) {
        if (elem.checked) {
            gender += elem.value + ' ';
        }
    }
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Display results in the popup
    results.innerHTML = `
        First Name: ${firstName}<br>
        Last Name: ${lastName}<br>
        Date of Birth: ${dob}<br>
        Country: ${country}<br>
        Gender: ${gender}<br>
        Profession: ${profession}<br>
        Email: ${email}<br>
        Mobile Number: ${mobile}
    `;

    // Show the popup
    popup.style.display = 'block';
});

closePopup.addEventListener('click', function () {
    // Close the popup
    popup.style.display = 'none';

    // Reset the form
    surveyForm.reset();
});

resetBtn.addEventListener('click', function () {
    // Reset the form
    surveyForm.reset();
});
