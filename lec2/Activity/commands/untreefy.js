var fs = require("fs");
var path = require("path");
var uniqid = require("uniqid");

module.exports.untreefy = function(){
    let src = arguments[0];
    let dest = arguments[1];

    untreefyDir(src,dest);
}

function untreefyDir(src,dest){
    var arr=[];
    var ans = fs.lstatSync(src).isFile();
    if(ans){
        let filename = uniqid();
        let newPath = path.join(dest,filename);
        fs.copyFileSync(src,newPath);
    }
    else{
        let children = fs.readdirSync(src);
        for(let i=0;i<children.length;i++){
            let pathname = path.join(src,children[i]);
            untreefyDir(pathname,dest);
        }
    }
    
}




