import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'
import TimelineMax from "gsap/TimelineMax"
import TweenMax from "gsap/TweenMax"

// export const pauseAnima2 =  () =>{
//  // tl2.pause()
//  alert('pauseAnima2')
// }



//const tl2 = new TimelineMax({repeat: -1, yoyo: false , delay: 0.1})
const duration = 1.1
const duration2 = 0.6
const duration3 = 0.3
const alpha = 0.6
const easing1 = Power1.easeOut
const easing2 = Power2.easeOut
const easing4 = Power4.easeOut
const easing = Bounce.easeOut



class Gsap2 extends Component {
     componentDidMount () {
              this.reg2()
              this.moveSpan2()                 
     }

 reg2  ()  {
		let str = 'хорошо 2'
		var container = 'gsap2'
		let regexp = /./ig ;
		let result 
		var i = 0
		var ii = 0

		

		   while (result = regexp.exec(str)) { //определяем длинну выражения
        	ii = ii + 1
        }
      				 
      while (result = regexp.exec(str)) {
        	i = i + 1
        	if( i==1){ //обрабатываем первый знак
        	var span1 = document.createElement("span");
        	span1.className = "firstSpan2";
        	span1.innerHTML = result[0];
        	var a1 = document.getElementById(container);;
        	a1.appendChild(span1);
        	}
        	if( i!=1 && i!=ii){ // обрабатываем средние знаки 
        	var span2 = document.createElement("span");
        	span2.className = "middleSpan2";
        	span2.innerHTML = result[0];
        	var a2 = document.getElementById(container);
        	a2.appendChild(span2);
		      }
		      if( i==ii){ // обрабатываем последний знак 
        	var span3 = document.createElement("span");
        	span3.className = "lastSpan2";
        	span3.innerHTML = result[0];
        	var a3 = document.getElementById(container);;
        	a3.appendChild(span3);	
		      //console.log(result[0])
		      }
		      //console.log(regexp.lastIndex)
	    }

	}

    moveSpan2 () {
    	const tl2 = new TimelineMax({repeat: -1, yoyo: false , delay: 0.1})
    tl2
      .staggerFrom("#gsap2 span", duration, {left: 1971, ease: easing },0.1)
      .staggerTo("#gsap2 span", duration, {left:0 ,  ease: easing })
      .to(".firstSpan2", duration2, {left:-120 ,  ease: easing1 },"-=1.4")
      .to(".firstSpan2", duration2, {left:0 ,  ease: easing })
      .to(".lastSpan2", duration3, {left: 80 ,  ease: easing2 },"-=1.1")
      .to(".lastSpan2", duration3, {left:0 ,  ease: easing },"-=0.8")
      .to(".firstSpan2", duration3, {left:-30 ,  ease: easing1 },"-=0.5")
      .to(".firstSpan2", duration3, {left:0 ,  ease: easing })
      //.to(".firstSpan2", duration2, {rotation: -90 ,transformOrigin: '144% 144%',  ease: easing2 },2)
    }

  render () {
    return (
      <div id="control2">
         <div id = "gsap2">
         </div>
      </div>   
    )
  }
}


 const mapStateToProps = () => ({

 })

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Gsap2)