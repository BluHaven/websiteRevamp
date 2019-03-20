var hasSubmittedEmail = false;
    var emailField = document.getElementById("email_field");
    function myfunction() {
      var submitButton = document.getElementById("emailsubmitbutton");
      if (!hasSubmittedEmail) {
        submitButton.value = "Submitted!";
        hasSubmittedEmail = true;
        alert("Email address has been added to database!");
      } else {
        alert("You have already submitted your email address!");
        emailField.disabled = true;
		submitButton.disabled = true;
	  }
	}
      //var uponLoad = alert("Enter If You Dare");