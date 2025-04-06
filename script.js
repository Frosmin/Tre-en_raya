
juagor1 = "simon"
juagor2 = "pepee"
let = turnoActual = 1; 

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


var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = modal1.querySelector(".close"); 

btn1.onclick = function() {
  modal1.style.display = "block";
};

span1.onclick = function() {
  modal1.style.display = "none";
};

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = modal2.querySelector(".close"); 

btn2.onclick = function() {
  modal2.style.display = "block";
};

span2.onclick = function() {
  modal2.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};





posiciones = [0, 0, 0, 0, 0, 0, 0, 0, 0]; 


function juega(numero){

  if (posiciones[numero] === 0) {
    const celdas = document.querySelectorAll('.celda');
    
    if (turnoActual === 1) {

      celdas[numero].textContent = 'X';
      celdas[numero].style.fontSize = '10vw';
      celdas[numero].style.display = 'flex';
      celdas[numero].style.justifyContent = 'center';
      celdas[numero].style.alignItems = 'center';
      posiciones[numero] = 1;
      gana();
      turnoActual = 2;
    } else {

      celdas[numero].textContent = 'O';
      celdas[numero].style.fontSize = '10vw';
      celdas[numero].style.display = 'flex';
      celdas[numero].style.justifyContent = 'center';
      celdas[numero].style.alignItems = 'center';
      posiciones[numero] = 2;
      gana();
      turnoActual = 1;
    }
    
    const mensajeTurno = document.getElementById('smg');
    if (mensajeTurno) {
      mensajeTurno.textContent = "Turno de " + (turnoActual === 1 ? juagor1 : juagor2);
    }
  }
  gana();
}


function gana(){
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (turnoActual === posiciones[a] && turnoActual === posiciones[b] && turnoActual === posiciones[c]) {
      console.log("Ganador:  ", turnoActual )
    }
  }
  

}



function ver(){
  console.log(posiciones);
}