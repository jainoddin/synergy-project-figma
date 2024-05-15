import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"
import "./Login.css"

const Login = () => {
  return (
    <>
    <div>
    <div style={{ position: 'relative', height: '50px' }}>
        <button className='btn-1' style={{ position: 'absolute', bottom: '0' }}>
          <FontAwesomeIcon style={{fontSize:"150%"}} icon={faAngleLeft} />
        </button>
    </div>
    <div className='text-content'>
        <h1>Sign in now</h1>
        <div>
            <p>Please sign in to continue our app</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login