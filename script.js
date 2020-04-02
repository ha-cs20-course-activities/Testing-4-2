document.addEventListener("click", run);

function run() {
  document.body.style.background = randomColor();
  document.querySelector("h1").style.color = randomColor();
  document.querySelector("p").style.color = randomColor();
}

function randomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}