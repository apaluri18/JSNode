

const bubbleSort =(a) =>{
    let currIndex;
    let temp;
    let swap =false;
    let count =0;
    if (a.length > 1){
for (i=0; i< a.length;i++){
    swap = false;
    currIndex =i;
//console.log('before Sorting' + a[i]);
for (j=0;j<a.length-1;j++){
    count=count+1;
  console.log('Comparing '+a[j]+'&&'+a[j+1])
    if( a[j] > a[j+1]){
        //currIndex =j;
        swap =true;
        temp = a[j];
        a[j]=a[j+1];
        a[j+1]=temp;
        
    }

   
  
}

  if (swap ==false )
  break;


 console.log('------------')

}
console.log('Loop count '+count);
for (k=0;k<a.length;k++){
console.log('after Sorting' + a[k]);

    }
}

}
var arrayNum =[ 5,1,4,2,8,10,7,3];

bubbleSort(arrayNum)