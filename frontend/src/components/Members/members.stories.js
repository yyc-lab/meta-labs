import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Members } from './Members';


storiesOf('Members', module)
  .add('default', () => <Members/>);