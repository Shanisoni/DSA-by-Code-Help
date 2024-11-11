import React, { Component, createRef } from 'react'

export default class UncontrolledComponent extends Component {

    constructor(props) {
      super(props)
    
      this.nameRef = createRef();

      this.ageRef = createRef(); 
         
      
    }

    componentDidMount() {
        console.log(this.nameRef);
        console.log(this.ageRef);   
        // this.nameRef.current.focus();

    }

    handleChange = (event) => {
        event.preventDefault();
        console.log('Nmae = ',  this.nameRef.current.value);
        console.log('Age = ', this.ageRef.current.value)
    }
    
  render() {
    return (
      <div>

        <form onSubmit={this.handleChange}>
            <label htmlFor='' > Enter Your Name : </label> 
            <input type='text' placeholder='Name' value={ 'Name' }ref={this.nameRef}/>

            <br/>
            <br/>
            
            <label htmlFor='' > Enter Your Age : </label> 
            <input type='number' placeholder='Age' value={'AGE'} ref={this.ageRef}/>

            <br/>
            

            <button type='submit' > Submit  </button>

        </form>
        
      </div>
    )
  }
}
