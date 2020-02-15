import React, { useState } from 'react'
import { Progress, Radio } from '../../external_components'

export const MenuBar = () => {
  const [projectMenu, setProjectMenu] = useState('overview')

  const handleMenuChange = e => {
    setProjectMenu(e.target.value)
  }

  return (
    <div style={{ margin: 15, width: 1250, height: 30 }}>
      <div style={{ float: 'left', width: '40%' }}>
        <Radio.Group onChange={handleMenuChange}>
          <Radio.Button value="overview">OVERVIEW</Radio.Button>
          <Radio.Button value="tasks">TASKS</Radio.Button>
          <Radio.Button value="pull-requests">PULL REQUESTS</Radio.Button>
          <Radio.Button value="commits">COMMITS</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ float: 'right', width: '60%', height: 30 }}>
        <Progress strokeLinecap="square" percent={75} />  
      </div>
    </div>
  )
}
