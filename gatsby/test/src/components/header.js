import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


function Foo(props) {
  return(
    <div>
      <h1>Hello Foo</h1>
      {props.children}
    </div>
  ) 
}

function Bar(props) {
  return(
    <div>
      <h1>Hello Bar</h1>
      <Foo>
        Hello World 
        <h2>Inside the fooooooooo</h2>
      </Foo>
    </div>
  ) 
}

