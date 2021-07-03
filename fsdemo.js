const fs = require('fs');
// sync + async
console.log('Before Async read');
try{
fs.writeFileSync('abcd.txt','ghfdskgdhfkjgd');
}
catch(err){
    console.log('Unable to write in a file', err);
}
//fs.mkdir
// fs.rmdir
// fs.copyfile
// fs.appendFile
//fs.unlinkSync(path);
//fs.unlink(path, callback);
//fs.renameSync(oldPath, newPath); // try catch
//fs.rename(oldPath, newPath,(err)=>{

//})

fs.writeFile('abcd.txt','Hello ABCD File',(err)=>{
    if(err){
        console.log('Unable to write in  a file', err);
    }
    else{
        console.log('Data Store in a file...');
    }
})
fs.readFile(__filename, (err, buffer)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('ASYNC Content is ', buffer.toString());
    }
});
console.log('After Async Read');
try{
const buffer = fs.readFileSync(__filename);
console.log('Sync ', buffer.toString());
}
catch(err){
    console.log('Error is', err);
}
console.log('After Sync ....')

