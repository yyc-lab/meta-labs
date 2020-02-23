import React from 'react';
import { Redirect } from 'react-router';
import useFormInputs from '../../lib/useFormInputs';
import {
  Form,
  Input,
  Button,
  Card,
  Breadcrumb,
} from '../../external_components';
import './styles.css';
import { useApi } from '../../api/useApi';

export const NewProject = () => {
  const [requestFn, err, loading, data] = useApi();
  const [formInputs, setInput] = useFormInputs();

  const {
    name,
    repo,
    timeLine,
    description,
    techStack,
    documents,
  } = formInputs;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    requestFn({
      crudType: 'CREATE',
      resource: 'projects',
      body: {
        name,
        description,
        repos: repo,
        time_line: timeLine,
        tech_stack: techStack,
        documents,
      },
    });
  };

  if (data) {
    return <Redirect to="/projects" />;
  }

  return (
    <div className="newProjectForm">
      <Form onSubmit={handleSubmit}>
        <Form.Item className="projectName">
          <h1> Project Name </h1>
        </Form.Item>
        <Form.Item>
          <Breadcrumb separator=" " className="projectPagination">
            <Breadcrumb.Item className="active">Overview</Breadcrumb.Item>
            <Breadcrumb.Item>Tasks</Breadcrumb.Item>
            <Breadcrumb.Item>Pull requests</Breadcrumb.Item>
            <Breadcrumb.Item>Commits</Breadcrumb.Item>
          </Breadcrumb>
        </Form.Item>
        <Form.Item>
          <Card title="ABOUT PROJECT" className="aboutCard">
            <p className="projectInput">Name of Project</p>
            <Input
              value={name}
              onChange={setInput('name')}
            />
            <p className="projectInput">Add Repos</p>
            <Input
              value={repo}
              onChange={setInput('repo')}
            />
            <p className="projectInput">Add Timeline</p>
            <Input
              value={timeLine}
              onChange={setInput('timeLine')}
            />
            <p className="projectInput">Add Description</p>
            <Input
              value={description}
              onChange={setInput('description')}
            />
            <p className="projectInput">Add Tech Stack</p>
            <Input
              value={techStack}
              onChange={setInput('techStack')}
            />
          </Card>
        </Form.Item>
        <div className="formButton">
          <Form.Item>
            <Button type="primary">Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
