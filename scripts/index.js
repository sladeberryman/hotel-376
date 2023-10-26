$(document).ready(function() {
    $("#surveyForm").submit(function(event) {
      event.preventDefault();
  
      var username = $("#text-input").val();
      var password = $("#password-input").val();
  
      if (username === "csis" && password === "csis") {
        window.location.href = "survey.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });