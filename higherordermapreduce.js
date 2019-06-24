const companies = [

{name: "Company One", category: "Finance", start: 1981 , end: 2003 },
{name: "Company Two", category: "Retail", start: 1992 , end: 2008 },
{name: "Company Three", category: "Auto", start: 1999 , end: 2007 },
{name: "Company Four", category: "Retail", start: 1989 , end: 2010 },
{name: "Company Five", category: "Technology", start: 2009, end:2014 },
{name: "Company Six", category: "Finance", start: 1987 , end: 2010},
{name: "Company Seven", category: "Auto", start: 1986, end: 1996},
{name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
{name: "Company Nine", category: "Retail", start: 1981, end: 1989},

];

const ages = [33,12,20,16,54,21,44,61,13,15,45,25,64,32];

//for
for(let i=0; i<companies.length; i++) {
 console.log(companies[i]);
}
//foreach
companies.forEach(function(company,index,array) {
console.log(company);
})
//filter
//es5
const canDrink = ages.filter(function(age) {
 if(age >= 21) {
   return true;
 }
})
console.log("1:"+canDrink);
//es6
const canDrink2 = ages.filter(age => age >=21);
console.log("2:"+canDrink2);
//es5
const retailCompanies = companies.filter(function(company) {
	if(company.category=="Retail") { return true;}
})
console.log(retailCompanies);

//es6
const retailCompanies2 = companies.filter(company => company.category == "Retail");
console.log(retailCompanies2)

console.log("eighties companies");
const eightiescompanies = companies.filter(company => (company.start >= 1980 && company.end <1990));
console.log(eightiescompanies);

console.log("companies that lasted for ten years or more:");

const tenyearcomps = companies.filter(company => (company.end - company.start >=10));
console.log(tenyearcomps);

//map
//create array of company names

//function syntax
const companyNames = companies.map(function(company) {
	return company.name;
})

console.log(companyNames);

const testMap = companies.map(function(company) {
	return `${company.name} [${company.start} - ${company.end}]`;

});

console.log(testMap);

//shorthand:
const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap2);

//Map using ages
const agesSquare = ages.map(age=> Math.sqrt(age));
console.log(agesSquare);

//sort

//reduce
