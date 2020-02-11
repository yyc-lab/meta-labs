import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Card, Row, Col, Icon } from '../../external_components'

export const ProjectsPanel = (props) => {
  const [projectRedirect, setProjectRedirect] = useState(false)

  const clickCreateProject = () => {
    setProjectRedirect(true)
  }

  if(projectRedirect) {
    return <Redirect to="/new" />
  }

  return (
    <div style={{ background: '#ECECEC', padding: '15px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card style={{ height: 300, textAlign: 'center' }} onClick={clickCreateProject} title="New Project" bordered={false}>
            <Icon style={{fontSize: '100px', textAlign: 'center', paddingTop: 40 }} type="plus-circle" theme="twoTone" />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ height: 300 }} title="Meta Labs Project" bordered={false}>
            <h2>Meta Labs</h2>
            <a> GitHub </a>
            <p><strong>Description:</strong> A nice description about what this project is about. Lorem ipsum this space</p>
            <p><strong>Estimated length:</strong> 6 weeks</p>
            <p>Project Tech Stack Icons</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ height: 300 }} title="Other Project" bordered={false}>
            <h2>Other Project</h2>
            <a> GitHub </a>
            <p><strong>Description:</strong> Some new description, very descriptive that will hopefully take up at least two lines</p>
            <p><strong>Estimated length:</strong> 4 weeks</p>
            <p>Another Project Tech Stack Icons</p>
          </Card>
        </Col>
      </Row>
      <a href="/projects">View More</a>
    </div>
  )
}
