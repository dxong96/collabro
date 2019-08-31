import React from 'react'
import {getState} from './fixtures'
 
function JobNew(props) {
	const jobs = getState()['newjobs']
	return <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                    <h5 class="title text-success">Step 1: Create Header</h5>
					<div class="row">
							<div class="col-md-6">
								<div class="form-group">
        							<input type="email" class="form-control form-control-alternative" id="exampleFormControlInput1" placeholder="Subject">
									</input>
								</div>
								<div class="form-group">
									<form>
										<textarea class="form-control form-control-alternative" rows="3" placeholder="Write Job Description here..."></textarea>
									</form>
								</div>	
							</div>
					</div>			
				</div>
				<a href="#" class="btn btn-success mt-4">Add Job</a>
            </div>
}

export default JobNew