const path = require('path');
const parentFolder  = path.normalize(__dirname+"/..");
const fullPath = path.join(parentFolder,'/files/hello.txt');
console.log(fullPath);
console.log(path.basename(fullPath)); // filename
console.log(path.basename(fullPath,'.txt')); // file name without extension
console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(fullPath));
console.log(path.extname(fullPath));
const obj = path.parse(fullPath);
console.log(path.parse(fullPath));
console.log(path.format(obj));
