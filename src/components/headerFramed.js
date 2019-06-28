import React from 'react'
import Frame from 'react-frame-component';
import styled from 'styled-components'

/*
  
  @media(min-width: 210px) {
    background-color: red;
  }
  @media(min-width: 310px) {
    background-color: green;
  }

*/

const styleString = `
  * { color: yellow; }    
  h1 { 
    color: red ;  
    background-color: green;
  }
  @media (min-width: 200px) {
    h1 {
      background-color: red;
    }
  }  
  @media (min-width: 300px) {
    h1 {
      background-color: yellow;
    }
  }  
`

const styleTag = <style>{styleString}</style>
const styleTag2 = <style>{'*{color:red}'}</style>

const Content = ({className}) => (
  <div {...{className}}>
    Content
    <div>background color changed</div>
  </div>
)

export const StyledContent = styled(Content)`
  color: green;
`


// head={styleTag} 
// <Frame head={<style>{'*{color:red}'}</style>} {...{height, width}} frameBorder={2}>
const Header = ({ height, width, children }) => (
  <Frame head={styleTag} {...{height, width}} frameBorder={2}>
    <h1>H1</h1>
    <p>test (style tag)</p>
    <p style={{color:'brown'}}> Intro text (local style)</p>
    <StyledContent />
    <h1>{children}</h1>
  </Frame>
);

export default Header

