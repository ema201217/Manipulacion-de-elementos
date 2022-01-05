const h1 = document.querySelector("h1.moviesAddTitulo")
const section = document.querySelector("section#formulario")
const article = document.querySelector("section#formulario article")

h1.textContent = "AGREGAR PELÍCULAS";
h1.classList.add("titulo");
article.classList.add("fondoTransparente")
section.classList.add("fondoCRUD")