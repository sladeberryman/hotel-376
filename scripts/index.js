$(document).ready(function() {
    // When form is submitted
    $("#surveyForm").submit(function(event) {
      event.preventDefault();
  
      var username = $("#text-input").val();
      var password = $("#password-input").val();
  
      // Only allow user through if username and pwd is csis
      if (username === "csis" && password === "csis") {
        window.location.href = "survey.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });