import React, { Component } from 'react'

class BackgroundComponent extends Component {
  render () {
    return (
      <div
        style={{
          width: '100%',
          height: '300px',
          border: '1px solid black',
          backgroundColor: this.props.color
        }}
      ></div>
    )
  }
}

export default BackgroundComponent