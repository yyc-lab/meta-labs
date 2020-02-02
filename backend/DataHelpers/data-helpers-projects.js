const arrayToString = (array) => {
  if(array &&  Array.isArray(array)) {
    return array.join()
  } 
  return null
}

const serialize = (project) => {
  project.repos = arrayToString(project.repos)
  project.tech_stack = arrayToString(project.tech_stack)
  project.documents = arrayToString(project.documents)
  return project
}

const deserialize = (project) => {
  project.repos = project.repos ? project.repos.split(',') : []
  project.tech_stack = project.tech_stack ? project.tech_stack.split(',') : []
  project.documents = project.documents ? project.documents.split(',') : []

  return project
}

module.exports = function(knex){

  //==============================================
  //       GET USER - By Id, username, email
  //==============================================
    
    function getProjects(cb) {
      knex.select('*').from('projects')
        .asCallback(function(err, projects) {
          if (err) {
            cb(err);
          }
          projects.map(project => deserialize(project))
          cb(null, projects)
        });
    }
  
    function addProject(cb, project) {
      knex('projects')
      .insert(serialize(project))
      .returning('*')
      .asCallback(function(err, result) {
          if (err) {
            cb(err);
          }
          cb(null, deserialize(result[0]))
        });
    }
  
    return { 
      getProjects,
      addProject
    }
  
  }