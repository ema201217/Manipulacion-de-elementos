const body = document.body;
const h1 = document.querySelector("h1");
const paragraphs = document.querySelectorAll("p");

const btns = document.querySelectorAll("a");

h1.classList.add("titulo");

/* Al pasar el mouse por encima de los botones le colocamos el mismo color a las etiquetas "p" */
paragraphs.forEach((p) => {
  btns.forEach((btn) => {
    let mouseOverColor = (e) => {
      p.style.color = window
        .getComputedStyle(e.target)
        .getPropertyValue("background-color");
    };
    btn.addEventListener("mouseover", (event) => mouseOverColor(event));
    btn.addEventListener("mouseout", () => {
      p.style.color = "lightgray";
    });
  });
});

h1.addEventListener("mouseover", function (e) {
  body.style.backgroundImage = "url('/img/vikingsposter.jpg')";

  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";

  e.target.style.color = "white"
  e.target.style.fontSize = "2rem"

  paragraphs.forEach((p) => {
    p.style.backgroundColor = "rgba(0,0,0,0.8)";
    p.style.color = "lightgray";
  });
});

paragraphs.forEach((p) => {
    p.style.padding = "10px";
})
