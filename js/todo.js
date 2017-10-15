$(document).ready(function(){
  // call functions here
  $('form').on("submit", function(ev){
    ev.preventDefault();
    let input = $('#item').val()
    addToDo(input)
  })
});

// define functions here
function addToDo(input){
  $('#list ol').append(`<li>${input}</li>`)
  $('form').trigger("reset");
}
