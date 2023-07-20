document.addEventListener( "DOMContentLoaded", function () {
    updateDOM("This is really cool!")
  } );
  
  
  function updateDOM() {
    var textInput;
    textInput = document.getElementById( "text" )
     textInput.innerHTML = "This is really cool!";
  }