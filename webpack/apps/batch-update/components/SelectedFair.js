import React from 'react'

class SelectedFair extends React.Component {
  constructor (props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove (e) {
    e.preventDefault()
    this.props.onClearFair()
  }

  render () {
    const { className, fair } = this.props
    if (fair !== null) {
      return (
        <div className={className}>
          {fair.name}
          <a href='#' className='remove'
            onClick={this.handleRemove}>✕</a>
        </div>
      )
    }
    return null
  }
}

SelectedFair.propTypes = {
  fair: React.PropTypes.object.isRequired,
  onClearFair: React.PropTypes.func.isRequired
}

/* default styled component */

import styled from 'styled-components'

const StyledSelectedFair = styled(SelectedFair)`
  font-weight: bold;
  margin: 0.25em 0;

  a.remove {
    display: inline-block;
    height: 2em;
    width: 2em;
    line-height: 2em;
    text-align: center;
    color: #ddd;
    margin-left: 0.5em;
    border-radius: 1em;
    text-decoration: none;
    &:hover {
      color: #333;
      cursor: pointer;
      background: #eee;
    }
  }
`

export default StyledSelectedFair