import React, { Component } from 'react'

export default class MultipleInput extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
            name : 'Shani',
            email : 'shanisoni7084@gmail.com'
      }
    }
    handleName = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            email : event.target.value
        })
    }
    
  render() {
    return (
      <div>

        <label htmlFor = '' > Enter Your Name  </label>
        <input type='text' value={this.state.name} placeholder='Enter Your Name'  onChange={this.handleName}/>

        <br/>
        <br/>
 
        <label htmlFor='' > Enter Your Email    </label>
        <input type='Email '  value={this.state.email} placeholder='Enter Your Email '  onChange={this.handleEmail}/> 
        
      </div>
    )
  }
}
