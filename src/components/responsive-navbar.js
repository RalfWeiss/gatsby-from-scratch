/*
TODO:
- How to make an invisible probing of the component height ?


Vielleicht dieser Ansatz:
- dummy transition für min-height
- onTransitionEnd of min-height
   - geht height
   - set it probed height

based on:
  https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf

for transitioning 
  see: https://css-tricks.com/using-css-transitions-auto-dimensions/
  https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-csscs
https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105

Der Trick dürfte dann sein,
mit onTransition end die Höhe abzufragen
und entsprechend dann max-Height zu setzen.

Vielleicht so:
When ComponentDidMount
open the list with opacity:0
get current height 
set maxHeight appropriately
reset opacity

https://stackoverflow.com/questions/6338217/get-a-css-value-with-javascript

for TransitionEnd:
https://reactnavigation.org/docs/en/transitioner.html
https://seesparkbox.com/foundry/css_transitionend_event
https://stackoverflow.com/questions/49389753/add-transition-to-collapsable-div-using-styled-components-in-react

Properites of the transitonEnd event:
0: "dispatchConfig"
1: "_targetInst"
2: "nativeEvent"
3: "type"
4: "target"
5: "currentTarget"
6: "eventPhase"
7: "bubbles"
8: "cancelable"
9: "timeStamp"
10: "defaultPrevented"
11: "isTrusted"
12: "propertyName"
13: "elapsedTime"
14: "pseudoElement"
15: "isDefaultPrevented"
16: "isPropagationStopped"
17: "_dispatchListeners"
18: "_dispatchInstances"



useRef
https://www.codebeast.dev/react-memoize-hooks-useRef-useCallback-useMemo/
https://stackoverflow.com/questions/54940399/how-target-dom-with-react-useref-in-map


update css variables with React
https://herchel.com/2018-01-21-css-variables-react/

*/

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const links = [
  'Home', 'Products', 'AboutUs',
  'Home2', 'Products2', 'AboutUs2',
  'Home3', 'Products3', 'AboutUs3',

]

const Header = ({className}) => {
  const [isOpen, setOpen] = useState(false)
  const [minHeight, setMinHeight] = useState(1)

  let ulRef = React.createRef()

  // useThisEffect only on ComponentDidMount
  // führt dazu, dass die Transition ausgeführt wird.
  /*
  - hier dann eine class setzen, die eine Dummy transition ausführt, um die Höhe abzufragen.
  */
  useEffect(() => setMinHeight(4), [])

  const defaultStyles = {
    minHeight:50, 
    // transition: 'max-height 0s ease-out'   // this also removes the handler to onTransition end
  }

  // ERROR: gets never called
  // see: https://stackoverflow.com/questions/54744670/react-transitionstart-doesnt-fire-event
  const handleTransitionStart = (e) => {
    console.log("handleTransitionStart: ", Object.keys(e))
  }

  const handleTransitionEnd = (e) => {
    const liHeight = getHeight()
    console.log("ulRef: ", Object.keys(ulRef.current))
    console.log("ulRefId: ", Object.keys(ulRef.current.id))

    const styles = getComputedStyle(ulRef.current)
    console.log("styles (getComputedStyle): ", Object.keys(styles))
    console.log("styles height: ", styles.height)
    console.log("styles maxHeight: ", styles.maxHeight)
    console.log("styles minHeight: ", styles.minHeight)
    // typtconsole.log("styles transition: ", styles.transition)   // no result
    console.log("handleTransitionEnd: ", Object.keys(e))
    console.log("handleTransitionEnd Property: ", e.propertyName)
    const myDomNode = ReactDOM.findDOMNode(ulRef.current)
    console.log("myDOMNode: ", Object.keys("myDOMNode:", myDomNode))
    console.log("myDOMNode style: ", Object.keys("myDOMNode style:", myDomNode.style['max-height']))
    console.log("myDOMNode: ", myDomNode)
    // offsetHeight is set to maxHeight
    // const cssRules = getCssRules(ulRef.current)
    // jaconsole.log("cssRules: ", cssRules)
  }



  const getHeight = () => {
    //var element = document.querySelector('#myList'),
    var element = document.querySelector('#myList')
    console.log("element: ", Object.keys(element))
    const style = window.getComputedStyle(element)
    const height = style.getPropertyValue('height')
    // const maxHeight = style.getPropertyValue('maxHeight') // does not work
    console.log("from computedStyle: ")
    console.log("height: ", height)
    // console.log("maxHeight: ", maxHeight)
    // style.setProperty('max-height', '200px')
    const transition = style.getPropertyValue('transition')
    console.log("transition: ", transition)

  }
  return (
    <nav {...{className}} onTransitionStart={handleTransitionStart} onTransitionEnd={handleTransitionEnd}>
      <h1>Brandname</h1>
      <button onClick={() => setOpen(!isOpen)  }>HM</button>
      {/* this overwrites the transition set by styled components */}
      <ul id="myList" style={{minHeight:minHeight}} className={isOpen ? "" : "hidden"} ref={ulRef}>
      {
        links.map((item, idx) => <li key={idx}>{item}</li>)
      }
      </ul>
      <button onClick={() => setMinHeight(3)}>min height</button>
    </nav>
  )
}

/*
    @media(min-width: 710px) {
      display: none;
    }    
*/

const HeaderStyled = styled(Header)`
  // default from somewhere elese
  box-sizing: border-box;

  color: darkgreen;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;

  // set min-height from props
  ${props => `min-height: 100px;`}

  > button {
    margin-left: auto;

    // hide on desktop
    @media(min-width: 992px) {
      display: none;
    }    
  }
  > ul {   // the main navigation
    list-style-type: none;
    padding-left: 0;
    display: flex;
    // flex-flow: wrap;          // make the list items wrap in case there to many menu options
    // but this does no work on mobile
    border solid 1px black; 

    // height: auto;
    overflow: hidden;
    // je dichter max-height an der tatsächlichen height ist,
    // desto geschmeidiger wirkt diese transition
    // da ansonsten der Effekt dieser Transition unsichtbar abläuft
    // max-meight wird in der media query erneut  gesetzt
    max-height: 160px;
    transition: max-height 2.5s ease-out,
                min-height 0.01s ease-out;

    // diese default gelten bis zum breakpoint

    flex-direction: column;
    // make the items full width so they wrap in flexbox
    min-width: 100%;

    @media(min-width: 992px) {
      flex-direction: row;
      // restore with calculation to elements stay together
      min-width: auto;
    }  
  }




  > .hidden {
    @media(min-width: 800px) {
      // display: none;
      max-height: 0;
      // height: 0;
      // transform:scaleY(0); // *squish*
      // transition: max-height 0.5s ease-out;
    }
    @media(min-width: 992px) {
      max-height: 60px;
      //transform:scaleY(1); // *squish*
    }            
  }  



`

export default HeaderStyled
