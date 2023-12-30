let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(typeof myDate);
console.log();
let myCreatedDate = new Date(2023, 1,1,23)
console.log(myCreatedDate.toDateString());
let timeStamp = Date.now()
console.log(Math.round(timeStamp/1000));
console.log(myDate.toLocaleString('default', {
    weekday: "short",
}));