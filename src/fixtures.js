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
		},
		{
			"id": 3,
			"title": "Do this",
			"description": "abc..",
			"location": "",
			"job_type": 1
		},
		{
			"id": 4,
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

export function findById(collectionName, id) {
	return state[collectionName].find(i => i.id === id)
}

export function setById(collectionName, id, item) {
	const index = state[collectionName].findIndex(i => i.id === id)
	if (index === -1) return
	state[collectionName][index] = item
}

export function removeById(collectionName, id, item) {
	const index = state[collectionName].findIndex(i => i.id === id)
	if (index === -1) return
	state[collectionName].splice(index, 1)
}

export default {
	getState,
	findById,
	setById,
	removeById,
}