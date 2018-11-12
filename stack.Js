var i;
var j;
const stackPrint =(array) => {
    console.log('Array elements are');
    for (i=array.length-1; i>=0; i--){
        console.log(array[i]);
    }
}
//delete always the last element
const stackPop =(array)=>{
    i=array.length-1;
    if (i==-1){
        console.log('stack underflow');
    }
    console.log('Element to be removed =>'+array[i]);
    array.splice(i);
}

const stackPush =(array,newElement)=>{
    i=array.length-1;
    array[i+1]=newElement;

    console.log('Element added is '+array[i+1]);
}

const stackArray=['ball','bat','racket','wicket','stumps'];
const stackArray1=[];
//stackPush(stackArray,'mat');
stackPop(stackArray);
stackPop(stackArray);
stackPop(stackArray);
stackPop(stackArray1);
stackPrint(stackArray);
stackPush(stackArray,'mat');
stackPrint(stackArray);