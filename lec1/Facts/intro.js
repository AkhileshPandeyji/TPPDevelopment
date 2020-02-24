console.log("Hello World!!!!!");


let number = 53;
for(let i=2;i*i<=number;i++){
    if(number%i==0){
        console.log("Number is not Prime");
        return;
    }
}

console.log("Number is prime");