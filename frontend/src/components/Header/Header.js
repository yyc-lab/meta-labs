import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useGlobal } from '../../state';
import { Layout } from '../../external_components'

const LayoutHeader = Layout.Header;
export const Header = () => {
  const [user] = useGlobal('user');
  // if (!user) return null; // TODO: Add it back in once connected with login
  let authPart = user ?  (<div className="user">
  username:
  <button> Signout </button> </div>) :       <Link to="/login">Login</Link>


  return (
    <LayoutHeader className="App-header">
      <h3 className="title"> YYCLabs </h3>
      <Link to="/projects">Projects</Link>
      <Link to="/dashboard">Dashboard</Link>
      {authPart}

    </LayoutHeader>
  )
}
