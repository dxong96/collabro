import React from 'react'
import {getState} from './fixtures'

function JobList(props) {
	const jobs = getState()['jobs']
	return <div className="row row-grid">
		{jobs.map(j => <div className="col-lg-4">
			<div className="card card-lift--hover shadow border-0">
				<div class="card-body py-5">
	            <div class="icon icon-shape icon-shape-success rounded-circle mb-4">
	              <i class="ni ni-istanbul"></i>
	            </div>
	            <h6 class="text-success text-uppercase">{j.title}</h6>
	            <p class="description mt-3">{j.description}</p>
	            <div>
	              <span class="badge badge-pill badge-success">business</span>
	              <span class="badge badge-pill badge-success">vision</span>
	              <span class="badge badge-pill badge-success">success</span>
	            </div>
	            <a href="#" class="btn btn-success mt-4">Learn more</a>
	          </div>
	        </div>
        </div>
        )}
	</div>
}

export default JobList