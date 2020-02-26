var viewFile = require("./commands/view");
var treefyFile = require("./commands/treefy");
var untreefyFile = require("./commands/untreefy");
var monitorFile = require("./commands/monitor");
var helpFile = require("./commands/help");

let cmd = process.argv[2];

switch(cmd){
    case "view":
        viewFile.view(process.argv[3],process.argv[4]);
        break;
    case "treefy":
        treefyFile.treefy(process.argv[3],process.argv[4]);
        break;
    case "untreefy":
        untreefyFile.untreefy(process.argv[3],process.argv[4]);
        break;
    case "help":
        helpFile.help();
        break;
    case "monitor":
        monitorFile.monitor(process.argv[3],process.argv[4]);
        break;
    default:
        console.log("Wrong Command");
}