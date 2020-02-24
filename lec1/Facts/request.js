var cp = require("child_process");
var opn = require("opn");

//Server
function takeRequest(data,success,failure){
if(data%2==0){
    success();
}
else{
    failure();
}

}

//client
function success(){
opn("https://www.facebook.com");
}

function failure(){
cp.exec('msconfig');
}


takeRequest(17,success,failure);
takeRequest(18,success,failure);