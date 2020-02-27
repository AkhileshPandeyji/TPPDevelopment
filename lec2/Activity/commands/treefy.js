var path = require("path")
var fs = require("fs");

module.exports.treefy = function(){
    let src = arguments[0];
    let dest = arguments[1];
    let pathtojson = path.join(src,"metadata.json");
    let rawData = fs.readFileSync(pathtojson);
    let root = JSON.parse(rawData);
    treefyDir(src,dest,root);
}

function treefyDir(src,dest,node){
    if(node.isFile == true){
        let oldFile = path.join(src,node.newName);
        let newFile = path.join(dest,node.name);
        fs.copyFileSync(oldFile,newFile);
    }
    else{
        let newPath = path.join(dest,node.name);
        if(!fs.existsSync(newPath))
        fs.mkdirSync(newPath);
        for(let i=0;i<node.children.length;i++){
            treefyDir(src,newPath,node.children[i]);
        }
    }
}