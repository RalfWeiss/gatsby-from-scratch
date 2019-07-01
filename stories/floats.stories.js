import React from "react"
import { storiesOf } from "@storybook/react"

import FlexFloat from '../src/components/flex-float'

storiesOf(`CssProbe`, module)
  .add(`default`, () => (
    <div>
      <FlexFloat />
      <div>div after</div>
    </div> 
  ))