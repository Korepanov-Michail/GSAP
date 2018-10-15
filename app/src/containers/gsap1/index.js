import React, {Component} from 'react'
import {connect} from 'react-redux'
import R from 'ramda'
import {Link} from 'react-router'
import TimelineMax from "gsap/TimelineMax"
import TweenMax from "gsap/TweenMax"

import {pauseAnima1} from '../../actions/index.js'


const duration = 0.8
const alpha = 0.6
const easing = Power2.easeOut



class Gsap1 extends Component {
    
    componentDidMount () {
              this.reg1(),
              this.moveSpan1()
        //      this.props.pauseAnima1()    
     }
     
  

    reg1 () {
     
   let str = 'хорошо в деревне летом'
   let regexp = /./ig ;
   let result 
   var i = 0
               
      while (result = regexp.exec(str)) {
         i = i + 1
         var span = document.createElement("span");
         //span.className = "someClass";
         span.innerHTML = result[0];
         var a1 = document.getElementById("gsap1");;
         a1.appendChild(span);
         //console.log(result[0])
      }
  }

  
    moveSpan1 () {
      const  ttl1 = new TimelineMax({repeat: -1, yoyo: true,  delay: 0.1 })
     
    ttl1
      .staggerFrom("#gsap1 span", duration, {left: 0, autoAlpha: 1,delay: 0, ease: easing })
      .staggerTo("#gsap1 span", duration, { left: 0,autoAlpha: alpha, fontSize: 22, delay: 0, ease: easing },'0.09')
     
    }
 

  render () {
            return (
      <div id="control1">
      {/*<span className = "pause"  onClick={pauseAnima1} >pause< /span>
        <span className = "restart">restart< /span>
      */}
        <div id="gsap1">

        </div>
      </div>
    )
  }
}

const mapStateToProps = () => ({
  
})

const mapDispatchToProps = {
 // pauseAnima1
}

export default connect(mapStateToProps, mapDispatchToProps)(Gsap1)