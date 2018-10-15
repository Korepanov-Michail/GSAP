import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import TweenMax from "gsap/TweenMax"
import TimelineMax from "gsap/TimelineMax"



 const tl1 = new TimelineMax()
 const tl2 = new TimelineMax()
 const tl3 = new TimelineMax()
 const tl4 = new TimelineMax()
 const tl5 = new TimelineMax()
 const tl6 = new TimelineMax()
 const tl7 = new TimelineMax()
 const tl8 = new TimelineMax()
 const easing = Power2.easeOut
 const easing3 = Power2.easeOut
 const xDistance = 45
 const duration = 0.9



class Sidebar extends Component {
	

  mouseOver1 (e) {
      tl1
      .to(e.target, duration, {x: xDistance, ease: easing})
      .to(e.target, duration, {x: 0, ease: Bounce.easeOut})
  }

 mouseOver2 (e) {
      tl2
      .to(e.target, duration, {x: xDistance, ease: easing})
      .to(e.target, duration, {x: 0, ease: Bounce.easeOut})
  }

   mouseOver3 (e) {
      tl3
      .to(e.target, duration, {x: xDistance, ease: easing})
      .to(e.target, duration, {x: 0, ease: Bounce.easeOut})
  }

     mouseOver4 (e) {
      tl4
      .to(e.target, duration, {x: xDistance, ease: easing})
      .to(e.target, duration, {x: 0, ease: Bounce.easeOut})
  }

      mouseOver5 (e) {
      tl5
      .to(e.target, duration, {x: xDistance, ease: easing})
      .to(e.target, duration, {x: 0, ease: Bounce.easeOut})
  }

      mouseOver6 (e) {
      tl6
      .to(e.target, duration, {x: xDistance, ease: easing})
      .to(e.target, duration, {x: 0, ease: Bounce.easeOut})
  }

      mouseOver7 (e) {
      tl7
      .to(e.target, duration, {x: xDistance, ease: easing})
      .to(e.target, duration, {x: 0, ease: Bounce.easeOut})
  }

      mouseOver8 (e) {
      tl8
      .to(e.target, duration, {x: xDistance, ease: easing})
      .to(e.target, duration, {x: 0, ease: Bounce.easeOut})
  }

  borderOut () {
  	 TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: Bounce.easeOut
    });
  }

 clickBtn1 () {
      
 	   TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: easing3 
    });

      TweenMax.to('.btnGsap1', 1, {
      borderWidth: 5,
      delay: 0.2,
      ease: easing3 
    });
      
 }

 clickBtn2 () { 
    
 	   TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: easing3 
    });

      TweenMax.to('.btnGsap2', 1, {
      borderWidth: 5,
      delay: 0.2,
      ease: easing3 
    });
    
 } 


  clickBtn3 () {
 	   TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: easing3 
    });

      TweenMax.to('.btnGsap3', 1, {
      borderWidth: 5,
      delay: 0.2,
      ease: easing3 
    });
    
 }

  clickBtn4 () {
     TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: easing3 
    });

      TweenMax.to('.btnGsap4', 1, {
      borderWidth: 5,
      delay: 0.2,
      ease: easing3 
    });
    
 }

   clickBtn5 () {
     TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: easing3 
    });

      TweenMax.to('.btnGsap5', 1, {
      borderWidth: 5,
      delay: 0.2,
      ease: easing3 
    });
    
 }

   clickBtn6 () {
     TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: easing3 
    });

      TweenMax.to('.btnGsap6', 1, {
      borderWidth: 5,
      delay: 0.2,
      ease: easing3 
    });
    
 }

   clickBtn7 () {
     TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: easing3 
    });

      TweenMax.to('.btnGsap7', 1, {
      borderWidth: 5,
      delay: 0.2,
      ease: easing3 
    });
    
 }

   clickBtn8 () {
     TweenMax.to('.btnSidebar', 0.1, {
      borderWidth: 0,
      ease: easing3 
    });

      TweenMax.to('.btnGsap8', 1, {
      borderWidth: 5,
      delay: 0.2,
      ease: easing3 
    });
    
 }

 

render () {
  return (
    <div>
      <div className = "btnGsap1  btnSidebar"  ><Link to={`/`}><div onMouseOver={this.mouseOver1} onClick={this.clickBtn1}>btn1</div></Link></div>
      <div className = "btnGsap2  btnSidebar"  ><Link to={`/gsap2`}><div onMouseOver={this.mouseOver2} onClick={this.clickBtn2}>btn2</div></Link></div>
      <div className = "btnGsap3  btnSidebar"  ><Link to={`/gsap3`}><div onMouseOver={this.mouseOver3} onClick={this.clickBtn3}>btn3</div></Link></div>
      <div className = "btnGsap4  btnSidebar"  ><Link to={`/gsap4`}><div onMouseOver={this.mouseOver4} onClick={this.clickBtn4}>btn4</div></Link></div>
      <div className = "btnGsap5  btnSidebar"  ><Link to={`/gsap5`}><div onMouseOver={this.mouseOver5} onClick={this.clickBtn5}>btn5</div></Link></div>
      <div className = "btnGsap6  btnSidebar"  ><Link to={`/gsap6`}><div onMouseOver={this.mouseOver6} onClick={this.clickBtn6}>btn6</div></Link></div>
      <div className = "btnGsap7  btnSidebar"  ><Link to={`/gsap7`}><div onMouseOver={this.mouseOver7} onClick={this.clickBtn7}>btn7</div></Link></div>
      <div className = "btnGsap8  btnSidebar"  ><Link to={`/gsap8`}><div onMouseOver={this.mouseOver8} onClick={this.clickBtn8}>btn8</div></Link></div>
    </div>
  )
}
}

 const mapStateToProps = () => ({

 })

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
 //export default Sidebar
