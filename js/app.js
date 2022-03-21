import Button from "./button.js";
import Imagen from "./imagen.js";

let myDiv = document.querySelector("#myApp");

let myButton = new Button("Click me!");

myDiv.innerHTML = myButton.render();


let myImagen = new Imagen("./data/logo_OK.png");

myDiv.innerHTML += myImagen.render();
