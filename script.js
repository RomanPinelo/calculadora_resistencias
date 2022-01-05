// span donde mostrar valores
var resVal = document.getElementById('resistorValue');
var resTol = document.getElementById('resistorTolerance');

// Bandas de colores
var colBand1 = document.getElementById('bandColor');
var colBand2 = document.getElementById('bandColor1');
var colBand3 = document.getElementById('bandColor2');
var colBand4 = document.getElementById('bandColo3');



//Funciones que pintan las bandas de colores y el selector de color
function paintBand1Colors(f) {
  let fb = document.getElementById("firstNum");
  fb.style.color = "#fff";
  if (f == 0) {
    fb.style.backgroundColor = "#000";
    colBand1.style.backgroundColor = "#000";
  } else if (f == 1) {
    fb.style.backgroundColor = "#840";
    colBand1.style.backgroundColor = "#840";
  } else if (f == 2) {
    fb.style.backgroundColor = "#f00";
    colBand1.style.backgroundColor = "#f00";
  } else if (f == 3) {
    fb.style.backgroundColor = "#f44611";
    colBand1.style.backgroundColor = "#f44611";
  } else if (f == 4) {
    fb.style.backgroundColor = "#ff0";
    fb.style.color = "#000";
    colBand1.style.backgroundColor = "#ff0";
  } else if (f == 5) {
    fb.style.backgroundColor = "#0f0";
    fb.style.color = "#000";
    colBand1.style.backgroundColor = "#0f0";
  } else if (f == 6) {
    fb.style.backgroundColor = "#00f";
    colBand1.style.backgroundColor = "#00f";
  } else if (f == 7) {
    fb.style.backgroundColor = "#4c2881";
    colBand1.style.backgroundColor = "#4c2882";
  } else if (f == 8) {
    fb.style.backgroundColor = "#9b9b9b";
    fb.style.color = "#000";
    colBand1.style.backgroundColor = "#9b9b9b";
  } else {
    fb.style.backgroundColor = "#fff";
    fb.style.color = "#000";
    colBand1.style.backgroundColor = "#fff";
  }
}

function paintBand2Colors(s) {
  let sb = document.getElementById("secondNum");
  sb.style.color = "#fff";
  if (s == 0) {
    sb.style.background = "#000";
    colBand2.style.backgroundColor = "#000";
  } else if (s == 1) {
    sb.style.background = "#840";
    colBand2.style.backgroundColor = "#840";
  } else if (s == 2) {
    sb.style.background = "#f00";
    colBand2.style.backgroundColor = "#f00";
  } else if (s == 3) {
    sb.style.background = "#f44611";
    colBand2.style.backgroundColor = "#f44611";
  } else if (s == 4) {
    sb.style.background = "#ff0";
    sb.style.color = "#000";
    colBand2.style.backgroundColor = "#ff0";
  } else if (s == 5) {
    sb.style.background = "#0f0";
    sb.style.color = "#000";
    colBand2.style.backgroundColor = "#0f0";
  } else if (s == 6) {
    sb.style.background = "#00f";
    colBand2.style.backgroundColor = "#00f";
  } else if (s == 7) {
    sb.style.background = "#4c2882";
    colBand2.style.backgroundColor = "#4c2882";
  } else if (s == 8) {
    sb.style.background = "#9b9b9b";
    sb.style.color = "#000";
    colBand2.style.backgroundColor = "#9b9b9b";
  } else {
    sb.style.background = "#fff";
    sb.style.color = "#000";
    colBand2.style.backgroundColor = "#fff";
  }
}

function paintBand3Colors(m) {
  let mb = document.getElementById("multi");
  mb.style.color = "#fff";
  if (m === 1) {
    mb.style.background = "#000";
    colBand3.style.backgroundColor = "#000";
  } else if (m === 10) {
    mb.style.background = "#840";
    colBand3.style.backgroundColor = "#840";
  } else if (m === 100) {
    mb.style.background = "#f00";
    colBand3.style.backgroundColor = "#f00";
  } else if (m === 1000) {
    mb.style.background = "#f44611";
    colBand3.style.backgroundColor = "#f44611";
  } else if (m === 10000) {
    mb.style.background = "#ff0";
    mb.style.color = "#000";
    colBand3.style.backgroundColor = "#ff0";
  } else if (m === 100000) {
    mb.style.background = "#0f0";
    mb.style.color = "#000";
    colBand3.style.backgroundColor = "#0f0";
  } else if (m === 1000000) {
    mb.style.background = "#00f";
    colBand3.style.backgroundColor = "#00f";
  } else if (m === 10000000) {
    mb.style.background = "#4c2882";
    colBand3.style.backgroundColor = "#4c2882";
  } else if (m === 100000000) {
    mb.style.background = "#9b9b9b";
    mb.style.color = "#000";
    colBand3.style.backgroundColor = "#9b9b9b";
  } else {
    mb.style.background = "#fff";
    mb.style.color = "#000";
    colBand3.style.backgroundColor = "#fff";
  }
}

function paintBand4Colors(t) {
  let tb = document.getElementById("tole");
  if (t === 0.05) {
    tb.style.background = "#ffd700";
    colBand4.style.backgroundColor = "#ffd700";
  } else {
    tb.style.background = "#e3e4e5";
    colBand4.style.backgroundColor = "#e3e4e5";
  }
}

setInterval(() => {
  // Salvar valores de las bandas de colores
  var firstBand = document.getElementById('firstNum').value;
  var secondBand = document.getElementById('secondNum').value;
  var multipli = document.getElementById('multi').value;
  var tolerance = document.getElementById('tole').value;

  // Convertir el string a entero
  var number = parseInt(firstBand + secondBand);
  var mult = parseInt(multipli);
  var tol = parseFloat(tolerance);

  //Pintar de colores las bandas de la resistencia y el selector de color
  paintBand1Colors(firstBand);
  paintBand2Colors(secondBand);
  paintBand3Colors(mult);
  paintBand4Colors(tol);

  //Calculo de resistencias
  resistorVal = number * mult;
  minVal = resistorVal - (resistorVal * tol);
  maxVal = resistorVal + (resistorVal * tol);

  if (resistorVal <= 999) {
    resVal.innerHTML = `${resistorVal} Ω`;
  } else if (resistorVal <= 999999) {
    let resistorValSimplified = resistorVal / 1000;
    resVal.innerHTML = `${resistorVal} Ω = ${resistorValSimplified} KΩ`;
  } else if (resistorVal <= 999999999) {
    let resistorValSimplified = resistorVal / 1000000;
    resVal.innerHTML = `${resistorVal} Ω = ${resistorValSimplified} MΩ`;
  } else {
    let resistorValSimplified = resistorVal / 1000000000;
    resVal.innerHTML = `${resistorVal} Ω = ${resistorValSimplified} GΩ`;
  }

  resTol.innerHTML = `De acuerdo a la tolerancia, el valor máximo de resistencia es ${maxVal} Ω y el valor mínimo de resistencia es ${minVal} Ω`

}, 100);