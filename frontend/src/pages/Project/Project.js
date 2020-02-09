import React from 'react'
import { MenuBar } from '../../components/MenuBar'
import { ProjectDetails } from '../../components/ProjectDetails'
import { Members } from '../../components/Members'
import { Documents } from '../../components/Documents'

export const Project = () => {
  return (
    <div style={{ margin: 50 }}>
      Project Page
      <h2>Project Title</h2>
      <MenuBar />
      <div style={{ display: 'flex' }}>
        <ProjectDetails />
        <div>
          <Members />
          <Documents />
        </div>
      </div>
    </div>
  )
}