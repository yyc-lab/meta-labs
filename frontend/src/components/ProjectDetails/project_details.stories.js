import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ProjectDetails } from './ProjectDetails';


storiesOf('ProjectDetails', module)
  .add('default', () => <ProjectDetails/>);