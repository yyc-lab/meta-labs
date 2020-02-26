import React from 'react';
import { Button } from '../../external_components';
import { useGlobal } from '../../state';
import './login.css';
import Logo from '../App/lhl_logo.png';
import { useLogin } from '../../api';

export const Login = () => {
  const [ login, err, loading, data  ] = useLogin();
  const [ global, setGlobal ] = useGlobal(); 

  if (loading) {
    return (
      <div className="loadingSpinner">
        <Button type="primary" loading>
          Loading
        </Button>
      </div>
    );
  }
  return (
    <main id="login-page">
      <div className="logo">YYC Labs</div>
      {/* Temp commented out until oauth is connected properly */}
      {/* <Button onClick={() => window.location.href=process.env.REACT_APP_GITHUB_OAUTH_URL}> */}
      <Button onClick={() => setGlobal({ user: 'user1' })}>
        Login
      </Button>
      {/* </a> */}
      <p>A GitHub account is required to login to YYC Labs.</p>
      <img alt="logo" src={Logo} height="40" />
    </main>
  );
};
