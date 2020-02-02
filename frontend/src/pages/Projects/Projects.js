import {useGlobal} from '../../state'

import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
const backendEndpoint = 'http://localhost:3030'

const renderProjects = (isLoading, projects) => {
  if(isLoading){
    return "please wait until we load it for you"
  }else if(! projects){
    return "No project is found"
  }
  else{
    return projects.map(project => 
      <div>
        <h2>{project.name}</h2>
        {project.repos.map(repo => <a href={repo}> GitHub </a>)}
        <p>{project.description}</p>
        <p>Estimated length: {project.time_line}</p>
        <p>{project.tech_stack.join(", ")}</p>
      </div>
      )
  }
}

export const Projects = () => {
  const [ global, setGlobal ] = useGlobal()
  const [isLoading, setIsLoading] = useState(true) 
  const [err, setErr] = useState(null)
  const [data, setData] = useState(global.projects)
  const token = global.token

  const login = () => Axios.get(`${backendEndpoint}/auth/github`);

  useEffect(() => {
    if(!global.projects) {
      Axios.get(`${backendEndpoint}/api/projects`)
      .then((data) => {
        setGlobal({ ...global, projects: data.projects })
        setIsLoading(false);
        setData(data.data);
      })
      .catch((err) => {
        setErr(err);
      });
    } 
  }, []);
  // TODO should use Project component
  return renderProjects(isLoading, data)
}