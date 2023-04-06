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

    function leftwards(arr1, arr2, arr3) {
      arr3 = [];
      arr3 = arr2.concat();
      arr2 = [];
      arr2 = arr1.concat();
      arr1 = [];

      while (true) {        
        let r = Math.floor(Math.random() * 8);      
        if (arr1.length == 3) break;
        else if (!arr1.includes(r) && !arr2.includes(r)) arr1.push(r);
      }

      return [arr1, arr2, arr3];
    }

    function rightwards(arr1, arr2, arr3) {
      arr1 = [];
      arr1 = arr2.concat();
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

    function backToLeft(arr1, arr2, arr3) {
      let arrTransit = [];
      arrTransit = arr1.concat();
      arr1 = [];
      arr1 = arr2.concat();
      arr2 = [];
      arr2 = arrTransit.concat();
      arr3 = [];

      while (true) {        
        let r = Math.floor(Math.random() * 8);      
        if (arr3.length == 3) break;
        else if (!arr3.includes(r) && !arr2.includes(r)) arr3.push(r);
      }

      return [arr1, arr2, arr3];
    }

    function backToRight(arr1, arr2, arr3) {
      let arrTransit = [];
      arrTransit = arr3.concat();
      arr3 = [];
      arr3 = arr2.concat();
      arr2 = [];
      arr2 = arrTransit.concat();
      arr1 = [];

      while (true) {        
        let r = Math.floor(Math.random() * 8);      
        if (arr1.length == 3) break;
        else if (!arr1.includes(r) && !arr2.includes(r)) arr1.push(r);
      }

      return [arr1, arr2, arr3];
    }

    let randomCards = init();
    //let leftwardsCards = leftwards();
    //let rightwardsCards = rightwards();
    //let backToLeftCards = backToLeft();
    //let backToRightCards = backToRight();

    // Card4
    const card4 = document.createElement('div');
    card4.classList.add('ourfriends-card');

    const card4Img = document.createElement('img');
    card4Img.src = `${sliderCards[randomCards[1][0]]['img']}`;
    card4.prepend(card4Img);

    const card4Name = document.createElement('h3');
    card4Name.classList.add('ourfriends-card__name');
    card4Name.innerText = sliderCards[randomCards[1][0]]['name'];
    card4.append(card4Name);

    const card4Btn = document.createElement('button');
    card4Btn.classList.add('ourfriends-card__button');
    card4Btn.innerText = 'Learn more';
    card4.append(card4Btn);

    // Card5
    const card5 = document.createElement('div');
    card5.classList.add('ourfriends-card');

    const card5Img = document.createElement('img');
    card5Img.src = `${sliderCards[randomCards[1][1]]['img']}`;
    card5.prepend(card5Img);

    const card5Name = document.createElement('h3');
    card5Name.classList.add('ourfriends-card__name');
    card5Name.innerText = sliderCards[randomCards[1][1]]['name'];
    card5.append(card5Name);

    const card5Btn = document.createElement('button');
    card5Btn.classList.add('ourfriends-card__button');
    card5Btn.innerText = 'Learn more';
    card5.append(card5Btn);

     // Card6
     const card6 = document.createElement('div');
     card6.classList.add('ourfriends-card');

     const card6Img = document.createElement('img');
     card6Img.src = `${sliderCards[randomCards[1][2]]['img']}`;
     card6.prepend(card6Img);

     const card6Name = document.createElement('h3');
     card6Name.classList.add('ourfriends-card__name');
     card6Name.innerText = sliderCards[randomCards[1][2]]['name'];
     card6.append(card6Name);

     const card6Btn = document.createElement('button');
     card6Btn.classList.add('ourfriends-card__button');
     card6Btn.innerText = 'Learn more';
     card6.append(card6Btn);


    cardsCenter.innerHTML = '';
    cardsCenter.appendChild(card4);
    cardsCenter.appendChild(card5);
    cardsCenter.appendChild(card6);

    
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


        // Card1
    const card1 = document.createElement('div');
    card1.classList.add('ourfriends-card');

    const card1Img = document.createElement('img');
    card1Img.src = `${sliderCards[randomCards[0][0]]['img']}`;
    card1.prepend(card1Img);

    const card1Name = document.createElement('h3');
    card1Name.classList.add('ourfriends-card__name');
    card1Name.innerText = sliderCards[randomCards[0][0]]['name'];
    card1.append(card1Name);

    const card1Btn = document.createElement('button');
    card1Btn.classList.add('ourfriends-card__button');
    card1Btn.innerText = 'Learn more';
    card1.append(card1Btn);

    // Card2
    const card2 = document.createElement('div');
    card2.classList.add('ourfriends-card');

    const card2Img = document.createElement('img');
    card2Img.src = `${sliderCards[randomCards[0][1]]['img']}`;
    card2.prepend(card2Img);

    const card2Name = document.createElement('h3');
    card2Name.classList.add('ourfriends-card__name');
    card2Name.innerText = sliderCards[randomCards[0][1]]['name'];
    card2.append(card2Name);

    const card2Btn = document.createElement('button');
    card2Btn.classList.add('ourfriends-card__button');
    card2Btn.innerText = 'Learn more';
    card2.append(card2Btn);

     // Card3
     const card3 = document.createElement('div');
     card3.classList.add('ourfriends-card');

     const card3Img = document.createElement('img');
     card3Img.src = `${sliderCards[randomCards[0][2]]['img']}`;
     card3.prepend(card3Img);

     const card3Name = document.createElement('h3');
     card3Name.classList.add('ourfriends-card__name');
     card3Name.innerText = sliderCards[randomCards[0][2]]['name'];
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

             // Card7
    const card7 = document.createElement('div');
    card7.classList.add('ourfriends-card');

    const card7Img = document.createElement('img');
    card7Img.src = `${sliderCards[randomCards[2][0]]['img']}`;
    card7.prepend(card7Img);

    const card7Name = document.createElement('h3');
    card7Name.classList.add('ourfriends-card__name');
    card7Name.innerText = sliderCards[randomCards[2][0]]['name'];
    card7.append(card7Name);

    const card7Btn = document.createElement('button');
    card7Btn.classList.add('ourfriends-card__button');
    card7Btn.innerText = 'Learn more';
    card7.append(card7Btn);

    // Card8
    const card8 = document.createElement('div');
    card8.classList.add('ourfriends-card');

    const card8Img = document.createElement('img');
    card8Img.src = `${sliderCards[randomCards[2][1]]['img']}`;
    card8.prepend(card8Img);

    const card8Name = document.createElement('h3');
    card8Name.classList.add('ourfriends-card__name');
    card8Name.innerText = sliderCards[randomCards[2][1]]['name'];
    card8.append(card8Name);

    const card8Btn = document.createElement('button');
    card8Btn.classList.add('ourfriends-card__button');
    card8Btn.innerText = 'Learn more';
    card8.append(card8Btn);

     // Card9
     const card9 = document.createElement('div');
     card9.classList.add('ourfriends-card');

     const card9Img = document.createElement('img');
     card9Img.src = `${sliderCards[randomCards[2][2]]['img']}`;
     card9.prepend(card9Img);

     const card9Name = document.createElement('h3');
     card9Name.classList.add('ourfriends-card__name');
     card9Name.innerText = sliderCards[randomCards[2][2]]['name'];
     card9.append(card9Name);

     const card9Btn = document.createElement('button');
     card9Btn.classList.add('ourfriends-card__button');
     card9Btn.innerText = 'Learn more';
     card9.append(card9Btn);

    cardsRight.innerHTML = '';
    cardsRight.appendChild(card7);
    cardsRight.appendChild(card8);
    cardsRight.appendChild(card9);
        }

        btn_left.addEventListener('click', animLeft);
        btn_right.addEventListener('click', animRight);
    });

}());

//Slider end

//Popup start

(function () {
  const cards = document.querySelectorAll('.ourfriends-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      serviceButton.classList.toggle('service__button_item-active')
  })
})  

}());

//Popup end


