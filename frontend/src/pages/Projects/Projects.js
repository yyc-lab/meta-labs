import {useGlobal} from '../../state'

import React from 'react'
import { Redirect } from 'react-router'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Card  } from '../../external_components'
import { ProjectsPanel } from '../../components/ProjectsPanel'

const backendEndpoint = 'http://localhost:3030'

export const Projects = () => {
  const [global, setGlobal] = useGlobal()
  const [isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)
  const [data, setData] = useState(global.projects)
  const token = global.token
  const projects = global.projects

  const login = () => Axios.get(`${backendEndpoint}/auth/github`);

  useEffect(() => {
    if(!projects) {
      Axios.get(`${backendEndpoint}/api/projects`)
      .then((resData) => {
        setGlobal({ ...global, projects: resData.data })
        setIsLoading(false);
        setData(resData.data);
      })
      .catch((err) => {
        setErr(err);
      });
    } 
  }, []);

  // TODO should use Project component
  if (isLoading) {
    return "please wait until we load it for you"
  } else if (!data) {
    return "No project is found"
  } else {
    return <ProjectsPanel projects={projects} />
  }
}
