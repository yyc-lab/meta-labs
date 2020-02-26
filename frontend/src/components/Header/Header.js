import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobal } from '../../state';
import { Layout } from '../../external_components';
const LayoutHeader = Layout.Header;

export const Header = () => {
  const [{ user }, setGlobal] = useGlobal();
  
  const signout = () => { 
    setGlobal({ user: null});  
    window.history.go(0)
  }

  const loggedinHeader = user
    ? (
      <>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <div className="user">
          {user.user_name}
          <button onClick={signout}> Signout </button>
        </div>
      </>
    )
    : <NavLink to="/login">Login</NavLink>;

  return (
    <LayoutHeader className="App-header">
       <h3 className="title"> YYCLabs </h3>
      <NavLink to="/projects">Projects</NavLink>
      { loggedinHeader }
    </LayoutHeader>
  );
};
