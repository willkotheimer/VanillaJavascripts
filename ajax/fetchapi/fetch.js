


// based on https://github.com/typicode/jsonplaceholder
// and https://www.youtube.com/watch?v=uBR2wAvGces
//https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data


	//First part fetches images and prints them to body.
	//second part fetches apis and consoles them out when button
	//pressed

	document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded

  	var body = document.getElementsByTagName('BODY')[0];

	function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  	}

  	function append(parent, el) {
  	console.log(parent);
  	console.log(el);
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  	}

	fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
	.then(response => response.json())
	.then(function(data) {
	let images = data;
	return images.map(function(image) {
		  let li = createNode('li'), //  Create the elements we need
          img = createNode('img'),
          ul = createNode('ul'),
          span = createNode('span');

          img.src = image.url;  // Add the source of the image to be the src of the img element
      	  span.innerHTML = `${image.title}`; // Make the HTML of our span to be the first and last name of our author
          append(li, img); // Append all our elements
          append(li, span);
          append(ul, li);
          append(body,ul);

	});
	});

  

});



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

