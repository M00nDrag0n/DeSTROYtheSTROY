// When button clicked: body (div class) hide, monster show, can't get rid of it unless reload

// 2nd button, when clicked, another question pops up, answer is always an alert that says "please try again".

// 3rd button, shows with monster, when clicked, monster speaks (advanced: when clicked first time, 2nd time, 3rd time, different dialogue)



// SPECIFIC ANSWERS: if age greater than 30, cannot vote. If age less than 29, cannot vote. If age in Tortoise years less than 4, cannot vote. If age in Tortoise years greater than 4, cannot vote. --> alert "WHAT! That's Impossible! Try again."

//  - list drink preferances. Only right answer is water (list at least 5)
//  - List favorite color. Only right answer is white.
//  - list favorite animal, input type="radio", list 5-10 creatures. Only right answer is "starfish"

// when every answer is correct: monster says "AAAAAGH I HAVE BEED DE-STROYED" and hides, new css appears, alert which says "congratulations! You have earned the right to vots. Please enter your vote below."

// same submit button (class) which hides all but the monster



// Needed: empty div id for answer output (repeats who you voted for , toUppercase)

// submit button class is the same, but text says "Click me!"





// BL: functions, variables, branching




// <submit click function event: .container: hide, else: show;>
//
// <series of prompt (start 1 prompt):>
//
// <BRANCH: if age === 29, you can vote. else: no;>






// UIL: document ready function , event.preventDefault, variables with applied effects to previous variables and functions
$(document).ready(function() {
$("form#form").submit(function(event) {
  event.preventDefault();
  var age = $("#age").val();
if (age)
});

});
