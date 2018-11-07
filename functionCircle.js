var area = function(r) {
    var pi =3.14
    var circleArea= 3.14*r*r;

    return circleArea;
}

console.log(area(2))

const areaArrow = (r) => 3.14*r*r;

console.log('O/p from new function' +areaArrow(4));


var numArray = [1,2,3,4,5,6,7,8,9,10];
for(i=0;i< numArray.length;i++)
console.log(numArray[i]);