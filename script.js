
juagor1 = "simon"
juagor2 = "pepee"

document.addEventListener('DOMContentLoaded', function() {
  actualizarInterfaz();
});



function actualizarInterfaz() {
  const spanJugador1 = document.querySelector("#nombreJugador1");
  const spanJugador2 = document.querySelector("#nombreJugador2");
  if (spanJugador1) spanJugador1.textContent = juagor1;
  if (spanJugador2) spanJugador2.textContent = juagor2;
  console.log(juagor1, juagor2);
}


function cambiarNombre(numero) {
  let nombre;
  if (numero === 1) {
    nombre = document.getElementById('nombreJugador1Input').value.trim();
    juagor1 = nombre;
  } else if (numero === 2) {
    nombre = document.getElementById('nombreJugador2Input').value.trim();
    juagor2 = nombre;
  }
  
  actualizarInterfaz();
}

// Modal para Jugador 1
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = modal1.querySelector(".close"); // Selecciona el botón de cerrar dentro del modal1

btn1.onclick = function() {
  modal1.style.display = "block";
};

span1.onclick = function() {
  modal1.style.display = "none";
};

// Modal para Jugador 2
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = modal2.querySelector(".close"); // Selecciona el botón de cerrar dentro del modal2

btn2.onclick = function() {
  modal2.style.display = "block";
};

span2.onclick = function() {
  modal2.style.display = "none";
};

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};