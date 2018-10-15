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

class Gsap6 extends Component {
     componentDidMount () {
              this.reg6(),
              this.moveSpan6()   
     }

        reg6 () {
     
   let str = 'весёлые     ёжики    2'
   let regexp = /./ig ;
   let result 
   var i = 0
               
      while (result = regexp.exec(str)) {
         i = i + 1
         var div = document.createElement("div");
         div.className = "someClass";
         div.innerHTML = result[0];
         var a1 = document.getElementById("gsap6");;
         a1.appendChild(div);
      }
  }

    moveSpan6 () {
      const  ttl5 = new TimelineMax({repeat: -1,yoyo: true,   delay: 0.4 })
      const  ttl6 = new TimelineMax({repeat: -1,yoyo: true,   delay: 0.8 })
      const  ttl7 = new TimelineMax({repeat: -1,yoyo: true,   delay: 0.8 })

    ttl5
       .staggerFrom("#gsap6 div", duration, {left: 1971, ease: easing },0.1)
       .staggerTo("#gsap6 div", duration, {left:0 ,  ease: easing })
    ttl6
    
      .staggerTo("#gsap6 div", duration2, {top:155 ,  ease: easing },0.1)
    ttl7
        .staggerTo('#gsap6 div', 0.6, {
          directionalRotation:{
          rotationX: '360_ccw',
          rotationY: '360_ccw'
            }
        },0.1);
    }

  render () {
    return (
      <div id="gsap6">
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Gsap6)