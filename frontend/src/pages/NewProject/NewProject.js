import React from 'react'

import 'antd/dist/antd.css';
import { Form, Input, Button, Card, Breadcrumb } from 'antd';

export const NewProject = () => {
  return (
    <div style={{ width: 'fit-content', margin: '0 auto' }}>
      <Form >
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
          <p style={{fontWeight: 'bold'}}>Add Repos</p>
          <p style={{fontWeight: 'bold'}}>Add Timeline</p>
          <p style={{fontWeight: 'bold'}}>Add Description</p>
          <Input/>
          <p style={{fontWeight: 'bold'}}>Add Tech Stack</p>
          <Input/>          
        </Card>
        </Form.Item>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Form.Item>
            <Button type="primary">Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}