const mainContainer = document.querySelector(".container");
const h2 = document.querySelector("h2");
const a = document.querySelector("a");
const paragraphs = document.querySelectorAll("p");

/* Micro desafío - Paso 1: */

/* Solicitamos el nombre */
const nombre = prompt("Ingrese su nombre");

/* Si no existe el nombre entonces colocamos invitado sino el nombre ingresado */
!nombre ? (h2.textContent = "Invitado") : (h2.textContent = nombre);

/* Transformamos el primer h2 que encuentra el querySelector en MAYUSCULA */
h2.style.textTransform = "uppercase";

/* La etiqueta "a" cambia el color */
a.style.color = "#E51B3E";

/* Le preguntamos al usuario si quiere un fondo de pantalla */
const res = confirm("“¿Desea colocar un fondo de pantalla?”");

/* Si existe un respuesta de confimaciòn cambiamos el fondo de la etiqueta body agregandole una clase*/
res && document.body.classList.add("fondo");

/* for multiple */
/* La variable i va a representar el numero que va a ser evaludo si al ser dividido por 2 es igual a 0, definiendo si es par o inpar ese numero */
/* Y la variable p representa el indice del elemento que va a recibir dicha clase correspondiente */
for (
  let v = 1, i = 0;
  v <= paragraphs.length && i < paragraphs.length;
  v++, i++
) {
  v % 2 == 0
    ? paragraphs[i].classList.add("destacadoPar")
    : paragraphs[i].classList.add("destacadoImpar");
}

/* Hacemos visible todo el contenido que esta dentro de la etiqueta main */
mainContainer.style.display = "block";