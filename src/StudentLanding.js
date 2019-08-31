import React from 'react'
import {getState, findById, setById} from './fixtures'
import {statusName} from './Utils'
import {Link} from 'react-router-dom'

function JobList(props) {
	const currentState = getState()
	const currentStudent = currentState["current_student"]
	const jobPlacements = currentState["job_placements"].filter(jp => jp.student_id === currentStudent.id).map(jp => {
		return {
			...jp,
			job: findById("jobs", jp.job_id)
		}
	})
	console.log(jobPlacements)
	const [statuses, setStatuses] = React.useState(jobPlacements.map(jp => jp.status))
	const handleReject = (index) => () => {
		const statusesClone = statuses.slice()
		statusesClone[index] = 2
		setStatuses(statusesClone)
		
		const job_placement = jobPlacements[index]
		job_placement.status = 2
		setById("job_placements", job_placement.id, job_placement)
	}

	const handleAccept = (index) => () => {
		const statusesClone = statuses.slice()
		statusesClone[index] = 1
		setStatuses(statusesClone)

		const job_placement = jobPlacements[index]
		job_placement.status = 1
		setById("job_placements", job_placement.id, job_placement)
	}

	const buttons = (index) => {
		const job_placement = jobPlacements[index]
		if (statuses[index] === 0) {
			return <React.Fragment>
				<button onClick={handleAccept(index)} className="btn btn-primary mt-4">Accept</button>
				<button onClick={handleReject(index)} className="btn btn-danger mt-4">Reject</button>
			</React.Fragment>
		} else if (statuses[index] === 1) {
			return <Link to={`/student/jobs/${job_placement.job.id}`} className="btn btn-success mt-4">View</Link>
		} else {
			return null;
		}
	}

	return <div>
		<h3 className="text-center">Jobs</h3>
		<div className="row row-grid">
			{jobPlacements.map((j, index) => <div className="col-lg-4" key={index}>
				<div className="card card-lift--hover shadow border-0">
					<div className="card-body py-5">
		            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
		              <i className="ni ni-istanbul"></i>
		            </div>
		            <h6 className="text-success text-uppercase">{j.job.title}</h6>
		            <p className="description mt-3">{j.job.description}</p>
		            <p><i class="fas fa-map-marker-alt"></i> {j.job.location}</p>
		            <p>Status: {statusName(j.status)}</p>
		            <div>
		              {j.job.tags.map(tag => {
		              	return <span className="badge badge-pill badge-success">{tag}</span>
		              })}
		            </div>
		            {buttons(index)}
		          </div>
		        </div>
	        </div>
	        )}
		</div>
	</div>
}

export default JobList