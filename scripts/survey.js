$(document).ready(function() {

  $('input[name="radio"]').change(function() {
    var selectedValue = $(this).val();
    var options = '';

    // check the first radio input and create options for the second radio input
    if (selectedValue === 'Transit') {
      options += '<div class="form-check form-check-inline">';
      options += '<input class="form-check-input" type="radio" name="radio2" id="radio3" value="With family">';
      options += '<label class="form-check-label" for="radio3">With family</label>';
      options += '</div>';
      options += '<div class="form-check form-check-inline">';
      options += '<input class="form-check-input" type="radio" name="radio2" id="radio4" value="On my own/with friends">';
      options += '<label class="form-check-label" for="radio4">On my own/with friends</label>';
      options += '</div>';
    } else if (selectedValue === 'On Campus') {
      options += '<div class="form-check form-check-inline">';
      options += '<input class="form-check-input" type="radio" name="radio2" id="radio5" value="Dormitory">';
      options += '<label class="form-check-label" for="radio5">Dormitory</label>';
      options += '</div>';
      options += '<div class="form-check form-check-inline">';
      options += '<input class="form-check-input" type="radio" name="radio2" id="radio6" value="Apartment">';
      options += '<label class="form-check-label" for="radio6">Apartment</label>';
      options += '</div>';
    }

    // Update the options of the second radio input
    $('#living-situation-part-b').html('<label>Living Situation Part B:</label><br>' + options);
  });

    $('form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting default
  
      // get the values entered by the user
      var email = $('#email-input').val();
      var favoriteClass = $('#dropdown').val();
      var mood = $('#text-input').val();
      var rant = $('#textarea').val();
      var livingSituation = $('input[name="radio"]:checked').val();
      var customizationOptions = [];
  
      // loop to fetch checkboxes
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