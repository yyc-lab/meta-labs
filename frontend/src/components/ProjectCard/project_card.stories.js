import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ProjectCard } from './ProjectCard';


storiesOf('ProjectCard', module)
  .add('default', () => <ProjectCard/>);
