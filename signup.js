document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var firstName = document.getElementById('first-name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var country = document.getElementById('country').value;
  var sendEmails = document.getElementById('send-emails').checked;
  console.log('First name:', firstName);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Country:', country);
  console.log('Send emails:', sendEmails);
});
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  fetch('/api/signup', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Signup failed');
    }
  })
  .then(function(data) {
    console.log('User account created:', data);
  })
  .catch(function(error) {
    console.error('Error creating user account:', error);
  });
});

var appleButton = document.getElementById('continue-with-apple');
appleButton.addEventListener('click', function() {
  // Initialize the Apple Sign-In SDK
  AppleID.auth.init({
    clientId: 'your.client.id',
    scope: 'email openid'
  });

  // Prompt the user to sign in with Apple
  AppleID.auth.signIn({
    hostedDomain: 'appleid.apple.com',
    clientId: 'your.client.id',
    redirectUri: 'https://your-website.com/callback',
    scope: 'email openid'
  })
  .then(function(data) {
    // Send the user's ID token to your server for verification
    fetch('/api/apple-signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_token: data.user.id_token
      })
    })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Apple Sign-In failed');
      }
    })
    .then(function(data) {
      console.log('User account created with Apple Sign-In:', data);
    })
    .catch(function(error) {
      console.error('Error creating user account with Apple Sign-In:', error);
    });
  })
  .catch(function(error) {
    console.error('Error during Apple Sign-In:', error);
  });
});