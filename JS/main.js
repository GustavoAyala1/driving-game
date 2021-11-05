const $car = document.querySelector(".car");

let left = 0;
let topandbottom = 0;
let moving = "stopped";
let direction;

let start;

const handleTurn = (event) => {
  const key = event.key;
  const spaceKey = event.code;
  if (spaceKey !== "Space") {
    direction = key.slice(5).toLowerCase();
  }

  if (spaceKey === "Space") {
    moving = "stopped";
    $car.className = `car ${direction}`;
    clearInterval(start);
  } else if (key === "ArrowUp") {
    moving = "running";
    $car.className = "car up";
    clearInterval(start);
    start = setInterval(() => {
      topandbottom -= 2;
      $car.style.top = `${topandbottom}px`;
    }, 16);
  } else if (key === "ArrowLeft") {
    moving = "running";
    $car.className = "car left";
    clearInterval(start);
    start = setInterval(() => {
      left -= 2;
      $car.style.left = `${left}px`;
    }, 16);
  } else if (key === "ArrowDown") {
    moving = "running";
    $car.className = "car down";
    clearInterval(start);
    start = setInterval(() => {
      topandbottom += 2;
      $car.style.top = `${topandbottom}px`;
    }, 16);
  } else if (key === "ArrowRight") {
    moving = "running";
    $car.className = "car right";
    clearInterval(start);
    start = setInterval(() => {
      left += 2;
      $car.style.left = `${left}px`;
    }, 16);
  }
};

window.addEventListener("keydown", handleTurn);
