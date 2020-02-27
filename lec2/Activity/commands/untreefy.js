var fs = require("fs");
var path = require("path");
var uniqid = require("uniqid");

module.exports.untreefy = function(){
    let src = arguments[0];
    let dest = arguments[1];
    let root={};
    untreefyDir(src,dest,root);
    fs.writeFileSync(path.join(dest,"metadata.json"),JSON.stringify(root));
}

function untreefyDir(src,dest,node){
    let ans = fs.lstatSync(src).isDirectory();
    if(ans==false){
        let uniqname = uniqid();
        node.isFile=true;
        node.name=path.basename(src);
        node.newName=uniqname;
        fs.copyFileSync(src,path.join(dest,uniqname));
    }
    else{
        node.isFile=false;
        node.name = path.basename(src);
        node.children=[];
        let childrens = fs.readdirSync(src);
        for(let i=0;i<childrens.length;i++){
            let chobj = {};
            let chpath = path.join(src,childrens[i]);
            untreefyDir(chpath,dest,chobj);
            node.children.push(chobj);
        }
    }
}




