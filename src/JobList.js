import React from 'react'
import {getState} from './fixtures'

function JobList(props) {
	const jobs = getState()['jobs']
	return <section class="section section-lg pt-lg-4">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div className="row row-grid">
						{jobs.map(j => <div className="col-lg-4 pt-5">
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
						<div className="col-lg-4 pt-5">
							<div className="card card-lift--hover shadow border-0 bg-default">
								<div class="card-body py-5">
									<div class="pb-5"></div>
									<h6 class="text-secondary text-uppercase">Add A New Job</h6>
									<p class="description mt-3">Add A New Job</p>
									<div class="pb-5"></div>
									<a href="#" class="btn btn-secondary mt-4">Add A New Job</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
}

export default JobList