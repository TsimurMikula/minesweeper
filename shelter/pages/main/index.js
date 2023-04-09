console.log('1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8\n9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n10. Верстка обеих страниц валидная: +8');

//Burger menu start
(function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header-nav');
  const blackOut = document.querySelectorAll('.header-logo, .notonly');
  const noScroll = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.header-item__link');
    
  burger.addEventListener('click', () => {
    menu.classList.toggle('header-nav-active');
    burger.classList.toggle('burger-active');
    blackOut.forEach(e => e.classList.toggle('blackOut-effect'));
    noScroll.classList.toggle('body-no-scroll');
  });
  
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener('click', () => {
      menu.classList.remove('header-nav-active');
      burger.classList.toggle('burger-active');
      blackOut.forEach(e => e.classList.remove('blackOut-effect'));
      noScroll.classList.remove('body-no-scroll');
    });    
  }

  document.addEventListener("click", (e) => {
    if (menu.classList.contains('header-nav-active') && !burger.contains(e.target)  && !menu.contains(e.target)) {
      menu.classList.remove('header-nav-active');
      burger.classList.toggle('burger-active');
      blackOut.forEach(e => e.classList.remove('blackOut-effect'));
      noScroll.classList.remove('body-no-scroll');
    }
  });
}());
//Burger menu end

//Slider start
import sliderCards from "./main.json" assert { type: "json" };

(function () {
  const btn_left = document.querySelector('.arrow-left');
  const btn_right = document.querySelector('.arrow-right');
  const slider = document.querySelector('.slider');
  const cardsLeft = document.querySelector('#cards-left');
  const cardsCenter = document.querySelector('#cards-center');
  const cardsRight = document.querySelector('#cards-right');

  function init () {  
    let arr3 = [];
    while (true) {        
      let r = Math.floor(Math.random() * 8);      
      if (arr3.length == 3) break;
      else if (!arr3.includes(r)) arr3.push(r);
    }

    let arr2 = arr3.concat();
    arr3 = [];
    while (true) {        
      let r = Math.floor(Math.random() * 8);      
      if (arr3.length == 3) break;
      else if (!arr3.includes(r) && !arr2.includes(r)) arr3.push(r);
    }

    let arr1 = arr2.concat();
    arr2 = [];

    arr2 = arr3.concat();
    arr3 = [];
    while (true) {        
      let r = Math.floor(Math.random() * 8);      
      if (arr3.length == 3) break;
      else if (!arr3.includes(r) && !arr2.includes(r)) arr3.push(r);
    }

    return [arr1, arr2, arr3];
  }

  let randomCards = init();
  console.log(randomCards)

  const createCards = (i, j) => {
    const card = document.createElement('div');
    card.classList.add('ourfriends-card');

    const cardImg = document.createElement('img');
    cardImg.src = `${sliderCards[randomCards[i][j]]['img']}`;
    card.prepend(cardImg);

    const cardName = document.createElement('h3');
    cardName.classList.add('ourfriends-card__name');
    cardName.innerText = sliderCards[randomCards[i][j]]['name'];
    card.setAttribute('data-card', sliderCards[randomCards[i][j]]['id']);
    card.append(cardName);

    const cardBtn = document.createElement('button');
    cardBtn.classList.add('ourfriends-card__button');
    cardBtn.innerText = 'Learn more';
    card.append(cardBtn);
    
    return card;
  }

  cardsCenter.innerHTML = '';
  for (let j = 0; j < 3; j++) {
    const card = createCards(1, j);
    cardsCenter.appendChild(card);
  }    
   
  const animLeft = () => {
    slider.classList.add('slider-anim-left');
    btn_left.removeEventListener('click', animLeft);
    btn_right.removeEventListener('click', animRight);
  }
  const animRight = () => {
    slider.classList.add('slider-anim-right');
    btn_right.removeEventListener('click', animRight);
    btn_left.removeEventListener('click', animLeft);
  }

  btn_left.addEventListener('click', animLeft);
  btn_right.addEventListener('click', animRight);

 
  slider.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'anim-left') {
      slider.classList.remove('slider-anim-left');
      document.querySelector('#cards-center').innerHTML = cardsLeft.innerHTML;

      cardsLeft.innerHTML = '';
      for (let j = 0; j < 3; j++) {
        const card = createCards(0, j);
        cardsLeft.appendChild(card);
      }  
    } else {
      slider.classList.remove('slider-anim-right');
      document.querySelector('#cards-center').innerHTML = cardsRight.innerHTML;

      cardsRight.innerHTML = '';
      for (let j = 0; j < 3; j++) {
        const card = createCards(2, j);
        cardsRight.appendChild(card);
      }
    }

    btn_left.addEventListener('click', animLeft);
    btn_right.addEventListener('click', animRight);
  });
}());
//Slider end

//Popup start
(function () {

  const cards = document.querySelectorAll('.ourfriends-card');
  const popupCards = document.querySelector('.popup-cards');
  const contents = document.querySelectorAll('.popup-content');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      let cardId = e.currentTarget.getAttribute('data-card');
      document.querySelector(`[data-popup = "${cardId}"]`).classList.add('popup-active');

    })
  })
  
  contents.forEach(content => {
    content.addEventListener('click', (e) => {

      document.querySelector(`[data-popup = "${cardId}"]`).classList.remove('popup-active');

  })
})

}());
//Popup end
