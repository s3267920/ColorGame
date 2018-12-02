(function() {
  let number = 6;
  let colors = firstRandomColors(number);
  let squares = document.querySelectorAll('.square');
  let colorDisplay = document.getElementById('colorDisplay');
  let pickedColor = randomColor();
  let message = document.getElementById('message');
  let header = document.querySelector('header');

  let status = document.getElementById('status');
  let reset = document.getElementById('reset');
  colorDisplay.textContent = pickedColor.toUpperCase();
  function resetColor() {
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    addColorToSquares();
    header.style.backgroundColor = 'rgb(70, 130, 180)';
    console.log(colors);
  }
  function addColorToSquares() {
    for (let i = 0; i < squares.length; i++) {
      //加入顏色到方塊中
      squares[i].style.backgroundColor = colors[i];
    }
  }
  reset.addEventListener('click', function(color) {
    colors = firstRandomColors(number);
    message.textContent = '';
    resetColor(number);
    reset.textContent = 'NEW COLORS';
  });

  for (let i = 0; i < squares.length; i++) {
    //加入顏色到方塊中
    addColorToSquares();
    //加入監聽事件
    squares[i].addEventListener('click', function() {
      //抓取選到方塊的顏色
      let clickColor = this.style.backgroundColor;
      clickColor === pickedColor
        ? ((squares[i].style.backgroundColor = pickedColor),
          (message.textContent = 'Correct!!'),
          changeColors(clickColor),
          (header.style.backgroundColor = clickColor),
          (reset.textContent = 'PLAY AGAIN?'))
        : ((this.style.backgroundColor = '#000'),
          (message.textContent = 'Try Again!'),
          (header.style.backgroundColor = 'rgb(70, 130, 180)'));
    });
  }
  function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
      //讓全部的方塊都變成選中的顏色
      squares[i].style.backgroundColor = color;
    }
  }
  function randomColor() {
    let num = Math.floor(Math.random() * colors.length);
    return colors[num];
  }
  function firstRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      //get random color and push into array
      arr.push(randomNewColor());
    }
    return arr;
  }
  function randomNewColor() {
    // 獲得red 從0 到255
    let r = Math.floor(Math.random() * 256);
    // 獲得green 從0 到255
    let g = Math.floor(Math.random() * 256);
    // 獲得blue 從0 到255
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  status.addEventListener('click', function(e) {
    let easy = document.getElementById('easy');
    let hard = document.getElementById('hard');
    e.preventDefault;
    if (e.target === hard) {
      hard.classList.add('hasCheck');
      easy.classList.remove('hasCheck');
      number = 6;
      colors = firstRandomColors(number);
      resetColor();
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.display = 'flex';
        addColorToSquares();
      }
    } else {
      hard.classList.remove('hasCheck');
      easy.classList.add('hasCheck');
      number = 3;
      colors = firstRandomColors(number);
      resetColor();
      for (let i = 0; i < squares.length; i++) {
        colors[i] ? addColorToSquares() : (squares[i].style.display = 'none');
      }
    }
  });
})();
