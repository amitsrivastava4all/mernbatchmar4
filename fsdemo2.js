const fs = require('fs');
// Change...
console.log('Watch Start');
/*fs.watchFile(__filename, (current, prev)=>{
    //console.log(current, prev);
    console.log('File Change');

})*/
fs.watch(__dirname, (eventType, fileName)=>{
    console.log('Event ',eventType);
    console.log('File ',fileName);
})