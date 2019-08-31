import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import CompanyLogin from "./CompanyLogin"
import StudentLogin from './StudentLogin'
import JobList from './JobList'
import JobNew from './JobNew';


function App() {
  return <Router>
    <Route path="/student/login" component={StudentLogin} />
    <Route path="/company/login" component={CompanyLogin} />
    <Route path="/company/jobs" component={JobList} />
    <Route path="/company/newjob" component={JobNew} />
  </Router>
}

export default App;
