let state = {
	"students": [
		{
			"id": 1,
			"name": "student A",
			"email": "student@gmail.com",
			"password": "password"
		},
		{
			"id": 2,
			"name": "student B",
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
			"job_type": 0,
			"company_id": 1,
			"tags": [],
		},
		{
			"id": 2,
			"title": "Do this",
			"description": "abc..",
			"location": "",
			"job_type": 1,
			"company_id": 2,
			"tags": [],
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
			"text": "I did something",
			"job_id": 1
		}
	]
}
let listeners = []

function publish() {
	for (const listener of listeners) {
		listener(state)
	}
}

export function subscribe(listener) {
	listeners.push(listener)
}

export function unsubscribe(listener) {
	const index = listeners.indexOf(listener)
	listeners.splice(index, 1)
}

export function getState() {
	return state
}

export function findById(collectionName, id) {
	return state[collectionName].find(i => i.id == id)
}

export function setById(collectionName, id, item) {
	const index = state[collectionName].findIndex(i => i.id == id)
	if (index === -1) return
	state[collectionName][index] = item
	publish()
}

export function removeById(collectionName, id, item) {
	const index = state[collectionName].findIndex(i => i.id === id)
	if (index === -1) return
	state[collectionName].splice(index, 1)
	publish()
}

export function setStateByPath(path, value) {
	console.log("setStateByPath", path, value)
	if (!path) 
		return

	let node = state
	for (let i = 0; i < path.length - 1; i++) {
		node = node[path[i]]
	}
	node[path[path.length - 1]] = value
	publish()
	console.log("post setStateByPath state", state)
}

export function removeStateByPath(path, value) {
	console.log("removeStateByPath", path, value)
	if (!path) 
		return

	let node = state
	for (let i = 0; i < path.length - 1; i++) {
		node = node[path[i]]
	}
	delete node[path[path.length - 1]]
	publish()
	console.log("post removeStateByPath state", state)
}


export function getMaxId(collectionName) {
	return state[collectionName].reduce((max, item) => {
		if (item.id > max) 
			return item.id
		return max
	}, 0)
}

export default {
	getState,
	findById,
	setById,
	removeById,
}