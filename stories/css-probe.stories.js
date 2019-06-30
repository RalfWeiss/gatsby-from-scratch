import React from "react"
import { storiesOf } from "@storybook/react"

import CssProbe from '../src/components/css-probe'

storiesOf(`CssProbe`, module)
  .add(`default`, () => (
    <div>
      <CssProbe />
      <div>div after</div>
    </div> 
  ))