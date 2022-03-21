import Button from "./button.js";
import Imagen from "./imagen.js";
import Sound from "./sound.js";
import List from "./list.js";

let myDiv = document.querySelector("#myApp");

let myButton = new Button("Click me!");

myDiv.innerHTML = myButton.render();


let myImagen = new Imagen("./data/logo_OK.png");

myDiv.innerHTML += myImagen.render();

let mySound = new Sound("https://www.w3schools.com/tags/horse.ogg");

myDiv.innerHTML += mySound.render();

const listItems = ["item 1", "item 2", "item 3", "item 5", "item 4", "item 7", "item 6"];

let myList = new List(listItems);

myDiv.innerHTML += myList.render();