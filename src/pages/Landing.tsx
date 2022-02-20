import React from 'react'
import { useAuth } from '../contexts/AuthContext';

const Landing = () => {
  const { register } = useAuth();

  return (
    <div>
      <button onClick={register}>Login with Google</button>
    </div>
  )
}

export default Landing