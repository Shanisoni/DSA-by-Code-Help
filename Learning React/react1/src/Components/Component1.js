import React, { Component } from 'react'
import './Style.css'

export default class Component1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         active : false 
      }
    }

    changeState = () => {
        this.setState({
            active : true
        });
    }
    
  render() {

    let X = this.props.check ? 'myfont1' : 'myfont2';

    let object = {
        color : 'red',
        backgroundColor : 'green',
        fontSize : '50px'
    }

    if(this.state.active){
        object.backgroundColor = 'yellow';
        object.color = 'blue';
        object.fontSize = '100px';
    }
    return (
      <div>
        <button style={object} onClick={this.changeState}> Click Me</button>
        <h1 style={object}>the deep green </h1>

        <h21 className = {`${X} myfont3`} >My Name is Shani Soni</h21>
        
      </div>
    )
  }
}
