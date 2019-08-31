import React from 'react'
import {getState, subscribe, unsubscribe} from './fixtures'
import { Redirect, Route } from 'react-router-dom'

function CompanyRoutes({ component: Component, ...rest }) {
	const currentState = getState()
	const [loggedIn, setLoggedIn] = React.useState(!!currentState.current_company)
	const onStateChange = (state) => {
		setLoggedIn(!!state.current_company)
		console.log('onStateChange company: ', state.current_company)
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
	          <Redirect to="/company/login"/>
	        )
	      }
	    />
	  );
}

export default CompanyRoutes