import React from 'react'
import {findById, getState, subscribe, unsubscribe} from './fixtures'
import {Redirect} from 'react-router-dom'
import {statusName,fromDateToInt} from './Utils'
import DailyReportForm from './DailyReportForm'

function StudentJob(props) {
	const {match} = props
	const currentState = getState()
	const currentStudent = currentState.current_student
	const jobId = match.params.id
	let job = findById("jobs", jobId)
	if (currentState.job_placements.findIndex(jp => jp.student_id === currentStudent.id && jp.job_id === job.id) === -1) {
		job = null
	}

	const reports = currentState.daily_reports.filter(dr => dr.job_id === job.id)
	const todayInt = fromDateToInt(new Date())
	const [todayReport, setTodayReport] = React.useState(reports.find(r => r.date === todayInt))

	const onStateChange = (state) => {
		const report = state.daily_reports.find(r => r.date === todayInt && r.job_id === job.id)
		setTodayReport(report)
		console.log('today report changed')
	}

	React.useEffect(() => {
		subscribe(onStateChange)
		return () => {
			unsubscribe(onStateChange)
		}
	}, [])

	if (!job) {
		return <Redirect to="/student" />
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
		<h3 className="text-center">Today's Report</h3>
		<DailyReportForm job_id={job.id} report={todayReport}/>
		<h3 className="text-center">Previous Reports</h3>
		{reports.map(report => 
			<div className="card">
				<div className="card-body">
					<h6 class="text-uppercase">{report.date}</h6>
					<p class="description mt-3">{report.text}</p>
				</div>
			</div>
		)}
	</React.Fragment>
}

export default StudentJob