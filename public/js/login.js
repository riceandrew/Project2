$(document).ready(function() {
    // Getting references to our form and inputs
    var logInButton = $("#logInButton");
    var emailInput = $("#emailSignUp");
    var passwordInput = $("#passwordSignUp");
  
    // When the form is submitted, we validate there's an email and password entered
    logInButton.on("click", function(event) {

     event.preventDefault();

      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (userData.email == "" || userData.password == "") {
        alert("You need to enter your email and password!")
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      logInUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the dashboard page
    function logInUser(email, password) {
            // This is the connection for e-mail and password data intodb
      $.get("/api/users", {
        username: email,
        password: password
      })

    }
  });
  