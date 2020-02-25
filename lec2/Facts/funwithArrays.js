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


Array.prototype.mymapping = function (operation){
    arr2=[];
    for(let i=0;i<this.length;i++){
        arr2.push(operation(this[i]));
    }
    return arr2;
}
Array.prototype.myfiltering = function (operation){
    var arr2=[];
    for(let i=0;i<this.length;i++){
        val=operation(this[i]);
        if(val!=undefined){
            arr2.push(val);
        }        
    }
    return arr2;
}

var arr7 = arr.mymapping(operation1);

console.log(arr7);

var arr8 = arr7.myfiltering(operation2);

console.log(arr8);