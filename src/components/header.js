import React from 'react'
// import { graphql, StaticQuery } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

/*
export const PureHeader = ({data:{site:{siteMetadata}}}) => (
  <div style={{ padding: `16px`, backgroundColor: `#eeeeee` }}>
    <h1 style={{ color: "rebeccapurple" }}>
      {siteMetadata.title}
    </h1>
  </div>
)
*/
export const PureHeader = (props) => (
  <div style={{ padding: `16px`, backgroundColor: `#eeeeee` }}>
    <h1 style={{ color: "rebeccapurple" }}>
      PureHeader no data
      <pre>{JSON.stringify(props, 0, 2)}</pre>
    </h1>
  </div>
)

/*
export const Header = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => {
      // console.log("data: ", data)
      return <PureHeader {...{data}} /> 
      // return <pre>{JSON.stringify(data, 0, 2) }</pre>
    }}
  />
)
*/

export const Header = props => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  )

    console.log("data: ", data)
    return <PureHeader {...{data}} /> 
    //return <pre>{JSON.stringify(data, 0, 2) }</pre>

}

export default Header