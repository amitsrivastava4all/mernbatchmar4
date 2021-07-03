// file read
const fs = require('fs');
const path = require('path');
const buffer = Buffer.from('Hello Buffer', 'ascii');
console.log('Buffer ', buffer);
const buffer2 = Buffer.from([1,2,3]);
//const filePath = '/Users/arnav/Documents/node-codes/basics/hello.txt';
console.log('Current File Path ',__filename);
console.log('Current Dir Path  ',__dirname);
const parentDir = path.normalize(__dirname+"/..");
console.log('Parent Dir ',parentDir);
const fullPath = path.join(parentDir,'/files/hello.txt');
console.log('FullPath ',fullPath);
fs.readFile(fullPath, (err, content)=>{
    if(err){
        console.log(' Error is ',err);
    }
    else{
        console.log(content);
    }
})