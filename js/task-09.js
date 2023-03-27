const backgroundColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  backgroundColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
