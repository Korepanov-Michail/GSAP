import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'
import TimelineMax from "gsap/TimelineMax"
import TweenMax from "gsap/TweenMax"

const duration1 = 1.1
const duration2 = 1.2
const duration3 = 1.3
const alpha = 0.6
const easing = Power0. easeOut
const curv = 1.0

class Gsap7 extends Component {
	   componentDidMount () {
              this.moveSpan7()   
     }

	    moveSpan7 () {
      const  tlBezier1 = new TimelineMax({repeat: -1,yoyo: false,   delay: 0.0 })
      const points1 = [{x: -20, y: 0},{x: 175, y: 49}, {x: 220, y: 70},];
      const points2 = [{x: 220, y: 70},{x: 200, y: 77},{x: 180, y: 60}];
      const points3 = [{x: 180, y: 60},{x: 200, y: 0},{x: 350, y: 0}];
      
      tlBezier1
       .set(".div1",  {autoAlpha: 0,scale: 0.2})
       .to(".div1", duration1, {bezier: { values: points1 , curvines: curv},autoAlpha: 1,scale: 1, ease: easing})
       .to(".div1", duration2, {bezier: { values: points2 , curvines: curv},autoAlpha: 1,scale: 1.2, ease: easing})
       .to(".div1", duration3, {bezier: { values: points3 , curvines: curv},autoAlpha: 0,scale: 0.2, ease: Power1. easeOut})

      const  tlBezier2 = new TimelineMax({repeat: -1,yoyo: false,   delay: 0.4 })
      
      tlBezier2
       .set(".div2",  {autoAlpha: 0,scale: 0.4})
       .to(".div2", duration1, {bezier: { values: points1 , curvines: curv},autoAlpha: 1,scale: 1, ease: easing})
       .to(".div2", duration2, {bezier: { values: points2 , curvines: curv},autoAlpha: 1,scale: 1.2, ease: easing})
       .to(".div2", duration3, {bezier: { values: points3 , curvines: curv},autoAlpha: 0,scale: 0.2, ease: Power2. easeOut})

      const  tlBezier3 = new TimelineMax({repeat: -1,yoyo: false,   delay: 0.8 })
      
      tlBezier3
       .set(".div3",  {autoAlpha: 0,scale: 0.2})
       .to(".div3", duration1, {bezier: { values: points1 , curvines: curv},autoAlpha: 1,scale: 1, ease: easing})
       .to(".div3", duration2, {bezier: { values: points2 , curvines: curv},autoAlpha: 1,scale: 1.2, ease: easing})
       .to(".div3", duration3, {bezier: { values: points3 , curvines: curv},autoAlpha: 0,scale: 0.2, ease: Power3. easeOut})
      } 
 

  render () {
    return (
      <div id="gsap7">
         <div className='div1'>animation</div>
         <div className='div2'>with</div>
         <div className='div3'>GSAP</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Gsap7)