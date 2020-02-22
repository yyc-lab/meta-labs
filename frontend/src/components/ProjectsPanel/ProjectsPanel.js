import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Card, Row, Col, Icon } from '../../external_components'
import { ProjectCard } from '../ProjectCard'

export const ProjectsPanel = (props) => {
  const [newProjectRedirect, setnewProjectRedirect] = useState(false)

  const clickCreateProject = () => {
    setnewProjectRedirect(true)
  }

  if(newProjectRedirect) {
    return <Redirect to="/new" />
  }

  return (
    <div style={{ background: '#ECECEC', padding: '15px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card style={{ height: 300, textAlign: 'center', cursor: 'pointer' }} onClick={clickCreateProject} title="New Project" bordered={false}>
            <Icon style={{fontSize: '100px', textAlign: 'center', paddingTop: 40 }} type="plus-circle" theme="twoTone" />
          </Card>
        </Col>
        {props.projects && props.projects.map(project => (
          <Col key={project.id} span={8}>
            <ProjectCard {...project}/>
          </Col>
        ))}
      </Row>
      <a href="/projects">View More</a>
    </div>
  )
}
