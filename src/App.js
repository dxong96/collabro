import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import CompanyLogin from "./CompanyLogin"
import StudentLogin from './StudentLogin'
import StudentLanding from './StudentLanding'
import CompanyRoutes from './CompanyRoutes'
import StudentRoutes from './StudentRoutes'
import Landing from './Landing'
import CompanyLanding from './CompanyLanding'
import CompanyJob from './CompanyJob'
import StudentJob from './StudentJob'
import Header from './NavHeader'

function App() {
  return <Router>
  	<Route path="/" component={Header} />
    <Route exact path="/" component={Landing} />
    <Route path="/student/login" component={StudentLogin} />
    <Route path="/company/login" component={CompanyLogin} />

    <StudentRoutes exact path="/student" component={StudentLanding} />
    <StudentRoutes exact path="/student/jobs" component={StudentLanding} />
    <StudentRoutes path="/student/jobs/:id" component={StudentJob} />
    
    <CompanyRoutes exact path="/company" component={CompanyLanding} />
    <CompanyRoutes exact path="/company/jobs" component={CompanyLanding} />
    <CompanyRoutes path="/company/jobs/:id" component={CompanyJob} />
  </Router>
}

export default App;
