var $carContainer = document.querySelector('#car');
var $car = document.querySelector('.car-size');
var intervalId = null;
var topElf = 0;
var leftShake = 0;
var movementCheck = false;
var direction = 'Arrowright';

function rotate(key) {
  if (key === 'ArrowUp') {
    topElf--;
    $car.className = 'car-size rotate-up';
    direction = 'ArrowUp';
    $carContainer.style.left = leftShake + 'px';
    $carContainer.style.top = topElf + 'px';
  }
  if (key === 'ArrowRight') {
    leftShake++;
    $car.className = 'car-size rotate-right';
    direction = 'ArrowRight';
    $carContainer.style.left = leftShake + 'px';
    $carContainer.style.top = topElf + 'px';
  }
  if (key === 'ArrowLeft') {
    leftShake--;
    $car.className = 'car-size rotate-left';
    direction = 'ArrowLeft';
    $carContainer.style.left = leftShake + 'px';
    $carContainer.style.top = topElf + 'px';
  }
  if (key === 'ArrowDown') {
    topElf--;
    $car.className = 'car-size rotate-down';
    direction = 'ArrowDown';
    $carContainer.style.left = leftShake + 'px';
    $carContainer.style.top = topElf + 'px';
  }

}

function move() {
  rotate(direction);
}

document.addEventListener('keydown', function (e) {
  rotate(e.key);
  if (e.code === 'Space') {
    if (movementCheck === true) {
      clearInterval(intervalId);
      movementCheck = false;
    } else {
      intervalId = setInterval(move, 16);
      movementCheck = true;
    }

  }
});
