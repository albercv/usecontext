import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const User = () => {

    const {user} = useContext(Context);
  return (
    <div>
        User:
        <h1>User: {user.name}</h1>
        <h1>WEB: {user.web}</h1>
    </div>
  )
}
