import React, { Component } from 'react'

class ChangeColorComponent extends Component {  
  render () {
    return (
      <button onClick={() => this.props.changeColor(this.props.color)}>
        Change to {this.props.color}
      </button>
    )
  }
}

export default ChangeColorComponent