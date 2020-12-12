var $carContainer = document.querySelector('#car');
var $car = document.querySelector('.car-size');
var currentDirection;
var intervalId = null;
var $carContainerStyle = $carContainer.style;
var topElf = 0;
var leftShake = 0;
var emptyString = '';


function movedirection(key) {
  if (key === 'ArrowUp') {
    $car.className = 'car-size rotate-up';
    if(topElf !== 0) {
      topElf -= 1;
      $carContainer.style.left = leftShake.toString() + 'px';
      $carContainer.style.top = topElf.toString() + 'px';
      clearInterval(intervalId);
      console.log(topElf.toString());
    }
  }
  if (key === 'ArrowLeft') {
    $car.className = 'car-size rotate-left';
    if (leftShake !== 0) {
      leftShake -= 1;
      $carContainer.style.left = leftShake.toString() + 'px';
      $carContainer.style.top = topElf.toString() + 'px';
      clearInterval(intervalId);
    }
  }
  if (key === 'ArrowRight') {
    $car.className = 'car-size roate-right';
    if (leftShake !== 1000) {
      leftShake += 1;
      $carContainer.style.left = leftShake.toString() + 'px';
      $carContainer.style.top = topElf.toString() + 'px';
      clearInterval(intervalId);

    }
  }
  if (key === 'ArrowDown') {
    $car.className = 'car-size rotate-down';
    if (topElf !== 750) {
      topElf += 1;
      $carContainer.style.left = leftShake.toString() + 'px';
      $carContainer.style.top = topElf.toString() + 'px';
      clearInterval(intervalId);

    }
  }
  if(key === 'Space') {
    leftShake += 1;
    $carContainer.style.left = leftShake.toString()+'px';
    $carContainer.style.top = topElf.toString()+'px';
  }
}

function startCar() {
movedirection('Space');
}


document.addEventListener('keydown', function (e) {
  movedirection(e.key)
  if(e.code === 'Space') {
    intervalId = setInterval(startCar,16);
  }
});
