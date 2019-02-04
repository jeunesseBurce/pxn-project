import React from "react"
import PropTypes from "prop-types"


const Panel = ({children, title}) => (
  <React.Fragment>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
          {title}
      </h1>
      {children}
    </div>
    </React.Fragment>
)

Panel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

Panel.defaultProps = {
  children: {},
  title: ''
}

export default Panel
