var $carContainer = document.querySelector('#car');
var $car = document.querySelector('.car-size');
var currentDirection;

function movedirection(key) {
  if (key === 'ArrowUp') {
    $car.className = 'car-size rotate-up';
  }
  if (key === 'ArrowLeft') {
    $car.className = 'car-size rotate-left';
  }
  if (key === 'ArrowRight') {
    $car.className = 'car-size roate-right';
  }
  if (key === 'ArrowDown') {
    $car.className = 'car-size rotate-down';
  }
}

document.addEventListener('keydown', function (e) {
  movedirection(e.key)
});
