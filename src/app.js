/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

function cargarPagina() {
  setTimeout(function() {
    generadorBoton();
    cargarPagina();
  }, 2000);
}

function generadorBoton() {
  const icono = ["♦", "♥", "♠", "♣"];
  const numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "As"];
  const colores = ["#000000", "#ff0000"];

  let simboloRandon = Math.floor(Math.random() * icono.length);
  let numeroRandom = Math.floor(Math.random() * numero.length);
  let colorRandom = Math.floor(Math.random() * colores.length);

  document.querySelector("#numero").innerHTML = numero[numeroRandom];

  document.querySelector("#simboloTop").innerHTML = icono[simboloRandon];
  document.querySelector("#simboloBottom").innerHTML = icono[simboloRandon];

  document.querySelector("#simboloBottom").style.color = colores[colorRandom];
  document.querySelector("#simboloTop").style.color = colores[colorRandom];
}

window.onload = function aleatorio() {
  generadorBoton();

  document.querySelector("button").onclick = function() {
    generadorBoton();
  };

  cargarPagina();
};
