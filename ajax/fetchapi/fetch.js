


// based on https://github.com/typicode/jsonplaceholder
// and https://www.youtube.com/watch?v=uBR2wAvGces

const fetchGet = () => { 
 fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(json =>console.log(json))
.then(err => console.log(JSON.stringify(err)))
}

const fetchPost = () => {
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1
	}),
	headers: {
		"Content-type" : "application/json; charset=UTF-8"
	}
})
.then(response => response.json())
.then(json => console.log(json))
}

const fetchGetAsync = async() => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
		const body = await response.json();
		console.log("Body",body);
	} catch(err) {
		console.log(err)
	}
}

const fetchPostAsync = async() => {
	try {
	
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1
	}),
	headers: {
		"Content-type" : "application/json; charset=UTF-8"
	}
});
	const body = await response.json();
	console.log("Body",body);
	

	} catch(err) {

		console.log(err);
	}
}

