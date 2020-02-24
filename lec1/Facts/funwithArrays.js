var arr = [2,6,17,28,46,68];



function operation1(val){
        if(val%2==0){
           val+=1;
        }
        else{
            val+=-1;
        }
 
    return val;
}

function operation2(val){
    let flag=true;
        for(let j=2;j*j<=val;j++){
            if(val%j==0){
                flag=false;
                break;
            }
            else{
                flag=true;
            }
    }
    if(flag){
        return val;
    }
}


var arr1 = arr.map(operation1);

console.log(arr1);

var arr2 = arr1.filter(operation2);

console.log(arr2);




function mymap(arr,operation){
    arr2=[];
    for(let i=0;i<arr.length;i++){
        arr2.push(operation(arr[i]));
    }
    return arr2;
}

function myfilter(arr,operation){
    arr2=[];
    for(let i=0;i<arr.length;i++){
        val=operation(arr[i]);
        if(val!=undefined){
            arr2.push(val);
        }        
    }
    return arr2;
}

arr4 = mymap(arr,operation1);
arr5 = myfilter(arr4,operation2);
console.log(arr4);
console.log(arr5);