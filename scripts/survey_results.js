$(document).ready(function() {
    // Retrieve the submitted data from localStorage
    var email = localStorage.getItem('email');
    var favoriteClass = localStorage.getItem('favoriteClass');
    var mood = localStorage.getItem('mood');
    var rant = localStorage.getItem('rant');
    var livingSituation = localStorage.getItem('livingSituation');
    var customizationOptions = localStorage.getItem('customizationOptions');
    var birthday = localStorage.getItem('birthday');
  
    // Display the submitted data in the results container
    var resultsContainer = $('#results-container');
    resultsContainer.append('<p><strong>Email</strong>: ' + email + '</p>');
    resultsContainer.append('<p><strong>Favorite Class</strong>: ' + favoriteClass + '</p>');
    resultsContainer.append('<p><strong>Mood</strong>: ' + mood + '</p>');
    resultsContainer.append('<p><strong>Rant</strong>: ' + rant + '</p>');
    resultsContainer.append('<p><strong>Living Situation</strong>: ' + livingSituation + '</p>');
    resultsContainer.append('<p><strong>Parking Options</strong>: ' + customizationOptions + '</p>');
    resultsContainer.append('<p><strong>Birthday</strong>: ' + birthday + '</p>');
  
    // Clear the stored data from localStorage
    localStorage.clear();
  });