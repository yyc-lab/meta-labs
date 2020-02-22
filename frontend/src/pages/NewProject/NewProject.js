import React, { useState, useCallback } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios';
import {useGlobal} from '../../state'
import useFormInputs from '../../lib/useFormInputs'

import 'antd/dist/antd.css';
import { Form, Input, Button, Card, Breadcrumb } from '../../external_components';
import './styles.css';

export const NewProject = () => {
  const token     = global.token
  const [server]  = useGlobal('server');
  const [formInputs, setInput] = useFormInputs();
 
  const {
    name,
    repo,
    timeLine,
    description,
    techStack,
    documents
  } = formInputs;
  const [created, setCreated] = useState(false)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`${server}projects`, {
      name,
      description,
      repos: repo,
      time_line: timeLine,
      tech_stack: techStack,
      documents
    },
    {headers: { authorization: `Bearer ${token}` }})
    .then(function (response) {
      setCreated(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  if(created){
    return <Redirect to='/projects'/>;
  }

  return (
    <div style={{ width: 'fit-content', margin: '0 auto' }}>
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
        <Card title="ABOUT PROJECT" style={{ width: 300 }}>
          <p style={{fontWeight: 'bold'}}>Name of Project</p>
          <Input
            value={name}
            onChange={setInput('name')}
          />
          <p style={{fontWeight: 'bold'}}>Add Repos</p>
          <Input
            value={repo}
            onChange={setInput('repo')}
          />
          <p style={{fontWeight: 'bold'}}>Add Timeline</p>
          <Input
            value={timeLine}
            onChange={setInput('timeLine')}
          />
          <p style={{fontWeight: 'bold'}}>Add Description</p>
          <Input
            value={description}
            onChange={setInput('description')}
          />
          <p style={{fontWeight: 'bold'}}>Add Tech Stack</p>
          <Input
            value={techStack}
            onChange={setInput('techStack')}
          />
        </Card>
        </Form.Item>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Form.Item>
            <Button type="primary">Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
