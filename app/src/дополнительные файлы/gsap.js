import TweenMax from "gsap/TweenMax";
import Draggable from "gsap/Draggable"; 

 TweenMax.to('.a', 2, {
     borderRadius: 0,
     fontSize: 21,
     opacity: 0,
     visibility: hidden,
     autoAlpha: 1,
     rotation: -45,
     transformOrigin: 'center bottom',//указывает точку вокруг которой произтодить трансформацию (например rotation:)
     scale: 1,
     scaleX: 0,
     scaleY: 0,
     backgroundColor: "#dc143c,
     width: 55,
     height: 44,
     skewX: 45,
     x: "100%",
     y: 0,
     top: "55%",
     left: "-55%",
     xPercent: -100,
     rotationX: -180,
     repeat: 2,
    // repeatDelay: 1 ,//время задержки между повторениями
     delay: 0.5, //время задержки

     ease: Back.easeOut.config(3)
    });

TweenMax.set
TweenMax.to
TweenMax.From
TweenMax.fromTo
TweenMax.staggerTo - анимация над множеством обьектов
TweenMax.staggerFromTo
TweenMax.staggerFrom
TweenMax.yoyo - анимация возвращалась назад и вперед определенное количество раз или бесконечно
.add('go') - добавит метку на временной шкале , ('go') - имя метки

tl = new Timeline({paused: true})







