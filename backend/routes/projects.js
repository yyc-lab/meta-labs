"use strict";

const express       = require('express');
const projectRoutes  = express.Router();



//==============================================
//         HELPER FUNCTIONS
//==============================================

const getPostCallback = function(res){
  const postCallback = function(err, result){
    if(err){
      res.status(404).send('error');
    }
    res.status(201).send(result);
  }
  return postCallback
}

const createProjectObj = (input) => {
  const {name, description, repos, time_line, tech_stack, documents} = input
  if(!name || ! description || !repos || !time_line || !tech_stack){
    return null;
  }
  return {
    name,
    description,
    repos,
    time_line,
    tech_stack,
    documents
  }
}
//==============================================
//         PROJECT ROUTES
//==============================================
module.exports = function(DataHelpers) {

  projectRoutes.get("/", function(req, res){
    DataHelpers.projects_helpers.getProjects(function(err, projects){
      if(err){
        console.log("err", err)
        res.status(404).send('wrong request');
      }
      else{
        res.status(200).send(JSON.stringify(projects))
      }
    })

  })

  projectRoutes.post('/', function(req,res){
    if(req.body){
      const project = createProjectObj(req.body)
      if(project){
        DataHelpers.projects_helpers.addProject(getPostCallback(res), project)
      }else{
        res.status(401).send('invalid request');
      }
    }
    else{
      res.status(401).send('invalid request');
    }

  })  
  return projectRoutes;
};