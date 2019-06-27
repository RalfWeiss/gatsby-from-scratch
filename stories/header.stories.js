import React from "react"
import { storiesOf } from "@storybook/react"

import Header, { PureHeader } from '../src/components/header'

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
