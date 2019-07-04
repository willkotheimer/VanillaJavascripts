
//Based on Daniel Schiffman's https://shiffman.net/a2z/closures/

function init() {
	
	var timer1 = document.createElement('p');
	timer1.setAttribute("id","timer1")
	var timer2 = document.createElement('p');
	timer2.setAttribute("id","timer2")

	
	document.body.appendChild(timer1);
	document.body.appendChild(timer2)

	makeTime(timer1,500);
	makeTime(timer2,200);

}

init();

function makeTime(elt,wait) {
	
	var counter=0;
	setInterval(timeIt, wait);
	//Closure
	function timeIt() {
		// Increment counter
		elt.innerHTML = counter;
		counter ++;

	}
}