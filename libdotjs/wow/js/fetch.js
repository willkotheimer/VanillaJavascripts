	document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded

  	var body = document.getElementsByTagName('BODY')[0];

	function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  	}

  	function append(parent, el) {
  	
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

  counter=2;

	fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
	.then(response => response.json())
	.then(function(data) {
	let images = data;
  let rowkeep = [];

	return images.map(function(image) {
    if (image.id > 20) return;
    if(counter%2==0) {
            
            console.log(counter);
          }
		  let li = createNode('li'), //  Create the elements we need
          img = createNode('img'),
          span = createNode('span');
           

          
          addClass(span,'wow');
          //addClass(span,'bounceInUp');
          if(counter%2==0) {
          addClass(span,'slideInRight');
          span.setAttribute('data-wow-duration','1s');
          span.setAttribute('data-wow-delay','1s');
          
          
          } else {
          addClass(span,'bounceInLeft');
          span.setAttribute('data-wow-duration','1s');
          span.setAttribute('data-wow-delay','1s');
          } 
          img.src = image.url;  
          addClass(img,'size');
          append(span, img); // Append all our elements
          rowkeep.push(span);
          
          if(rowkeep.length==3) {
            let row = createNode('row');
            append(row,rowkeep.pop());
            append(row,rowkeep.pop());
            append(row,rowkeep.pop());
            append(body,row);


          }
          
          counter++;

	});
	});

  

});