import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export const PureHeader = ({data:{siteMetadata}}) => (
  <div style={{ padding: `16px`, backgroundColor: `#eeeeee` }}>
    <h1 style={{ color: "rebeccapurple" }}>
      {siteMetadata.title}
    </h1>
  </div>
)

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
    render={PureHeader}
  />
)

export default Header