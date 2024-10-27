import React, { Component } from 'react'

export default class ControlForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          
        data: "Her Goes Your Info"
      }
    }

    handleForm = (event) => {

        this.setState({
            data: event.target.value
        })
    }
    
  render() {


    return (
      <div>
        <form>
            <label htmlFor='' > Enter Name </label>

            <input type='text' value={this.state.data}      onChange={this.handleForm}  ></input>

            <br/>

            <input type='submit' value='Submit'></input>
        </form>
        
      </div>
    )
  }
}
