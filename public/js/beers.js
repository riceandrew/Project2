$(document).ready(function() {
    // Getting references to our form and input
    var signUpButton = $("#signUpButton");
    var emailInput = $("#emailSignUp");
    var passwordInput = $("#passwordSignUp");
    var firstNameInput = $("#firstNameSignUp");
    var lastNameInput = $("#lastNameSignUp");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpButton.on("click", function(event) {
      event.preventDefault();

      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        firstName: firstNameInput.val().trim(),
        lastName: lastNameInput.val().trim()
      };
  
      if (userData.email === "" || userData.password === "" || userData.firstName === "" || userData.lastName === "") {
        return alert("Must have a valid entry for each field!");
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.firstName, userData.lastName);

      
 
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, firstName, lastName) {
      // This is the connection for e-mail and password data intodb
      $.post("/api/signup", {
        username: email,
        password: password,
        first_name: firstName,
        last_name: lastName
      })
        .then(function(data) {
          window.location.replace("/dashboard");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr());
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });