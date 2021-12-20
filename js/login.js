document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user passs
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    // check email and password

    if (userEmail == 'avidkotkoti@bodbodi.com' && userPass == 'amiavid') {
        window.location.href = 'second.html';
    }
});

//Handle deposite buutton id

// document.getElementById('deposite-button').addEventListener('click', function () {
//     console.log('Deposite Button Click');
// });