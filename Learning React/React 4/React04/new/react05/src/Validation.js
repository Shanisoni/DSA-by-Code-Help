import React, { useState } from 'react'

function Validation() {

    const  [name , setName ] = useState ( '');
    const [email , setEmail]  = useState('');
    const [nameError , setNameError] = useState( false  ) ;
    const [emailError , setEmailError] = useState( false);

    const EmailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const handleName=  (e) => {
      let name = e.target.value;
     
      if( name.length < 3)
        {
        setNameError( true );
      }
      else{
        setNameError( false) ;

      }

      setName(name);
         
    }


    const handleEmail = (e) => {
      let email = e.target.value;
    


      if( ! email.match(EmailRegex)) {
        setEmailError( true);
      }
      else {
        setEmailError( false);
      }
      setEmail(email);

    }
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(e.target[0].value + ' ' + e.target[1].value);
      let name = e.target.value;
     
      if( name.length < 3)
        {
        setNameError( true );
      }
      else{
        setNameError( false) ;

      }



      let email = e.target.value;
    


      if( ! email.match(EmailRegex)) {
        setEmailError( true);
      }
      else {
        setEmailError( false);
      }
      setEmail(email);

    }
   return (
    <div>


        <h1> Form Validation </h1>
 
        <form onSubmit={handleSubmit}>
        <label htmlFor='Name'>  Name </label>
        <input type='text'  name='name' value={name} required  onChange={handleName} />

        <br/>
        {nameError  ? <span style={ {color: 'red'} }> Name must be of 3 words </span> : ' ' }
        <br/>

        <label htmlFor='Email'>  Email </label>
        <input type='text'  name='email'  value={email} onChange={handleEmail} required/>

        <br/>
        {emailError  ? <span style={ {color: 'red'} }> Incorrect Email </span> : ' ' }
        <br/>

        <label htmlFor='Submit'>  Submit </label>
        <input type='submit'   />


        </form>

        




    </div>
  )
}

export default Validation