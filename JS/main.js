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
  console.log(direction);
  if (spaceKey === "Space") {
    moving = "stopped";
    $car.className = `car ${direction}`;
    clearInterval(start);
    if (direction === "right") {
      setTimeout(() => {
        moving = "running";
        start = setInterval(() => {
          left += 2;
          $car.style.left = `${left}px`;
        }, 16);
      }, 3000);
    } else if (direction === "up") {
      setTimeout(() => {
        start = setInterval(() => {
          moving = "running";
          topandbottom -= 2;
          $car.style.top = `${topandbottom}px`;
        }, 16);
      }, 3000);
    } else if (direction === "left") {
      setTimeout(() => {
        start = setInterval(() => {
          moving = "running";
          left -= 2;
          $car.style.left = `${left}px`;
        }, 16);
      }, 3000);
    } else if (direction === "down") {
      setTimeout(() => {
        start = setInterval(() => {
          moving = "running";
          topandbottom += 2;
          $car.style.top = `${topandbottom}px`;
        }, 16);
      }, 3000);
    }
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
