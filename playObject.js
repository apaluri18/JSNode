var person ={
    name:"Anirudh",
    Age:"29",
    greet:() => {
        console.log('Hi '+ this.name);
        console.log('5 & 1:', (5 & 1)); 
console.log('5 | 1:', (5 | 1)); 
console.log('~ 5:', (~5)); 
console.log('5 ^ 1:', (5 ^ 1)); 
console.log('5 << 1:', (5 << 1)); 
console.log('5 >> 1:', (5 >> 1))
    }

};

person.greet();