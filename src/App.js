import React, { Component } from 'react'

import ChangeColorComponent from './ChangeColorComponent'
import BackgroundComponent from './BackgroundComponent'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bgcolor: 'white'
    }

    this.handleChangeColor = this.handleChangeColor.bind(this)
  }

  handleChangeColor (color) {
    this.setState({
      bgcolor: color
    })
  }

  render() {
    return (
      <div>
        <BackgroundComponent 
          color={this.state.bgcolor}
        />
        <ChangeColorComponent
          color="green"
          changeColor={this.handleChangeColor}
        />
        <ChangeColorComponent
          color="red"
          changeColor={this.handleChangeColor}
        />
        <ChangeColorComponent
          color="yellow"
          changeColor={this.handleChangeColor}
        />
      </div>
    );
  }
}

export default App;
