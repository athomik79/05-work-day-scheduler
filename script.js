// Calling moment variable
var m = moment();

// Dislplay current day at top of calendar
// console.log(m.format("dddd, MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));
for (let i = 9; i < 18; i++);

console.log(m.format("dddd, MMMM Do"));