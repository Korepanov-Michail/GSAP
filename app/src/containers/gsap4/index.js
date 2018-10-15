import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'
import TweenMax from "gsap/TweenMax"

const duration = 10.1
const alpha = 0.6
const easing1 = Power1.easeOut
const easing2 = Power2.easeOut
const easing4 = Power4.easeOut
const easing = Bounce.easeOut

class Gsap4 extends Component {
    componentDidMount () {
              this.rotateDiv4()                 
     }


    rotateDiv4 () {
    	const tl4 = new TimelineMax({repeat: -1, yoyo: true , delay: 0.0})
    tl4
      .staggerFrom("#gsap4 div", duration, {rotation: 360,transformOrigin: '0% 110%',autoAlpha: 0.1, ease: easing1 },0.46)
      .staggerTo("#gsap4 div", duration, {rotation: 180 ,transformOrigin: '0% 110%',autoAlpha: 1,  ease: easing2 },0.46)
    }

  render () {
    return (
      <div id="gsap4">
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

export default connect(mapStateToProps, mapDispatchToProps)(Gsap4)