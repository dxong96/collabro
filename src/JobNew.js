import React from 'react'
import {getState} from './fixtures'

function JobNew(props){
	return <div class="row justify-content-center">
				<div class="col-lg-12">
	 			<div class="card shadow shadow-lg--hover mt-5">
				<div class="card-body">
						<div class="row">
							<div class="col-md-6">
								<h5 class="title text-success">Step 1: Create Job Name</h5>
								<div class="form-group">
									<input type="text" class="form-control form-control-alternative"id="exampleFormControlInput1" placeholder="Job Name..">
									</input>
								</div>
								<h5 class="title text-success">Step 2: Select JobType</h5>
								<div class="custom-control custom-radio mb-3">
								<input name="custom-radio-1" class="custom-control-input" id="customRadio1" type="radio"></input>
								<label class="custom-control-label" for="customRadio1">Research & Development</label>
								</div>
								<div class="custom-control custom-radio mb-3">
								<input name="custom-radio-1" class="custom-control-input" id="customRadio2" type="radio"></input>
								<label class="custom-control-label" for="customRadio2">Freelance</label>
								</div>
								<h5 class="title text-success">Step 3: Write A short Brief of the Job</h5>
								<div class="form-group">
									<form>
										<textarea class="form-control form-control-alternative" id="shortDes1" rows="3" placeholder="Short Description.."></textarea>
									</form>
								</div>
								<h5 class="title text-success">Step 4: Add A Venue</h5>
								<div class="form-group">
									<form>
										<textarea class="form-control form-control-alternative" id="venue1" rows="3" placeholder="Venue.."></textarea>
									</form>
								</div>	
							</div>
						</div>			
					</div>
				<a href="#" class="btn btn-success mt-4" onClick={addJob} >Add Job</a>
            </div>
			</div>
			</div>
}

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
	alert("dfdf")
}  

export default JobNew