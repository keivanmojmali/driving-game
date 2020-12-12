var $carContainer = document.querySelector('#car');
var $car = document.querySelector('.car-size');
var intervalId = null;
var topElf = 0;
var leftShake = 0;
var movementCheck = 0;

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
  if (movementCheck % 2 !== 0) {
    leftShake++;
    $carContainer.style.left = leftShake + 'px';
    $carContainer.style.top = topElf + 'px';
  } else {
    clearInterval(intervalId);
  }
}

document.addEventListener('keydown', function (e) {
  rotate(e.key);
  if (e.code === 'Space') {
    intervalId = setInterval(move, 16);
    movementCheck++;
  }
});
