import React from 'react'
import {setStateByPath,getState,setById,getMaxId} from './fixtures'

function JobNew(props){

	const jobs = props.jobs || {}
	const [title, setTitle] = React.useState(jobs.title || '')
	const [description, setDesc] = React.useState(jobs.description || '')
	const [job_type, setJobType] = React.useState(jobs.job_type || '')
	const [location, setLocation] = React.useState(jobs.location || '')

  	//const todayInt = fromDateToInt(new Date())
  	const handleSave = () => {
    if (props.jobs) {
      const newJobs = Object.assign({}, props.jobs, {
        title,
        description,
      })
      setById('jobs', props.jobs.id, newJobs)
      console.log('Jobs updated')
    } else {
      const newJobs = Object.assign({}, props.job, {
		job_type,
        title,
        description,
        location,
        id: getMaxId('jobs') + 1
      })
      const jobs = getState().jobs.concat(newJobs)
      setStateByPath(["jobs"], jobs)
      console.log('JobsForm added new')
    }
  }

	return <div class="row justify-content-center">
				<div class="col-lg-12">
	 			<div class="card shadow shadow-lg--hover mt-5">
				<div class="card-body">
						<div class="row">
							<div class="col-md-6">
								<h5 class="title text-success">Step 1: Create Job Name</h5>
								<div class="form-group">
									<input type="text" class="form-control form-control-alternative"id="exampleFormControlInput1" placeholder="Job Name.." value={title} onChange={(e) => setTitle(e.target.value)}>
									</input>
								</div>
								<h5 class="title text-success">Step 2: Select JobType</h5>
								<div class="custom-control custom-radio mb-3">
								<input name="custom-radio-1" class="custom-control-input" id="customRadio1" type="radio" value={job_type} onChange={(e) => setJobType(e.target.value)}></input>
								<label class="custom-control-label" for="customRadio1">Research & Development</label>
								</div>
								<div class="custom-control custom-radio mb-3">
								<input name="custom-radio-1" class="custom-control-input" id="customRadio2" type="radio" value={job_type} onChange={(e) => setJobType(e.target.value)}></input>
								<label class="custom-control-label" for="customRadio2">Freelance</label>
								</div>
								<h5 class="title text-success">Step 3: Write A short Brief of the Job</h5>
								<div class="form-group">
									<form>
										<textarea class="form-control form-control-alternative" id="shortDes1" rows="3" placeholder="Short Description.." value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
									</form>
								</div>
								<h5 class="title text-success">Step 4: Add A Venue</h5>
								<div class="form-group">
									<form>
										<textarea class="form-control form-control-alternative" id="venue1" rows="3" placeholder="Venue.." value={location} onChange={(e) => setLocation(e.target.value)}></textarea>
									</form>
								</div>	
							</div>
						</div>			
					</div>
				<a href="#" class="btn btn-success mt-4" onClick={handleSave} >Add Job</a>
            </div>
			</div>
			</div>
}
/*
function addJob(){  
	const jobs = getState()['jobs']
	var jobType;
	var name=document.getElementById("exampleFormControlInput1").value;  

	if(document.getElementById("customRadio1").checked = true)
		 jobType= 1;
	else
		 jobType = 0;

	var des = document.getElementById("shortDes1").value;  
	var venue = document.getElementById("venue1").value;
	var jobsID = jobs.length + 1

	var SAMPLE_JSON={
		"id": jobsID,
		"title": name,
		"description": des,
		"location": venue,
		"job_type": jobType
	};
	
	jobs.push(SAMPLE_JSON);
	alert("dfdf")*/

export default JobNew