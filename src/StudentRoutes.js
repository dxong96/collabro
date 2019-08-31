import React from 'react'
import {getState, subscribe, unsubscribe} from './fixtures'
import { Redirect, Route } from 'react-router-dom'

function StudentRoutes({ component: Component, ...rest }) {
	const currentState = getState()
	const [loggedIn, setLoggedIn] = React.useState(!!currentState.current_student)
	const onStateChange = (state) => {
		setLoggedIn(!!state.current_student)
	}

	React.useEffect(() => {
		subscribe(onStateChange)
		return () => {
			unsubscribe(onStateChange)
		}
	}, [])
	return (
	    <Route
	      {...rest}
	      render={props =>
	        loggedIn ? (
	          <Component {...props} />
	        ) : (
	          <Redirect to="/student/login"/>
	        )
	      }
	    />
	  );
}

export default StudentRoutes