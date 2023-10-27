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
    resultsContainer.append('<p>Email: ' + email + '</p>');
    resultsContainer.append('<p>Favorite Class: ' + favoriteClass + '</p>');
    resultsContainer.append('<p>Mood: ' + mood + '</p>');
    resultsContainer.append('<p>Rant: ' + rant + '</p>');
    resultsContainer.append('<p>Living Situation: ' + livingSituation + '</p>');
    resultsContainer.append('<p>Customization Options: ' + customizationOptions + '</p>');
    resultsContainer.append('<p>Birthday: ' + birthday + '</p>');
  
    // Clear the stored data from localStorage
    localStorage.clear();
  });