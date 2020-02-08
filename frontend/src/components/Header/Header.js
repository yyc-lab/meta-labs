import React from 'react';
import { useGlobal } from '../../state';
import { Layout } from '../../external_components'

const LayoutHeader = Layout.Header;
export const Header = () => {
  const [user] = useGlobal('user');
  // if (!user) return null; // TODO: Add it back in once connected with login
  return (
    <LayoutHeader className="App-header">
      <h3 className="title"> YYCLabs </h3>
      <div className="user"> 
        username: 
        <button> Signout </button>
      </div>
    </LayoutHeader>
  )
}