import React from 'react'
import {Link} from 'react-router-dom'

function Landing(props) {
	return <ul class="nav nav-pills nav-fill flex-column flex-sm-row" id="tabs-text" role="tablist">
	  <li class="nav-item">
	    <Link class="nav-link mb-sm-3 mb-md-0 active" role="tab" to="/student/login">
	    	Sign in as student
	    </Link>
	  </li>

	  <li class="nav-item">
	    <Link class="nav-link mb-sm-3 mb-md-0 active" role="tab" to="/company/login">
	    	Sign in as company
	    </Link>
	  </li>
	</ul>
}

export default Landing