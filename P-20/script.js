// WAP that takes movie rating as a input and determine movie status.

let ratingStr = +prompt("enter rating");

if(ratingStr < 2.0) console.log("Flop");
else if(ratingStr <= 3.4) console.log("Semi-hit");
else if(ratingStr <= 4.5) console.log("Hit");
else if(ratingStr <= 5) console.log("Super Hit");

