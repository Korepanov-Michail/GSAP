import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'
import TimelineMax from "gsap/TimelineMax"
import TweenMax from "gsap/TweenMax"

const duration = 0.8
const duration2 = 0.9
const alpha = 0.6
const easing = Power2.easeOut

class Gsap5 extends Component {
   componentDidMount () {
              this.reg5(),
              this.moveSpan5()   
     }

        reg5 () {
     
   let str = 'весёлые     ёжики'
   let regexp = /./ig ;
   let result 
   var i = 0
               
      while (result = regexp.exec(str)) {
         i = i + 1
         var div = document.createElement("div");
         div.className = "someClass";
         div.innerHTML = result[0];
         var a1 = document.getElementById("gsap5");;
         a1.appendChild(div);
      }
  }

    moveSpan5 () {
      const  ttl5 = new TimelineMax({repeat: 0,yoyo: false,   delay: 0.4 })
      const  ttl6 = new TimelineMax({repeat: 0,yoyo: false,   delay: 0.9 })
      const  ttl7 = new TimelineMax({repeat: 0,yoyo: false,   delay: 0.9 })

    ttl5
       .staggerFrom("#gsap5 div", duration, {left: 1971, ease: easing },0.1)
       .staggerTo("#gsap5 div", duration, {left:0 ,  ease: easing })
    ttl6
    
      .staggerTo("#gsap5 div", duration2, {top:155 ,  ease: easing },0.1)
    ttl7
        .staggerTo('#gsap5 div', 0.6, {
          directionalRotation:{
          rotationX: '360_ccw',
          rotationY: '360_ccw'
            }
        },0.1);
    }

  render () {
    return (
      <div id="gsap5">
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Gsap5)