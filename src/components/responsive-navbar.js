/*
based on:
  https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf

for transitioning 
  see: https://css-tricks.com/using-css-transitions-auto-dimensions/
*/

import React, { useState } from 'react'

import styled from 'styled-components'

const links = [
  'Home', 'Products', 'About Us'
]

const Header = ({className}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav {...{className}}>
      <h1>Brandname</h1>
      <button onClick={() => setOpen(!isOpen)}>HM</button>
      <ul className={isOpen ? "" : "hidden"} >
      {
        links.map((item, idx) => <li key={idx}>{item}</li>)
      }
      </ul>
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
    
    transition:transform 0.3s ease-out; // note that we're transitioning transform, not height!
    height:auto;
    transform:scaleY(1); // implicit, but good to specify explicitly
    transform-origin:top; // keep the top of the element in the same place. this is optional.



    @media(min-width: 800px) {      
      flex-direction: column;
      // make the items full width so they wrap in flexbox
      min-width: 100%;
    }

    @media(min-width: 992px) {
      flex-direction: row;
      min-width: 0;
    }  
  }

  > .hidden {
    @media(min-width: 800px) {
      // display: none;
      // height: 0;
      transform:scaleY(0); // *squish*
    }
    @media(min-width: 992px) {
      display: flex;
      transform:scaleY(1); // *squish*
    }            
  }  



`

export default HeaderStyled
