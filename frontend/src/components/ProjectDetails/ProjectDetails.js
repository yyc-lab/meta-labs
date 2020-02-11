import React from 'react'
import { Button, Card } from '../../external_components'

export const ProjectDetails = () => {
  return (
    <div>
      <Card title="Project Details" style={{ height: 500, width: 600, margin: 20, borderRadius: 15 }}>
        <h2>About Project</h2>
        <ul>
          <p>
            <a href="https://github.com/yyc-lab/meta-labs">yyc/metalabs</a>
          </p>
          <p><strong>Timeline:</strong> 6 weeks</p>
          <p><strong>Description:</strong> A nice description about what this project is about. Lorem ipsum this space</p>
        </ul>

        <div style={{ verticalAlign: 'bottom', position: 'absolute', bottom: 0, margin: 20 }}>
          <Button style={{ backgroundColor: '#87CEEB', borderRadius: 20, marginLeft: 10 }}>React</Button>
          <Button style={{ backgroundColor: '#9ACD32', borderRadius: 20, marginLeft: 10 }}>Node</Button>
          <Button style={{ backgroundColor: '#FFD700', borderRadius: 20, marginLeft: 10 }}>Express</Button>
        </div>
      </Card>
    </div>
  )
}
