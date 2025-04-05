
juagor1 = "simon"
juagor2 = "pepee"

document.addEventListener('DOMContentLoaded', function() {
  actualizarInterfaz();
});



function actualizarInterfaz() {
  const spanJugador1 = document.querySelector("#j1 div span");
  const spanJugador2 = document.querySelector("#j2 div span");
  spanJugador1.textContent = juagor1;
  spanJugador2.textContent = juagor2;
}


function cambiarNombre(numero){
  const nombre = document.getElementById('nombreJugador').value.trim();
  if (numero == 1){
    juagor1 = nombre
  }else{
    juagor2 = nombre
  }
  console.log(juagor1, juagor2)
  actualizarInterfaz();
}




function gana(){
                                                                                                                                                                                                                  
}


function funciona(num){
    console.log(num)
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}