import React from 'react'
import { Button, Card } from '../../external_components'

export const ProjectDetails = () => {
  return (
    <div>
      <Card title="Project Details" style={{ height: 500 }}>
        About Project
        
        yyc/metalabs
        
        Timeline - 6 weeks
        
        Description
        <div>
          <Button type="primary">React</Button>
          <Button>Node</Button>
          <Button type="danger">Express</Button>
        </div>
      </Card>
    </div>
  )
}
