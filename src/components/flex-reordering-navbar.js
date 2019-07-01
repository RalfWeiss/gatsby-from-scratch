/*
- no animation just reordering test
*/

import React, { useState, useRef } from 'react'


import styled from 'styled-components'

const links = [
  'Home', 'Products', 'AboutUs',
  'Home2', 'Products2', 'AboutUs2',
  'Home3', 'Products3', 'AboutUs3',

]

const Header = ({className}) => {
  const [isOpen, setOpen] = useState(false)


  return (
    <nav {...{className}} >
      <h1>Brandname</h1>
      <button onClick={() => setOpen(!isOpen)  }>HM</button>

      <ul id="myList" className={isOpen ? "" : "hidden"}>
      {
        links.map((item, idx) => <li key={idx}>{item}</li>)
      }
      </ul>
      <button onClick={() => setOpen(!isOpen)  }>AL</button>
    </nav>
  )
}


const HeaderStyled = styled(Header)`
  // default from somewhere elese
  box-sizing: border-box;

  color: darkgreen;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;


  > button:first-of-type  {
    margin-left: 0;
    order: 2;

    // hide on desktop
    @media(min-width: 992px) {
      display: none;
    }    
  }

  > button:nth-of-type(2)  {
    order: 1;
    // margin-left: auto;  // push button to the right; without this the 2nd button would be centered
    @media(min-width: 992px) {
      margin-left: 0;
    }      
  }

  > ul {   // the main navigation
    list-style-type: none;
    padding-left: 0;
    display: flex;
    // flex-flow: wrap;          // make the list items wrap in case there to many menu options
    // but this does no work on mobile
    border solid 1px black; 
    order: 3;   // on mobile it should move behind the buttons

    overflow: hidden;

    // diese default gelten bis zum breakpoint

    flex-direction: column;
    // make the items full width so they wrap in flexbox on mobile
    min-width: 100%;

    @media(min-width: 992px) {
      flex-direction: row;   // on Desktop all items should appear in a row
      min-width: auto;
      order: 0;             // on desktop it should appear before the buttons
    }  
  }




  > .hidden {
    max-height: 0;

    @media(min-width: 992px) {
      max-height: 60px;
    }            
  }  



`

export default HeaderStyled
