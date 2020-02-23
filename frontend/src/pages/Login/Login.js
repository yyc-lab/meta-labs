import React, { useState } from 'react';
import { Redirect } from 'react-router';
import qs from 'query-string';
import Axios from 'axios';
import { Button } from 'antd'; // TODO CONNECT TO EXTERNAL COMPONENTS
import 'antd/dist/antd.css';

import './login.css';
import Logo from '../App/lhl_logo.png';
import { useGlobal } from '../../state';

const backendEndpoint = 'http://localhost:3022';

const getTokenFromQuery = () => {
  const queryValues = qs.parse(window.location.search);
  return queryValues.token;
};

export const Login = () => {
  const [loginRedirect, setLoginRedirect] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [loadUser, setLoadUser] = useState(false);
  const [global, setGlobal, user] = useGlobal();

  const token = getTokenFromQuery();

  function fetchUser() {
    setLoadUser(true);
    Axios.get(`${backendEndpoint}/api/user/profile`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setGlobal({ ...global, user: res.data.data });
        setLoadUser(false);
      })
      .catch(() => setLoadUser(false));
  }

  if (global.token) {
    return <Redirect to="/projects" />;
  }


  if (token) {
    if (!user && !loadUser) {
      fetchUser();
    }
    setGlobal({ ...global, token, loginRedirect: true });
  }

  if (loadingSpinner) {
    return (
      <div>
        <Button type="primary" loading>
          Loading
        </Button>
      </div>
    );
  }

  if (loginRedirect) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <main id="login-page">
      <div className="logo">YYC Labs</div>
      <a href={process.env.REACT_APP_GITHUB_OAUTH_URL}>
        Login
      </a>
      <p>A GitHub account is required to login to YYC Labs.</p>
      <img alt="logo" src={Logo} height="40" />
    </main>
  );
};
