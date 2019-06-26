var triple = function(x) {
	return x * 3
}

var waffle = triple

console.log(waffle(30))

var animals = [
	{ name: 'Fluffykins', species: 'rabbit' },
	{ name: 'Caro',       species: 'dog' },
	{ name: 'Hamilton',   species: 'dog' },
	{ name: 'Harold',     species: 'fish'},
	{ name: 'Ursula',     species: 'cat' },
	{ name: 'Jimmy',       species: 'fish' }
]

//filters

var dogs = animals.filter(function(animal) {

return animal.species === 'dog'

})

console.log(dogs);

//Breaking out callback into separate variable:

var isDog = function(animal) {

return animal.species === 'dog'

}

var isnotDog = function(animal) {

return animal.species !== 'dog'
}
var dogs2 = animals.filter(isDog)
var notdogs = animals.filter(isnotDog)

console.log(dogs2)

console.log(notdogs)

/*
var dogs =[]
for(var i=0;i<animals.length;i++) {
	if (animals[i].species === 'dog')
		dogs.push(animals[i])
}
*/
