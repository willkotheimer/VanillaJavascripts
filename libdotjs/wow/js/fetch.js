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

    //Sitepoint add class
    function addClass(elements, myClass) {

  // if there are no elements, we're done
  if (!elements) { return; }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }

  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }

  // add class to all chosen elements
  for (var i=0; i<elements.length; i++) {

    // if class is not already found
    if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {

      // add class
      elements[i].className += ' ' + myClass;
    }
  }
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

          
          addClass(ul,'wow');
          addClass(ul,'bounceInUp');
          img.src = image.url;  
      	  span.innerHTML = `${image.title}`; 
          append(li, img); // Append all our elements
          append(li, span);
          append(ul, li);
          append(body,ul);

	});
	});

  

});