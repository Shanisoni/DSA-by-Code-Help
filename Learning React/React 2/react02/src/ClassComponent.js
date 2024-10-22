import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter : 0
    }
  }
  
  render() {
    return (
      <div>

        <h1> {this.state.counter} </h1>
        
      </div>
    )
  }
}

