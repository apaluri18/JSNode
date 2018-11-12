var name ='Aditri';
console.log(name);

(function(){
    this.name ='Anirudh'
	console.log("Anonymous function invocation");
	console.log(this.name);
})();

function foo (name) {
	console.log("Simple function call");
	console.log(name); 
}

foo(name);	//prints true on console
console.log(this.name) //Prints true on console.