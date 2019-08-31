import React from 'react';
import Login from './login'
import {getState} from './fixtures'
import { Redirect } from 'react-router-dom'

function StudentLogin(props) {
	const [signedIn, setSignedIn] = React.useState(false)

	const students = getState()["students"]
	console.log(students)
	const handleSignIn = (email, password) => {
		const index = students.findIndex(s => {
			return s.email.toLowerCase() === email.toLowerCase() && 
			s.password === password
		})
		console.log('signed in', index !== -1)
		setSignedIn(index !== -1)
	}
	if (signedIn) {
		return <Redirect
	      to="/"
	    />

	} else {
		return <Login onSignIn={handleSignIn} />
	}
}

export default StudentLogin