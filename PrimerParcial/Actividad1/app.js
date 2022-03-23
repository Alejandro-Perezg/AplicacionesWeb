var contador = 1;
var b1 = "b1";

function actions(boton) {
  boton.className = "clicked";
  var text;
  if (contador % 2 === 0) {
    text = "X";
  } else {
    text = "O";
  }
  boton.value = text;
  boton.appendChild(document.createTextNode(text));
  contador++;
}

function asignacion(params) {}
