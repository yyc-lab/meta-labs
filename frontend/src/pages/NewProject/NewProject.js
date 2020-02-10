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
      </Form>
    </div>
  )
}