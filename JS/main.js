const $car = document.querySelector(".car");

let left = 0;
let topandbottom = 0;
let moving = "stopped";

let start;

const handleTurn = (event) => {
  const key = event.key;
  const direction = key.slice(5).toLowerCase();
  if (moving !== "stopped") {
    moving = "stopped";
    $car.className = `car ${direction}`;
    clearInterval(start);
  } else if (key === "ArrowUp" || key === "w") {
    moving = "running";
    $car.className = "car up";
    start = setInterval(() => {
      topandbottom -= 1;
      $car.style.top = `${topandbottom}px`;
    }, 16);
  } else if (key === "ArrowLeft" || key === "a") {
    moving = "running";
    $car.className = "car left";
    start = setInterval(() => {
      left -= 1;
      $car.style.left = `${left}px`;
    }, 16);
  } else if (key === "ArrowDown" || key === "s") {
    moving = "running";
    $car.className = "car down";
    start = setInterval(() => {
      topandbottom += 1;
      $car.style.top = `${topandbottom}px`;
    }, 16);
  } else if (key === "ArrowRight" || key === "d") {
    moving = "running";
    $car.className = "car right";
    start = setInterval(() => {
      left += 1;
      $car.style.left = `${left}px`;
    }, 16);
  }
};

window.addEventListener("keydown", handleTurn);
