
const shapes = [
{num:1,type:"square1"},
{num:2,type:"square2"},
{num:3,type:"square3"},
{num:4,type:"square4"},
{num:5,type:"square5"},
{num:6,type:"square6"},
{num:7,type:"delete2"},
{num:8,type:"delete3"}
];


var init = function() {

	let ran = Math.floor(Math.random() * 9);
	console.log(ran);
	if(ran<=4) {
		var shape1 = document.createElement('div');
		shape1.setAttribute("id",shapes[ran].type);
		document.body.appendChild(shape1);
	} else {
		console.log("remove");
		var nodes = document.getElementsByTagName("BODY")[0]; 
		nodes.removeChild(nodes.childNodes[0]); 

	}
	

	
}

makeShapes(10);

function makeShapes() {
	
	setInterval(MakeIt,200);
	//Closure
	function MakeIt() {
		// Increment counter
		init();
		

	}
}