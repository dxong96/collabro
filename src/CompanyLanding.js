import React from 'react'
import {getState} from './fixtures'
import {Link} from 'react-router-dom'

function CompanyLanding(props) {
	const currentState = getState()
	const currentCompany = currentState.current_company
	let jobs = []
	
	if (currentCompany) {
		jobs = currentState.jobs.filter(j => j.company_id === currentCompany.id)
	}

	return <div>
		<h3 className="text-center">Jobs</h3>
		<div className="row row-grid">
			{jobs.map(j => <div className="col-lg-4">
				<div className="card card-lift--hover shadow border-0">
					<div className="card-body py-5">
		            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
		              <i className="ni ni-istanbul"></i>
		            </div>
		            <h6 className="text-success text-uppercase">{j.title}</h6>
		            <p className="description mt-3">{j.description}</p>
		            <p><i class="fas fa-map-marker-alt"></i> {j.location}</p>
		            <div>
		              {j.tags.map(tag => {
		              	return <span className="badge badge-pill badge-success">{tag}</span>
		              })}
		            </div>
		            <Link to={`/company/jobs/${j.id}`} className="btn btn-success mt-4">View</Link>
		          </div>
		        </div>
	        </div>
	        )}
		</div>
	</div>
}

export default CompanyLanding