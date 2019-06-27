import React from "react"
import { storiesOf } from "@storybook/react"

import { PureHeader } from '../src/components/header'

const data = {
  siteMetadata: {
    title: "Mocktitle storybook"
  }
}

storiesOf(`Header`, module)
  .add(`default`, () => <PureHeader {...{data}} /> )
