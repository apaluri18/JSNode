let newArray = ['lalitha','Aditri'];
newArray.push('Anirudh');
console.log(newArray);
newArray.shift();
console.log(newArray);
newArray.reverse()
console.log(newArray);

const person ={
    name :'Anirudh',
    DOB:'18-NOV',
    Intersts :'Coding'
};

const person2 = {...person};
console.log(person2);

const toArray = (...args) => {
    return args
}

console.log(toArray(1,2,3,4))