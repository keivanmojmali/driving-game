var $carContainer = document.querySelector('#car');
var $car = document.querySelector('.car-size');
var currentDirection;
var intervalId = null;
var $carContainerStyle = $carContainer.style;
var topElf = 0;
var leftShake = 0;
var emptyInside = '';


function movedirection(key) {
  if (key === 'ArrowUp') {
    $car.className = 'car-size rotate-up';
    if(topElf === 0) {
      return;
    } else {
      topElf -= 1;
      emptyInside = 'top:'+topElf + 'px;left:'+leftShake+'px;position:absolute';
      $carContainer.setAttribute('style',emptyInside);
      clearInterval(intervalId);
    }
  }
  if (key === 'ArrowLeft') {
    $car.className = 'car-size rotate-left';
    if (leftShake === 0) {
      return;
    } else {
      leftShake -= 1;
      emptyInside = 'top:' + topElf + 'px;left:' + leftShake + 'px;position:absolute';
      $carContainer.setAttribute('style', emptyInside);
      clearInterval(intervalId);
    }
  }
  if (key === 'ArrowRight') {
    $car.className = 'car-size roate-right';
    if (leftShake === 1000) {
      return;
    } else {
      leftShake += 1;
      emptyInside = 'top:' + topElf + 'px;left:' + leftShake + 'px;position:absolute';
      $carContainer.setAttribute('style', emptyInside);
      clearInterval(intervalId);
    }
  }
  if (key === 'ArrowDown') {
    $car.className = 'car-size rotate-down';
    if (topElf === 750) {
      return;
    } else {
      topElf += 1;
      emptyInside = 'top:' + topElf + 'px;left:' + leftShake + 'px;position:absolute';
      $carContainer.setAttribute('style', emptyInside);

    }
  }
  if(key === 'Space') {
    topElf += 1;
    leftShake += 1;
    emptyInside = 'top:' + topElf + 'px;left:' + leftShake + 'px;position:absolute';
    $carContainer.setAttribute('style', emptyInside);
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
