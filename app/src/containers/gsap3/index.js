import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'
import TweenMax from "gsap/TweenMax"
import TimelineMax from "gsap/TimelineMax"

const duration = 16.1
const alpha = 0.6
const easing1 = Power1.easeOut
const easing2 = Power2.easeOut
const easing4 = Power4.easeOut
const easing = Bounce.easeOut

class Gsap3 extends Component {
    componentDidMount () {
              this.rotateDiv3()                 
     }


    rotateDiv3 () {
    	const tl3 = new TimelineMax({repeat: -1, yoyo: true , delay: 0.0})
    tl3
      .staggerFrom("#gsap3 div", duration, {rotation: 360, ease: easing },0.26)
      .staggerTo("#gsap3 div", duration, {rotation: 180 ,  ease: easing2 },0.26)
    }

  render () {
    return (
      <div id="gsap3">
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
         <div className = "petal"></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Gsap3)