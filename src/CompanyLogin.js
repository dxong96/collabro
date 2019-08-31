import React from 'react';
import Login from './login'
import {getState, setStateByPath} from './fixtures'
import { Redirect } from 'react-router-dom'

function CompanyLogin(props) {
	const [signedIn, setSignedIn] = React.useState(false)

	const companies = getState()["companies"]
	const handleSignIn = (email, password) => {
		const index = companies.findIndex(s => {
			return s.email.toLowerCase() === email.toLowerCase() && 
			s.password === password
		})
		console.log('signed in', index !== -1)
		setSignedIn(index !== -1)
		setStateByPath(["current_company"], companies[index])
	}
	if (signedIn) {
		return <Redirect
	      to="/company"
	    />

	} else {
		return <Login onSignIn={handleSignIn} />
	}
}

export default CompanyLogin