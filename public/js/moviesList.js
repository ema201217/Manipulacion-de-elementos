const body = document.body;
const h1 = document.querySelector("h1.moviesListTitulo")

const DarkMode = confirm("“¿Desea modo oscuro?”")/* Pide un prompt pero queda mejor con un confirm */

if(DarkMode){
    body.style.backgroundColor="#b3d5e2" /* #7f7f7f esto pide el ejercicio pero le pongo otro para que quede mejor */
    body.classList.add('fondoMoviesList')
  }

h1.textContent="LISTADO DE PELÍCULAS"

h1.style.color="white";
h1.style.backgroundColor="teal";
h1.style.padding="20px";

