// variables
const emailDiv = document.getElementById('email');
const email = document.getElementById('email-address');
const submitButton = document.getElementById('subscribe');
const signUpSuccessDiv = document.getElementById('sign-up-success');
const cardBody = document.querySelector('.card-body');
const dismissMessage = document.getElementById('dismiss');


// event listeners
eventListeners();
function eventListeners() {
    submitButton.addEventListener('click', signUp)
    // console.log(submitButton);
}


// functions

// function to validate the email
function signUp() {
    let input = email.value;

    // validate the email
    if (input !== '' && input.includes('@') && input.includes('.com')) {
        // loads the success message
        setTimeout(() => {
            signUpSuccess();
        }, 1500);
        
    } else {
        // display error message
        errorMessage();
    }
}

// function to display the sign up success div
function signUpSuccess() {
    // change the span text to the email value submitted.
    let spanText = email.value;
    const span = document.getElementById('your-email');
    span.textContent = spanText;
    
    // set the display of the main card body to none
    cardBody.style.display = 'none';

    // set the display of the success div card body to flex (for better adjustment in media queries)
    signUpSuccessDiv.style.display = 'flex';
    signUpSuccessDiv.style.flexDirection = 'column';

    // use dismiss button to reset newsletter
    dismissMessage.addEventListener('click', () => {
        setTimeout(() => {
            cardBody.style.display = 'flex';
            email.value = '';

            signUpSuccessDiv.style.display = 'none';
        }, 1500);
    })
;}

// function to create and display the error message
function errorMessage() {
    // change the color of the email border and border color
    email.className = 'email-error';

    // create span containing error message and style
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.appendChild(document.createTextNode('Valid email required'));

    // insert after the email label
    emailDiv.insertBefore(errorSpan, email)

    // remove error message after 2secs
    setTimeout(() => {
        // remove the error message span
        document.querySelector('#email .error-message').remove();

        // remove the error class from the email
        email.classList.remove('email-error');
    }, 2000)
}