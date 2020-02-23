import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobal } from '../../state';
import { Layout } from '../../external_components';

const LayoutHeader = Layout.Header;

export const Header = () => {
  const [user] = useGlobal('user');
  const loggedinHeader = user
    ? (
      <>
        <Link to="/dashboard">Dashboard</Link>
        <div className="user">
          {user.user_name}
          <button> Signout </button>
        </div>
      </>
    )
    : <Link to="/login">Login</Link>;

  return (
    <LayoutHeader className="App-header">
      <a href="/" className="title"> YYCLabs </a>
      <Link to="/projects">Projects</Link>
      {loggedinHeader}
    </LayoutHeader>
  );
};
