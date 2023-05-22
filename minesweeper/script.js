function createElement(tagName, className) {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
}

const header = createElement('header', 'header');
header.textContent = 'Minesweeper 10x10';
document.body.append(header);

const wrapP = createElement('div', 'wrap-panel');
const panel = createElement('div', 'panel');
const newGame = createElement('button', 'panel__new-game');
newGame.textContent = 'New game';
panel.append(newGame);
const timerGame = createElement('div', 'panel__timer-game');
timerGame.textContent = `Time: 0s`;
panel.append(timerGame);
const soundToggle = createElement('button', 'panel__sound-toggle');
soundToggle.textContent = '🔊';
panel.append(soundToggle);
const clickCount = createElement('div', 'panel__click-count');
clickCount.textContent = `Click: 0`;
panel.append(clickCount);
const mineRemains = createElement('div', 'panel__mine-remains');
mineRemains.textContent = `Mine: 10`;
panel.append(mineRemains);
const flagCount = createElement('div', 'panel__flag-count');
flagCount.textContent = `Flag: 0`;
panel.append(flagCount);
wrapP.append(panel);
document.body.append(wrapP);

const audioClick = createElement('audio', 'audio-click');
audioClick.preload = 'auto';
audioClick.src = './assets/audio/sound-effects-finger.mp3'
document.body.append(audioClick);
const audioMine = createElement('audio', 'audio-mine');
audioMine.preload = 'auto';
audioMine.src = './assets/audio/370b925a30aca01.mp3'
document.body.append(audioMine);
const audioWin = createElement('audio', 'audio-win');
audioWin.preload = 'auto';
audioWin.src = './assets/audio/success-fanfare-trumpets-6185.mp3'
document.body.append(audioWin);

const soundClick = document.querySelector('.audio-click');
const soundMine = document.querySelector('.audio-mine');
const soundWin = document.querySelector('.audio-win');

const nG = document.querySelector('.panel__new-game');
  nG.addEventListener('click',  () => {
    while (minesweeper.firstChild) {
      minesweeper.firstChild.remove();
    } 
    start(10, 10, 10);
  });
let soundGame = true;

const sT = document.querySelector('.panel__sound-toggle');
  sT.addEventListener('click',  () => {
    soundGame = !soundGame;
    if (soundGame) {
      soundToggle.textContent = '🔊';
    } else {
      soundToggle.textContent = '🔈';
    }
  });

const wrapMn = createElement('div', 'wrap-minesweeper');
const minesweeper = createElement('div', 'minesweeper');

