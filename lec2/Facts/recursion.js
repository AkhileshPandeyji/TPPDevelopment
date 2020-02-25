function printDec(num){
    if(num==0){
        return;
    }
    console.log(num);
    printDec(num-1);
}
function printInc(num){
    if(num==6){
        return;
    }
  console.log(num);  
  printInc(num+1);
}


printInc(1);
printDec(5);