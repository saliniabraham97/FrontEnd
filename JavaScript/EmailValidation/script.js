function validateEmail(){
    var email = document.getElementById('email').value;
    // Regular expression for email format validation
    var emailRegex = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    // Check if the email matches the specified criteria
    if (emailRegex.test(email)) {
      alert('Valid email address!');
    } else {
      alert('Invalid email format. Please enter a valid email address.');
    }
}