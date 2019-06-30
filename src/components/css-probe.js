import React, { Component } from 'react'
import styled from 'styled-components'

/*
- initial prop does not trigger transition

Apparently the native transitionEnd event does not fire if the transition ends off-screen

The state in order are:
- probe        -->   initial   
                     --> move element out of the way 
                     --> change Transition timing
- probe hidden --> after height measured
- hidden       --> on probing ends

Next for user interaction there 
- normal == no class
- hidden == set max-height to 0px

*/

const ProbeValues = {
  initial: '0px',  // won't work without px
  probe: '200px'
}

export class CssProbe extends Component {
  state = {
    maxHeight: ProbeValues.initial,
    className: 'probe',
    probeState: 'probe'
  }
  elmRef = React.createRef()

  handleTransitionEnd = e => {
    // console.log("handleTransitionEnd: ", Object.keys(e))
    console.log("handleTransitionEnd for: ", e.propertyName)
    console.log("handleTransitionEnd state: ", this.state)
    if (this.elmRef.current) {
      const rect = this.elmRef.current.getBoundingClientRect();
      const styles = getComputedStyle(this.elmRef.current)
      console.log("styles (getComputedStyle): ", Object.keys(styles))
      console.log("styles (getComputedStyle): ", styles)
      console.log("styles height: ", styles.height)  
      console.log("styles offsetHeight: ", styles.offsetHeight)  
      console.log("rect: ", rect)  
      // only change when probed
      /*
      if (this.state.maxHeight === ProbeValues.probe &&
          this.state.maxHeight !== styles.height &&
          !(this.state.className.includes('hidden')))  {
          this.setHeight(styles.height)  
          // probe ending reset className
          this.setClassName('probe hidden')
          //this.setState(state => ({...state, className: ''}))          
      }
      */
      if (this.state.probeState === 'probeStart') {
        this.setClassName('probe hidden')
        this.setProbeState('probeEnd')        
        this.setHeight(styles.height)  
        // probe ending reset className        
      }
      if (this.state.probeState === 'probeEnd') {
        this.setClassName('hidden')
        this.setProbeState('probeFinished')        
        // this.setHeight(styles.height)  
        // probe ending reset className        
      }      
    }


  }
  setClassName = className => {
    console.log("set state.className to: ", className)
    this.setState(state => ({...state, ...{className}}))
  }
  setProbeState = probeState => {
    console.log("set state.probeState to: ", probeState)
    this.setState(state => ({...state, ...{probeState}}))
  }  
  setHeight = h => {
    console.log("set state.maxHeight to: ", h)
    this.setState(state => ({...state, maxHeight: h}))
  }    
  componentDidMount = e => {
    console.log("componentDidMount: ", JSON.stringify(this.state, 0, 2))
    // if wrapped in setTimeout the transitionEnd gets triggerd
    // setState in componentDidMount is execute synchronous
    // see: https://github.com/facebook/react/issues/12312
    this.setProbeState('probeStart')
    setTimeout(() => {
      this.setHeight(ProbeValues.probe)
    }, 0)      
  }
  
  
  render() {
    console.log("render state: ", this.state)
    // const { className } = this.props
    const className = this.props.className + " " + this.state.className;
    const maxHeight = this.state.className.includes('hidden') ? '0px' : this.state.maxHeight
    console.log(`render with maxHeight: ${maxHeight} and className: ${className} `)
    return (      
      <>
        <button onClick={() => this.setHeight('200px')}>set height</button>
        <button onClick={() => this.setClassName('hidden')}>hide</button>
        <button onClick={() => this.setClassName('')}>show</button>  

        {/* wrapper to probe the height of the element */}    
        <div {...{className}} 
              style={{maxHeight:maxHeight}} 
              onTransitionEnd={this.handleTransitionEnd}
              ref={this.elmRef}
          >
          <div className="bordered"> {/* you need this in case you want to have a border */}
            <p>CssProbe</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, impedit ullam. Nulla delectus accusamus consequuntur necessitatibus? Molestiae, ducimus voluptas itaque laboriosam in excepturi ab eum molestias unde, ipsum odio sint.
            </p>
          </div>

          
        </div>
        <div className="front">
          content behind
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, hic.
        </div>
      </>
    )
  }
}

export default styled(CssProbe)`
  box-sizing: border-box;
  // max-height: 0px; // ohne px läuft es nicht
  overflow: hidden;

  // the border can't be hidden using max-height 
  // in case you want to have a border you need another wrapper
  
  transition: max-height 1.5s ease-out;

  &.probe {   // use the & className without space to express a local class in style
    
    // we need a different transition timing for the probing
    transition: max-height 0.01s ease-out;   // does not work with 0s
    background-color: yellow;
    // display: none;   // kein onTransitionEnd bei display:none

    // move out the viewport: see: https://www.sitepoint.com/five-ways-to-hide-elements-in-css/
    position: absolute;
    top: -9999px;
    //left: -9999px;     // dieser Wert verfälscht das Ergebnis

  }

  > .bordered {
    border: 2px solid green;
  }

`