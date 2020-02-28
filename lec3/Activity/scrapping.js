var request = require("request");
var fs = require("fs");
var cheerio = require("cheerio");


request("https://www.espncricinfo.com/series/19322/scorecard/1187679",function(err,res,html){
if(err == null && res.statusCode==200){
    mostWickets(html);
}
else if(res.statusCode == 404){
    console.log("Page Not Found");
}
else{
    console.log(err);
}
});

function mostWickets(html){
    let $ = cheerio.load(html);
    let tableHtml = $(".scorecard-section.bowling table tbody tr");
    let content = $(".scorecard-section.bowling table tbody tr");
    tableHtml = "<table>"+tableHtml+"</table>";
    let maxWickets = 0;
    let bowler="";
    for(let i=0;i<content.length;i++){
       let bowlername = $(content[i]).find("td a").text();
       let wickets =  $($(content[i]).find("td")[5]).text();
       if(wickets>maxWickets){
        maxWickets = wickets;
        bowler=bowlername;
       }
    }
    fs.writeFileSync("table.html",tableHtml);
    console.log(bowler+":"+maxWickets);
}

request("https://www.espncricinfo.com/series/19322/commentary/1187677",function(err,res,html){
if(err == null && res.statusCode==200){
    winningBallCmt(html);
}
else if(res.statusCode == 404){
    console.log("Page Not Found");
}
else{
    console.log(err);
}
});

function winningBallCmt(html){
    let $ = cheerio.load(html);
    let cmtHtml = $($(".description ")[0]).text();
    console.log(cmtHtml);
}