import React from 'react'
// import { graphql, StaticQuery } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

/*
export const PureHeader = ({data:{site:{siteMetadata}}}) => (
  <div style={{ padding: `16px`, backgroundColor: `#eeeeee` }}>
    <h1 style={{ color: "rebeccapurple" }}>
      {siteMetadata.title}
    </h1>
  </div>
)
*/

// style={{ padding: `16px`, backgroundColor: `#eeeeee` }}
export const PureHeader = ({className}) => (
  <div {...{className}} >
    <h1 style={{ color: "rebeccapurple" }}>
      PureHeader no data
      <p>className</p>
      <pre>{JSON.stringify(className, 0, 2)}</pre>
    </h1>
    <div className="desktop">Visible on Desktop</div>
    <div className="mobile">Visible on Mobile</div>
  </div>
)


const PureHeaderStyled = styled(PureHeader)`
  color green;
  > .desktop {
    @media(min-width: 710px) {
      display: none;
    }    
    @media(min-width: 992px) {
      display: block;
    }
  }
  > .mobile {
    color: blue;
    @media(min-width: 710px) {
      display: block;
    }
    @media(min-width: 992px) {
      display: none;
    }    
  }  
`

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
    return <PureHeaderStyled {...{data}} /> 
    //return <pre>{JSON.stringify(data, 0, 2) }</pre>

}

export default Header