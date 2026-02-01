// Ask user for words until they type “stop”. Count how many times they typed “yes”. Loop until "stop" is typed. Count "yes"

let word = prompt("type words");
let count = 0;

while(word !== "stop"){
    if(word === "yes"){
        count++
    }
    word = prompt("type words");
}

if(word === "stop"){
    console.log(`total number of times yes typed is ${count}`);
}
