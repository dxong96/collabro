let state = {
	"students": [
		{
			"id": 1,
			"email": "student@gmail.com",
			"password": "password"
		},
		{
			"id": 2,
			"email": "student1@gmail.com",
			"password": "password"
		}
	],
	"companies": [
		{
			"id": 1,
			"email": "company@gmail.com",
			"password": "password"
		},
		{
			"id": 2,
			"email": "company1@gmail.com",
			"password": "password"
		}
	],
	"jobs": [
		{
			"id": 1,
			"title": "Do this",
			"description": "abc..",
			"location": "",
			"job_type": 0
		},
		{
			"id": 2,
			"title": "Do this",
			"description": "abc..",
			"location": "",
			"job_type": 1
		}
	],
	"job_placements": [
		{
			"student_id": 1,
			"job_id": 1,
			"status": 0
		}
	],
	"daily_reports": [
		{
			"id": 1,
			"date": 20190831,
			"text": "I did something"
		}
	]
}

export function getState() {
	return state
}

export default {
	getState,
}