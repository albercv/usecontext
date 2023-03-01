import React, { useContext, useState } from 'react'
import { ValidateUser } from '../service/ValidateUser';
import { Error } from './Error';
import { Context } from '../context/Context'

export const Login = () => {

  const [fieldError, setFieldError] = useState(null)
  const [webError, setWebError] = useState(null)
  const [pswError, setPswError] = useState(null)
  const { user, setUser } = useContext(Context);


  const saveData = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let web = e.target.web.value;
    let password = e.target.psw.value;

    let newUser = {
      name,
      web,
      password
    }
    
    if(ValidateUser(newUser, setFieldError, setWebError, setPswError)) {
      setUser(newUser)
    }
    console.log(user);
  }

  return (
    <div>Login
      <form className='loginForm' onSubmit={saveData}>
        <div>
          <input type="text" name="name" placeholder='Name' />
          {fieldError !== null && <Error error={fieldError}/>}
        </div>
        <div>
          <input type="text" name="web" placeholder='web' />
          {webError !== null && <Error error={webError}/>}
        </div>
        <div>
          <input type="text" name="psw" placeholder='Password' />
          {pswError !== null && <Error error={pswError}/>}
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
    </div>
  )
}
