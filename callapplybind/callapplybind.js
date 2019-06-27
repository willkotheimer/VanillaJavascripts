//call


var obj = {num:2};
var obj2 = {num:5};

var addToThis =  function(a,b,c){
	return this.num + a + b + c;
}

//1st argument in call has to be the object
console.log(addToThis.call(obj,1,2,3)); //functionname.call(obj,functionarguments)

//apply works with array arguments:

var arr = [1,2,3];
console.log(addToThis.apply(obj,arr)); 
console.log(addToThis.apply(obj2,arr));

//bind

var bound = addToThis.bind(obj);

console.log(bound(...arr));
