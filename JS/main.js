const $car = document.querySelector(".car");

const handleTurn = (event) => {
  const key = event.key;
  console.log(key);
  if (key === "ArrowUp" || key === "w") {
    $car.className = "car left";
  } else if (key === "ArrowLeft" || key === "a") {
    $car.className = "car reverse";
  } else if (key === "ArrowDown" || key === "s") {
    $car.className = "car right";
  } else if (key === "ArrowRight" || key === "d") {
    $car.className = "car forward";
  }
};

window.addEventListener("keydown", handleTurn);
