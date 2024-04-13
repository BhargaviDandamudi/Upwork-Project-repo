// Get the form and input elements
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the email and password values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validate the email and password
  if (validateEmail(email) && validatePassword(password)) {
    // If the email and password are valid, submit the form
    form.submit();
  } else {
    // If the email or password are invalid, show an error message
    alert('Invalid email or password');
  }
});

// Validate email function
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate password function
function validatePassword(password) {
  return password.length >= 8;
}