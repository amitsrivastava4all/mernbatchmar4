const fs = require('fs');
const path = '/Users/arnav/Documents/softwares/android-emulator-m1-preview.dmg';
//const path2 = '/Users/arnav/Documents/softwares/android-emulator-m1-previewcopy.dmg';
// {encoding:'utf-8',highWaterMark:20000}
let readStream = fs.createReadStream(path,{highWaterMark:20000});
let writeStream = fs.createWriteStream('android-em.dmg');
readStream.on('open',()=>{
    console.log('Stream OPen...');
});
readStream.pipe(writeStream);
// readStream.on('data',(chunk)=>{
//     //console.log('Chunk is ', chunk);
//     writeStream.write(chunk);
// });
readStream.on('end',()=>{
    console.log('Copy Data End');
});
readStream.on('error',(err)=>{
    console.log('Error During Read ',err);
});
readStream.on('close',()=>{
    console.log("Stream Close..")
})