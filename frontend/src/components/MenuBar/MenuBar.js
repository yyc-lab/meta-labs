import React, { useState } from 'react'
import { Progress, Radio } from '../../external_components'

export const MenuBar = () => {
  const [projectMenu, setProjectMenu] = useState('overview')

  const handleMenuChange = e => {
    setProjectMenu(e.target.value)
  }

  return (
    <div style={{ margin: 15, height: 30 }}>
      <div style={{ float: 'left', width: '40%' }}>
        <Radio.Group onChange={handleMenuChange}>
          <Radio.Button value="overview">Overview</Radio.Button>
          <Radio.Button value="tasks">Tasks</Radio.Button>
          <Radio.Button value="pull-requests">Pull Requests</Radio.Button>
          <Radio.Button value="commits">Commits</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ float: 'right', width: '60%', height: 30 }}>
        <Progress strokeLinecap="square" percent={75} />  
      </div>
    </div>
  )
}