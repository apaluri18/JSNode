

const selectionSort =(a) =>{
    let currIndex;
    let temp;
    if (a.length > 1){
for (i=0; i< a.length;i++){
    currIndex =i;
//console.log('before Sorting' + a[i]);
for (j=i+1;j<a.length;j++){
    if( a[j] < a[currIndex]){
        currIndex =j;
    }
    
}
 temp =a[currIndex];
 console.log('temp '+temp);
 console.log('Curren Index '+a[currIndex]);
 console.log('a[i] '+a[i]);

 a[currIndex]=a[i];
a[i]=temp;

}

for (k=0;k<a.length;k++){
console.log('after Sorting' + a[k]);

    }
}

}
var arrayNum =[ 34 ,56,8,2,24,6];

selectionSort(arrayNum)