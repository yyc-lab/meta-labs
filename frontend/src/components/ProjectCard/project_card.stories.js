import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ProjectsCard } from './ProjectsCard';


storiesOf('ProjectsCard', module)
  .add('default', () => <ProjectsCard/>);