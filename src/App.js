import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import CompanyLogin from "./CompanyLogin"
import StudentLogin from './StudentLogin'
import JobList from './JobList'

function App() {
  return <Router>
    <Route path="/student/login" component={StudentLogin} />
    <Route path="/company/login" component={CompanyLogin} />
    <Route path="/jobs" component={JobList} />
  </Router>
}

export default App;
