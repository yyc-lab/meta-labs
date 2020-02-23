import React from 'react';
import { ProjectsPanel } from '../../components/ProjectsPanel';
import { useApi } from '../../api/useApi';


export const Projects = () => {
  const [requestFunc, err, isLoading, projects] = useApi({
    crudType: 'GET_MANY',
    resource: 'projects',
  });
  if (isLoading) {
    return 'please wait until we load it for you';
  }
  if (!projects) {
    return 'No project is found';
  }
  return <ProjectsPanel projects={projects} />;
};