function start(w, h, mine) {
  for (let i = 0; i < w*h; i++) {
    const btnBox = createElement('button', 'minesweeper__btnBox');
    minesweeper.append(btnBox);
  }
  wrapMn.append(minesweeper);
  document.body.append(wrapMn);

  const ms = document.querySelector('.minesweeper');
  const msGrid = [...ms.children];
  
  let countCell = w*h;
  let n = 0;
  let t = 0;
  let f = 0;
  const cellsFlag = [];

  const arr = [];
  for (let i = 0; i < w*h; i++) {
    arr.push(i);
  }
  const posMine = arr.sort(() => Math.random() - 0.5).slice(0, mine);

  const btnBoxAll = document.querySelectorAll('.minesweeper__btnBox');
  btnBoxAll.forEach(btnBox => btnBox.addEventListener('click',  time));
    
  function time() {
    let timer = setInterval(() => {
      t++;
      timerGame.textContent = `Time: ${t}s`;
    }, 1000);
    nG.addEventListener('click',  () => clearInterval(timer));
    btnBoxAll.forEach(btnBox => btnBox.removeEventListener('click',  time)); 
    return t;
  }

  ms.addEventListener('contextmenu',  (e) => {
    e.preventDefault();
    if (!e.target.closest('button')) return;
    if (soundToggle.textContent == '🔊') soundClickPlay();
    n++;
    f++;
    let mine = 10 - f;
    clickCount.textContent = `Click: ${n}`;
    mineRemains.textContent = `Mine: ${mine}`;
    flagCount.textContent = `Flag: ${f}`;

    if (e.target.dataset.flag === 'flag' && e.target.textContent == '🚩') {
      e.target.disabled = false;
      e.target.textContent = ' ';
      flagCount.textContent = `Flag: ${f = f-1}`;
      mineRemains.textContent = `Mine: ${mine = mine+1}`;
    }
    e.target.textContent = '🚩';
    e.target.dataset.flag = 'flag'
    e.target.disabled = true;
  });

  ms.addEventListener('click',  (e) => {
    if (!e.target.closest('button')) return;
    if (soundToggle.textContent == '🔊') soundClickPlay();
    const index = msGrid.indexOf(e.target);
    const column = index % w;
    const row = (index - column) / w;
    n++;
    clickCount.textContent = `Click: ${n}`;
    openCell(row, column);
  });
  
  function openCell(row, column) {
    if (!isCountMineValid(row, column)) return;
    
    const index = row * w + column;
    const msCell = msGrid[index];

    if (msCell.disabled == true) return;
    msCell.disabled = true;
    countCell--;
    if (countCell == mine) setTimeout(() => {
      if (soundToggle.textContent == '🔊') soundWinPlay();
      alert(`Ура! Вы нашли все мины за ${time()} секунд и ${n} ходов!`)
    }, 1000);
    if (isMne(row, column) && n == 1) {
      msCell.textContent = countNearbyMine(row, column);
      if (soundToggle.textContent == '🔊') soundClickPlay();
      if (countNearbyMine(row, column) == 1 || countNearbyMine(row, column) == 5) msGrid[index].classList.add('minesweeper__btnBox_one-blue');
      if (countNearbyMine(row, column) == 2 || countNearbyMine(row, column) == 6) msGrid[index].classList.add('minesweeper__btnBox_two-green');
      if (countNearbyMine(row, column) == 3 || countNearbyMine(row, column) == 7) msGrid[index].classList.add('minesweeper__btnBox_three-red');
      if (countNearbyMine(row, column) == 4 || countNearbyMine(row, column) == 8) msGrid[index].classList.add('minesweeper__btnBox_four-brown');
      return;
    }
    if (isMne(row, column)) {
      soundClickStop()
      if (soundToggle.textContent == '🔊') soundMinePlay();
      msCell.textContent = '💥';
      setTimeout(() => alert('Игра окончена. Попробуйте еще раз'), 1000);
      return;
    }
    if (countNearbyMine(row, column) > 0) {
      msCell.textContent = countNearbyMine(row, column);
      if (countNearbyMine(row, column) == 1 || countNearbyMine(row, column) == 5) msGrid[index].classList.add('minesweeper__btnBox_one-blue');
      if (countNearbyMine(row, column) == 2 || countNearbyMine(row, column) == 6) msGrid[index].classList.add('minesweeper__btnBox_two-green');
      if (countNearbyMine(row, column) == 3 || countNearbyMine(row, column) == 7) msGrid[index].classList.add('minesweeper__btnBox_three-red');
      if (countNearbyMine(row, column) == 4 || countNearbyMine(row, column) == 8) msGrid[index].classList.add('minesweeper__btnBox_four-brown');
      return;
    } else {
      for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
          openCell(row + y, column + x);
        }
      }
    }  
  }

  function countNearbyMine(row, column) {
    let sum = 0;
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        if (isMne(row + y, column + x)) sum++;
      }
    }
    return sum;
  }

  function isCountMineValid (row, column) {
    if (row >= 0 && column >=0 && row < h && column < w) return true;
  }

  function isMne(row, column) {
    const index = row * w + column;
    if (!isCountMineValid(row, column)) return false;
    if (posMine.includes(index)) return true;
  } 
  
  function soundClickPlay() {
    soundClick.play();
  }

  function soundClickStop() {
    soundClick.pause();
  }

  function soundMinePlay() {
    soundMine.play();
  }

  function soundWinPlay() {
    soundWin.play();
  }
}
start(10, 10, 10);