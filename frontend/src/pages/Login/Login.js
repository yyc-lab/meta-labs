import React, { useState } from 'react';
import { Redirect } from 'react-router'
import Logo from '../App/lhl_logo.png'
// import Button from '../../external_components'
import 'antd/dist/antd.css';
import { Button } from 'antd'; // TODO CONNECT TO EXTERNAL COMPONENTS
import './login.css'
import qs from 'query-string';
import { useGlobal } from '../../state';


const getTokenFromQuery = () => {
  const queryValues = qs.parse(window.location.search);
  return queryValues.token
}

export const Login = () => {
  const [loginRedirect, setLoginRedirect] = useState(false)
  const [loadingSpinner, setLoadingSpinner] = useState(false)
  const [ global, setGlobal ] = useGlobal()

  if(global.token) {
    return <Redirect to="/projects" />
  }
  const token = getTokenFromQuery()

  if (token) {

    setGlobal({...global, token, loginRedirect: true})
  }
  
  if (loadingSpinner) {
    return (
      <div>
        <Button type="primary" loading>
          Loading
        </Button>
      </div>
    )
  }

  if(loginRedirect) {
    return <Redirect to="/dashboard" />
  }
  
  return (
    <main id="login-page">
      <div className="logo">YYC Labs</div>
     {/*} <button onClick={loginClick} className="github">Login with Github</button> */}
     <a href={process.env.REACT_APP_GITHUB_OAUTH_URL}> 
      Login
     </a>
      <p>A GitHub account is required to login to YYC Labs.</p>
      <img src={Logo} height="40"/>
    </main>
  )
}
