// When button clicked: body (div class) hide, monster show, can't get rid of it unless reload
// <submit click function event: .container: hide, else: show;>

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

//
// <series of prompt (start 1 prompt):>
//
// <BRANCH: if age === 29, you can vote. else: no;>






// UIL: document ready function , event.preventDefault, variables with applied effects to previous variables and functions
$(document).ready(function() {
$("form#form").submit(function(event) {
  event.preventDefault();


  $("#receiptP").show();
  $("#receiptP").click(function() {
    $("#receipt").removeClass();
    $("#receipt").addClass(".receiptEdit");
    $("#Stroy").show();
    $(".monster").show();
    $(".receiptEdit").show();
    $("#receipt").hide();
})


$("#Stroy").show();


  // var stringAge = $("#W").val();
  // var age = parseInt(stringAge);

});



 var age = ("#age").val();
 var ageT = ("#ageT").val();
 var fDr = ("#fDr").val();
 var fCo = ("#fCo").val();
 var fAn = ("#fAn").val();


  if (age === 29 && ageT === 4 && fDr === "water" && fCo === "white" && fAn === "starfish")  {
    result = [ "You may vote below."];
    // alert("AHAHAHAH YOU CAN'T VOTE YET!!")
  } else {
    result = [ "AHHHHHHHHHH I HAVE BEEN DE-STROYED!!"];
};





  // ANSWERS: Age: 29. Age-T: 4; F-Dr: water. F-Co: white. F-an: Starfish.

});
