import React from 'react'
import {getState, subscribe, unsubscribe, removeStateByPath} from './fixtures'

function NavHeader(props) {
	const currentState = getState()
	const [loggedIn, setLoggedIn] = React.useState(!!currentState.current_company || !!currentState.current_student)
	const onStateChange = (state) => {
		setLoggedIn(!!state.current_company || !!state.current_student)
	}

	React.useEffect(() => {
		subscribe(onStateChange)
		return () => {
			unsubscribe(onStateChange)
		}
	}, [])

	const handleLogout = (e) => {
		e.preventDefault()
		removeStateByPath(['current_student'])
		removeStateByPath(['current_company'])
	}

	return <nav class="navbar navbar-expand-lg navbar-dark bg-default">
	    <div class="container">
	        <a class="navbar-brand" href="#">Default Color</a>
	        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
	            <span class="navbar-toggler-icon"></span>
	        </button>
	        <div class="collapse navbar-collapse" id="navbar-default">
	            <div class="navbar-collapse-header">
	                <div class="row">
	                    <div class="col-6 collapse-brand">
	                        <a href="index.html">
	                            <img src="assets/img/brand/blue.png"/>
	                        </a>
	                    </div>
	                    <div class="col-6 collapse-close">
	                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
	                            <span></span>
	                            <span></span>
	                        </button>
	                    </div>
	                </div>
	            </div>

	            <ul class="navbar-nav ml-lg-auto">
	            	{loggedIn && <li class="nav-item">
	                    <a class="nav-link nav-link-icon" href="#" onClick={handleLogout}>
	                        Log out
	                    </a>
	                </li>}
	            </ul>

	        </div>
	    </div>
	</nav>


}

export default NavHeader