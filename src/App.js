import React,{useState} from 'react';
import './App.css';

function App() {
  const [values,setValues] = useState({
    firstName : '',
    lastName : '',
    email : '',
    password : ''
  })
  const [submit,setSubmit] = useState(false)

  // there has to be a better way to update state without making different function for each
  // form field
  const handleFnameChange = event => {
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  }

  const handleLnameChange = event => {
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  }

  const handleEmailChange = event => {
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  }
  const handlePasswordChange = event => {
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  }

  const onSubmit = e => {
    e.preventDefault()
    setSubmit(true)
  }
  

  return (
    <section>
      <div className='MainContainer'>
        <div className='header'>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable. </p>
        </div>
        <div className='middleContainer'>
          <div className='card'>
            <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
          </div>
          <div className='formContainer'>
            <form onSubmit={onSubmit}>
            {submit && <div className='success'>Registration success! check your email</div>}
              <input type='text' name='Fname' value={values.firstName} onChange={handleFnameChange} placeholder='First Name'/>
              <input type='text' name='Lname' value={values.lastName} onChange={handleLnameChange} placeholder='Last Name'/>
              <input type='email' name='email' value={values.email} onChange={handleEmailChange} placeholder='Email Adress'/>
              <input type='password' name='password' value={values.password} onChange={handlePasswordChange} placeholder='Password'/>
              <button type='submit'>CLAIM YOUR FREE TRIAL</button>
              <p>By clicking the button, you are agreeing to our <span style={{color : 'hsl(154, 59%, 51%)'}}>Terms and Services</span></p>
            </form>
          </div>
        </div>       
        </div>
      <footer>
        <p className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel='noreferrer' target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/azzykesuma">Azzy</a>.
        </p>
      </footer>
    </section>
  );
}

export default App;
