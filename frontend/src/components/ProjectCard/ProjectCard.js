
import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Card } from '../../external_components'

const getTechStackIcons = techStack => {
  return techStack // TODO need to build function to return icons
}


export const ProjectCard = (props) => {
  const [projectRedirect, setProjectRedirect] = useState(false)

  const showProjectDetail = () => {
    setProjectRedirect(true)
  }

  if(projectRedirect) {
    return <Redirect to={`projects/${props.id}`} />
  }

  return (
    <Card onClick={showProjectDetail} style={{ height: 300, cursor: 'pointer' }} title={props.name} bordered={false}>
      <h2>{props.name}</h2>
      <a href={props.repos}> GitHub </a>
      <p><strong>Description:</strong>{props.description}</p>
      <p><strong>Estimated length:</strong>{props.time_line}</p>
      <section>{getTechStackIcons(props.tech_stack)}</section>
    </Card>
  )
}

