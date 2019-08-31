import React from 'react'
import {findById, getState} from './fixtures'
import {Redirect} from 'react-router-dom'
import {statusName} from './Utils'

function CompanyJob(props) {
	const {match} = props
	const currentState = getState()
	const jobId = match.params.id
	const job = findById("jobs", jobId)
	const reports = currentState.daily_reports.filter(dr => dr.job_id === job.id)
	const placements = currentState.job_placements.filter(placement => placement.job_id == job.id)
		.map(placement => Object.assign({}, placement, {
			student: findById("students", placement.student_id)
		}))

	if (job === null) {
		return <Redirect to="/company" />
	}

	return <React.Fragment>
		<div class="card card-lift--hover shadow border-0">
		  <div class="card-body py-5">
		    <h6 class="text-primary text-uppercase">{job.title}</h6>
		    <p class="description mt-3">{job.description}</p>
		    <p><i class="fas fa-map-marker-alt"></i> {job.location}</p>
		    <div>
		      {job.tags.map((tag, index) => {
	          	return <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
	          })}
		    </div>
		  </div>
		</div>
		<h3 className="text-center">Reports</h3>
		{reports.map(report => 
			<div className="card">
				<div className="card-body">
					<h6 class="text-uppercase">{report.date}</h6>
					<p class="description mt-3">{report.text}</p>
				</div>
			</div>
		)}

		<h3 className="text-center">Free Lancers</h3>
		{placements.map(placement => 
			<div className="card">
				<div className="card-body">
					<h6 class="text-uppercase">{placement.student.name}</h6>
					<p class="description mt-3">Status: {statusName(placement.status)}</p>
				</div>
			</div>
		)}
	</React.Fragment>
}

export default CompanyJob