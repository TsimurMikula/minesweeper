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
    const cardsRight = document.querySelector('#cards-right');
    
    function init () {
      const arr1 = [];
      const arr2 = [];
      const arr3 = [];

        while (true) {        
          let r = Math.floor(Math.random() * 8);      
          if (arr1.length == 3) break;
          else if (!arr1.includes(r)) arr1.push(r);
        }
        while (true) {        
          let r = Math.floor(Math.random() * 8);      
          if (arr2.length == 3) break;
          else if (!arr2.includes(r) && !arr1.includes(r)) arr2.push(r);
        }
        while (true) {        
          let r = Math.floor(Math.random() * 8);      
          if (arr3.length == 3) break;
          else if (!arr3.includes(r) && !arr2.includes(r)) arr3.push(r);
        }

        return [arr1, arr2, arr3];
    }

    console.log(init());


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

            const cardsLeftHtml = cardsLeft.innerHTML;
            document.querySelector('#cards-center').innerHTML = cardsLeftHtml;

          function init () {
            const arr1 = [];
            const arr2 = [];
            const arr3 = [];
            let r = Math.floor(Math.random() * 8);

              while (true) {              
                if (arr3.length == 3) break;
                else if (!arr3.includes(r)) arr3.push(r);
              }
              return arr3;
          }

          console.log(init());


            // Card1
            const card1 = document.createElement('div');
            card1.classList.add('ourfriends-card');

            const random1 = Math.floor(Math.random() * 8);

            const card1Img = document.createElement('img');
            card1Img.src = `${sliderCards[random1]['img']}`;
            card1.prepend(card1Img);

            const card1Name = document.createElement('h3');
            card1Name.classList.add('ourfriends-card__name');
            card1Name.innerText = sliderCards[random1]['name'];
            card1.append(card1Name);

            const card1Btn = document.createElement('button');
            card1Btn.classList.add('ourfriends-card__button');
            card1Btn.innerText = 'Learn more';
            card1.append(card1Btn);

            // Card2
            const card2 = document.createElement('div');
            card2.classList.add('ourfriends-card');

            const random2 = Math.floor(Math.random() * 8);

            const card2Img = document.createElement('img');
            card2Img.src = `${sliderCards[random2]['img']}`;
            card2.prepend(card2Img);

            const card2Name = document.createElement('h3');
            card2Name.classList.add('ourfriends-card__name');
            card2Name.innerText = sliderCards[random2]['name'];
            card2.append(card2Name);

            const card2Btn = document.createElement('button');
            card2Btn.classList.add('ourfriends-card__button');
            card2Btn.innerText = 'Learn more';
            card2.append(card2Btn);

             // Card3
             const card3 = document.createElement('div');
             card3.classList.add('ourfriends-card');
 
             const random3 = Math.floor(Math.random() * 8);
 
             const card3Img = document.createElement('img');
             card3Img.src = `${sliderCards[random3]['img']}`;
             card3.prepend(card3Img);
 
             const card3Name = document.createElement('h3');
             card3Name.classList.add('ourfriends-card__name');
             card3Name.innerText = sliderCards[random3]['name'];
             card3.append(card3Name);
 
             const card3Btn = document.createElement('button');
             card3Btn.classList.add('ourfriends-card__button');
             card3Btn.innerText = 'Learn more';
             card3.append(card3Btn);


            cardsLeft.innerHTML = '';
            cardsLeft.appendChild(card1);
            cardsLeft.appendChild(card2);
            cardsLeft.appendChild(card3);

        } else {
            slider.classList.remove('slider-anim-right');

            const cardsRightHtml = cardsRight.innerHTML;

            document.querySelector('#cards-center').innerHTML = cardsRightHtml;

              // Card1
              const card1 = document.createElement('div');
              card1.classList.add('ourfriends-card');
  
              const random1 = Math.floor(Math.random() * 8);
  
              const card1Img = document.createElement('img');
              card1Img.src = `${sliderCards[random1]['img']}`;
              card1.prepend(card1Img);
  
              const card1Name = document.createElement('h3');
              card1Name.classList.add('ourfriends-card__name');
              card1Name.innerText = sliderCards[random1]['name'];
              card1.append(card1Name);
  
              const card1Btn = document.createElement('button');
              card1Btn.classList.add('ourfriends-card__button');
              card1Btn.innerText = 'Learn more';
              card1.append(card1Btn);
  
              // Card2
              const card2 = document.createElement('div');
              card2.classList.add('ourfriends-card');
  
              const random2 = Math.floor(Math.random() * 8);
  
              const card2Img = document.createElement('img');
              card2Img.src = `${sliderCards[random2]['img']}`;
              card2.prepend(card2Img);
  
              const card2Name = document.createElement('h3');
              card2Name.classList.add('ourfriends-card__name');
              card2Name.innerText = sliderCards[random2]['name'];
              card2.append(card2Name);
  
              const card2Btn = document.createElement('button');
              card2Btn.classList.add('ourfriends-card__button');
              card2Btn.innerText = 'Learn more';
              card2.append(card2Btn);
  
               // Card3
               const card3 = document.createElement('div');
               card3.classList.add('ourfriends-card');
   
               const random3 = Math.floor(Math.random() * 8);
   
               const card3Img = document.createElement('img');
               card3Img.src = `${sliderCards[random3]['img']}`;
               card3.prepend(card3Img);
   
               const card3Name = document.createElement('h3');
               card3Name.classList.add('ourfriends-card__name');
               card3Name.innerText = sliderCards[random3]['name'];
               card3.append(card3Name);
   
               const card3Btn = document.createElement('button');
               card3Btn.classList.add('ourfriends-card__button');
               card3Btn.innerText = 'Learn more';
               card3.append(card3Btn);
  
  
              cardsRight.innerHTML = '';
              cardsRight.appendChild(card1);
              cardsRight.appendChild(card2);
              cardsRight.appendChild(card3);
        }

        btn_left.addEventListener('click', animLeft);
        btn_right.addEventListener('click', animRight);
    });

}());

//Slider end


