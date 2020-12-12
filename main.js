var $carContainer = document.querySelector('#car');
var $car = document.querySelector('.car-size');
var intervalId = null;
var topElf = 0;
var leftShake = 0;
var movementCheck = true;

function rotate(key) {
  if (key === 'ArrowUp') {
    $car.className = 'car-size rotate-up';
  }
  if (key === 'ArrowLeft') {
    $car.className = 'car-size rotate-left';
  }
  if (key === 'ArrowDown') {
    $car.className = 'car-size rotate-down';
  }
}

function move(key) {
  leftShake++;
  $carContainer.style.left = leftShake + 'px';
  $carContainer.style.top = topElf + 'px';
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
