$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting default
  
      // Get the values entered by the user
      var email = $('#email-input').val();
      var favoriteClass = $('#dropdown').val();
      var mood = $('#text-input').val();
      var rant = $('#textarea').val();
      var livingSituation = $('input[name="radio"]:checked').val();
      var customizationOptions = [];
  
      // Special loop to fetch checkboxes
      $('input[name="checkbox"]:checked').each(function() {
        customizationOptions.push($(this).val());
      });
  
      var birthday = $('#datetime-input').val();
  
      // Store the data in localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('favoriteClass', favoriteClass);
      localStorage.setItem('mood', mood);
      localStorage.setItem('rant', rant);
      localStorage.setItem('livingSituation', livingSituation);
      // join customization options with comma
      localStorage.setItem('customizationOptions', customizationOptions.join(', '));
      localStorage.setItem('birthday', birthday);
  
      // Redirect to the survey results page
      window.location.href = 'survey_results.html';
    });
  });