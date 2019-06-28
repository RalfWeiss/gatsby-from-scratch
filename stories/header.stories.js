import React from "react"
import { storiesOf } from "@storybook/react"

import Header, { PureHeader } from '../src/components/header'
import RespHeader from '../src/components/responsive-navbar'
import HeaderFramed, { StyledContent } from '../src/components/headerFramed'

const data = {
  site: {
    siteMetadata: {
      title: "Mocktitle storybook"
    }
  }
}


storiesOf(`Header`, module)
  .addParameters({ viewport: { defaultViewport: 'desktop' }})
  .add(`default (mocked)`, () => <PureHeader {...{data}} /> )
  .add(`with StaticQuery`, () => <Header /> )
  .add(`on Desktop`, () => <Header /> )
  
  .add(`StyledContent`, () => <StyledContent /> )
  .add(`with iFrame w=200px`, () => (
    <HeaderFramed height="200px" width="200px">
      <div>Frame Child</div>
    </HeaderFramed> 
  ))
  .add(`with iFrame w=300px`, () => (
    <HeaderFramed height="200px" width="300px">
      <div>Frame Child</div>
    </HeaderFramed> 
  ))



storiesOf(`Mobile/Header`, module)
  .addParameters({ viewport: { defaultViewport: 'mobile' }})
  .add(`on Mobile`, () => <Header /> )


storiesOf(`Responsive/Header`, module)
  .add(`on Desktop`, () => <RespHeader /> , { viewport: { defaultViewport: 'desktop' }})
  .add(`on Mobile`, () => <RespHeader /> , { viewport: { defaultViewport: 'mobile' }})