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

(function () {
    const btn_left = document.querySelector('.arrow-left');
    const btn_right = document.querySelector('.arrow-right');
    const slider = document.querySelector('.slider');
    const cardsLeft = document.querySelector('#cards-left');
    const cardsRight = document.querySelector('#cards-right');
    


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
            const arrCards = [
                {
                  "name": "Jennifer",
                  "img": "./assets/img/jennifer.png",
                  "type": "Dog",
                  "breed": "Labrador",
                  "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
                  "age": "2 months",
                  "inoculations": ["none"],
                  "diseases": ["none"],
                  "parasites": ["none"]
                },
                {
                  "name": "Sophia",
                  "img": "./assets/img/sophia.png",
                  "type": "Dog",
                  "breed": "Shih tzu",
                  "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
                  "age": "1 month",
                  "inoculations": ["parvovirus"],
                  "diseases": ["none"],
                  "parasites": ["none"]
                },
                {
                  "name": "Woody",
                  "img": "./assets/img/woody.png",
                  "type": "Dog",
                  "breed": "Golden Retriever",
                  "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
                  "age": "3 years 6 months",
                  "inoculations": ["adenovirus", "distemper"],
                  "diseases": ["right back leg mobility reduced"],
                  "parasites": ["none"]
                },
                {
                  "name": "Scarlett",
                  "img": "./assets/img/scarlett.png",
                  "type": "Dog",
                  "breed": "Jack Russell Terrier",
                  "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
                  "age": "3 months",
                  "inoculations": ["parainfluenza"],
                  "diseases": ["none"],
                  "parasites": ["none"]
                },
                {
                  "name": "Katrine",
                  "img": "./assets/img/katrine.png",
                  "type": "Cat",
                  "breed": "British Shorthair",
                  "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
                  "age": "6 months",
                  "inoculations": ["panleukopenia"],
                  "diseases": ["none"],
                  "parasites": ["none"]
                },
                {
                  "name": "Timmy",
                  "img": "./assets/img/timmy.png",
                  "type": "Cat",
                  "breed": "British Shorthair",
                  "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
                  "age": "2 years 3 months",
                  "inoculations": ["calicivirus", "viral rhinotracheitis"],
                  "diseases": ["kidney stones"],
                  "parasites": ["none"]
                },
                {
                  "name": "Freddie",
                  "img": "./assets/img/freddie.png",
                  "type": "Cat",
                  "breed": "British Shorthair",
                  "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
                  "age": "2 months",
                  "inoculations": ["rabies"],
                  "diseases": ["none"],
                  "parasites": ["none"]
                },
                {
                  "name": "Charly",
                  "img": "./assets/img/charly.png",
                  "type": "Dog",
                  "breed": "Jack Russell Terrier",
                  "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
                  "age": "8 years",
                  "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
                  "diseases": ["deafness", "blindness"],
                  "parasites": ["lice", "fleas"]
                }
              ]


        if (animationEvent.animationName === 'anim-left') {
            slider.classList.remove('slider-anim-left');

            const cardsLeftHtml = cardsLeft.innerHTML;
            document.querySelector('#cards-center').innerHTML = cardsLeftHtml;

            // Card1
            const card1 = document.createElement('div');
            card1.classList.add('ourfriends-card');

            const random1 = Math.floor(Math.random() * 8);

            const card1Img = document.createElement('img');
            card1Img.src = `${arrCards[random1]['img']}`;
            card1.prepend(card1Img);

            const card1Name = document.createElement('h3');
            card1Name.classList.add('ourfriends-card__name');
            card1Name.innerText = arrCards[random1]['name'];
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
            card2Img.src = `${arrCards[random2]['img']}`;
            card2.prepend(card2Img);

            const card2Name = document.createElement('h3');
            card2Name.classList.add('ourfriends-card__name');
            card2Name.innerText = arrCards[random2]['name'];
            card2.append(card2Name);

            const card2Btn = document.createElement('button');
            card2Btn.classList.add('ourfriends-card__button');
            card2Btn.innerText = 'Learn more';
            card2.append(card2Btn);

             // Card2
             const card3 = document.createElement('div');
             card3.classList.add('ourfriends-card');
 
             const random3 = Math.floor(Math.random() * 8);
 
             const card3Img = document.createElement('img');
             card3Img.src = `${arrCards[random3]['img']}`;
             card3.prepend(card3Img);
 
             const card3Name = document.createElement('h3');
             card3Name.classList.add('ourfriends-card__name');
             card3Name.innerText = arrCards[random3]['name'];
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
        }

        btn_left.addEventListener('click', animLeft);
        btn_right.addEventListener('click', animRight);
    });

}());

//Slider end


