const $car = document.querySelector(".car");

let left = 0;
let topandbottom = 0;

let start;

const handleTurn = (event) => {
  const key = event.key;
  if (key === "ArrowUp" || key === "w") {
    $car.className = "car left";
    clearInterval(start);
    start = setInterval(() => {
      topandbottom -= 1;
      $car.style.top = `${topandbottom}px`;
    }, 16);
  } else if (key === "ArrowLeft" || key === "a") {
    $car.className = "car reverse";
    clearInterval(start);
    start = setInterval(() => {
      left -= 1;
      $car.style.left = `${left}px`;
    }, 16);
  } else if (key === "ArrowDown" || key === "s") {
    $car.className = "car right";
    clearInterval(start);
    start = setInterval(() => {
      topandbottom += 1;
      $car.style.top = `${topandbottom}px`;
    }, 16);
  } else if (key === "ArrowRight" || key === "d") {
    $car.className = "car forward";
    clearInterval(start);
    start = setInterval(() => {
      left += 1;
      $car.style.left = `${left}px`;
    }, 16);
  }
};

window.addEventListener("keydown", handleTurn);
