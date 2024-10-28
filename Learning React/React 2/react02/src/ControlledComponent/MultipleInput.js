import React, { Component } from 'react'

export default class MultipleInput extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
            name : 'Shani',
            email : 'shanisoni7084@gmail.com'
      }
    }
    // handleName = (event) => {
    //     this.setState({
    //         name : event.target.value
    //     })
    // }

    // handleEmail = (event) => {
    //     this.setState({
    //         email : event.target.value
    //     })
    // }

    handle = ( event) => {
        this.setState({
            [event.target.name] : event.target.value 

        })
    }
    
  render() {
    return (
      <div>

        <label htmlFor = '' > Enter Your Name  </label>
        <input type='text' name='name' value={this.state.name} placeholder='Enter Your Name'  onChange={this.handle}/>

        <br/>
        <br/>
 
        <label htmlFor='' > Enter Your Email    </label>
        <input type='Email ' name='email' value={this.state.email} placeholder='Enter Your Email '  onChange={this.handle}/> 
        
      </div>
    )
  }
}
