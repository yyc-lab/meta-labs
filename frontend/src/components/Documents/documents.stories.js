import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Documents } from './Documents'


storiesOf('Documents', module)
  .add('default', () => <Documents/>)