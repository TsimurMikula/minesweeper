function createElement(tagName, className) {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
}

const header = createElement('header', 'header');
header.textContent = 'Minesweeper';
document.body.append(header);

const panel = createElement('div', 'panel');
const newGame = createElement('button', 'panel__new-game');
newGame.textContent = 'New game';
panel.append(newGame);
const timerGame = createElement('div', 'panel__timer-game');
panel.append(timerGame);
const clickCount = createElement('div', 'panel__click-count');
panel.append(clickCount);
document.body.append(panel);

const audioClick = createElement('audio', 'audio-click');
audioClick.preload = 'auto';
audioClick.src = './assets/audio/sound-effects-finger.mp3'
document.body.append(audioClick);
const audioMine = createElement('audio', 'audio-mine');
audioMine.preload = 'auto';
audioMine.src = './assets/audio/370b925a30aca01.mp3'
document.body.append(audioMine);

const soundClick = document.querySelector('.audio-click');
const soundMine = document.querySelector('.audio-mine');

