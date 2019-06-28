import React from "react"
import { storiesOf } from "@storybook/react"

import Header, { PureHeader } from '../src/components/header'
import HeaderFramed, { StyledContent } from '../src/components/headerFramed'

const data = {
  site: {
    siteMetadata: {
      title: "Mocktitle storybook"
    }
  }
}

storiesOf(`Header`, module)
  .add(`default (mocked)`, () => <PureHeader {...{data}} /> )
  .add(`with StaticQuery`, () => <Header /> )
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