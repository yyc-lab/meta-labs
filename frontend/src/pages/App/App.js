import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Dashboard } from '../Dashboard';
import { NotFound } from '../NotFound';
import { NewProject } from '../NewProject';
import { Project } from '../Project';
import { Projects } from '../Projects';
import { Login } from '../Login';
import { Header } from '../../components/Header';
import 'antd/dist/antd.css';
import './App.css';
import { useGlobal } from '../../state';

function App() {
  const [{ user }] = useGlobal();
  return (
    <>
      <Router>
        <Header />
        { user ? <Redirect from="/" to="/dashboard" /> : <Redirect from="/" to="/login" /> } 
        {/* Comment above line to test to prevent redirecting upon code setting */}
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new" component={NewProject} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={Project} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
