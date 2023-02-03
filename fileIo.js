const readlineSync = require("readline-sync");
const fs = require("fs");


const getUserInput = () => {
    let input= readlineSync.question("Please enter your two points as follows: x1,y1,x2,y2");
    return input
}

const writeUserInputToFile= () => {
    let userInput=getUserInput();
    fs.mkdirSync(__dirname + "/dataPoints");

    fs.writeFile((__dirname + "/dataPoints"),"points.txt","utf8", userInput, (err) => {
        if(err){
            console.log("file not written");
        }else{
            console.log("Content written to file successfully")
        }
    });
}

writeUserInputToFile();