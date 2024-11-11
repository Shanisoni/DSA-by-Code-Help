import React, { Component, createRef } from 'react'

export default class ReactRef extends Component {

    constructor(props) {
      super(props)
    
      this.myref = createRef();
         
      
    }
    
  render() {
    return (
      <div>

        <>

        <h1 ref={this.myref}>
            Welcome to React Refrence Component 
        </h1>
        </>
        
      </div>
    )
  }
}
