import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Login } from './Login';


storiesOf('Login Page', module)
  .add('default', () => <Login/>);