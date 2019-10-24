$(document).ready(function() {
  $("#option").submit(function(event) {
    event.preventDefault();
    var animal;

    var animalz = $("#animal").val();

console.log(animalz);

if (animalz === "Cat") {
  $("#dog").hide();
  $("#mouse").hide();
  $("#cat").show();
  console.log("HIIII I EXIST. HELP! I AM DESPERATELY IN NEED OF BATTERIES AND I'M GONNA DIE!!!!");
} else if (animalz ==="Dog") {
  $("#mouse").hide();
  $("#cat").hide();
  $("#dog").show();
} else { (animalz === "Mouse")
  $("#cat").hide();
  $("#dog").hide();
  $("#mouse").show();
};
});



});
