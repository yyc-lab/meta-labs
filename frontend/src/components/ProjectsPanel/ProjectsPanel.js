import React, { useState } from 'react';
import { Redirect } from 'react-router';
import {
  Card, Row, Col, Icon,
} from '../../external_components';
import { ProjectCard } from '../ProjectCard';
import { useGlobal } from '../../state';
import './styles.css';

export const ProjectsPanel = (props) => {
  const [newProjectRedirect, setnewProjectRedirect] = useState(false);
  const [{ user }] = useGlobal();

  const { projects } = props;

  const clickCreateProject = () => {
    setnewProjectRedirect(true);
  };


  if (newProjectRedirect) {
    return <Redirect to="/new" />;
  }

  return (
    <div className="projectsPanel">
      <Row gutter={16}>
        { user ? (
          <Col span={8}>
            <Card className="newProjectCard" onClick={clickCreateProject} title="New Project" bordered={false}>
              <Icon className="newProjectIcon" type="plus-circle" theme="twoTone" />
            </Card>
          </Col>
        ) : null }
        {projects && projects.map((project) => (
          <Col key={project.id} span={8}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
      <a href="/projects">View More</a>
    </div>
  );
};