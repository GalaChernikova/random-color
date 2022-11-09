const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorEl = document.createElement("div");
  colorEl.classList.add("color-container");
  containerEl.appendChild(colorEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();

function generateColors() {
  colorContainerEls.forEach((colorEl) => {
    const newColor = randomColor();
    colorEl.style.backgroundColor = "#" + newColor;
    colorEl.innerText = "#" + newColor;
  });
}


function randomColor() {
  const chars = "0123456789abcdf";
  let colorCode = "";
  
  for (let index = 0; index < 6; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
    console.log(colorCode) 
  }
  return colorCode;
}
