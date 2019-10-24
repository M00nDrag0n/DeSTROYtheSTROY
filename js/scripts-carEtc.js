$(document).ready(function() {
  $("#blah").submit(function(event) {
    event.preventDefault();

var age = $("#age").val();
var gender =$("#gender").val();
var race = $("#race").val();
var species = $("#species").val();
var party = $("#party").val();



var score;

    if (age === "54" && gender === "male" && race === "Caucasian?" && species === "Homo sapien" && party === "Republican."){
    score = [ "WOW! Your Score Is Perfect!"];
    $("#old").show();
    console.log("HELP", " age is", age, " gender is", gender, "race is ", race, "species is ", species, "party is ", party);
  } else {
    score = ["Sorry, your score is too incompetent for our company to notice your existence."]
    $("#older").show();
  };

  $("#Output").prepend(score);


  });
});
