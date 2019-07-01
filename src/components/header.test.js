import React from "react"
import renderer from "react-test-renderer"
// import { StaticQuery } from "gatsby"
import { useStaticQuery } from "gatsby"
import Header, {PureHeader} from "./header"

const data = {
  site: {
    siteMetadata: {
      title: "Mocktitle storybook"
    }
  }
}

describe("PureHeader", () => {
  it("renders correctly", () => {

    const tree = renderer
      .create(<PureHeader {...{data}} />)
      .toJSON()
    // expect(tree).toMatchSnapshot()
  })
})


describe("Header", () => {
/*
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `Default Starter`,
          },
        },
      })
    )
  })
*/

  beforeEach(() => {
    useStaticQuery.mockImplementationOnce(() =>
      ({
        site: {
          siteMetadata: {
            title: `Default Starter`,
          },
        },
      })
    )
  })

  it("renders correctly", () => {

    const tree = renderer
      .create(<Header />)
      .toJSON()
    // expect(tree).toMatchSnapshot()
  })
})
