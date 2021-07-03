//console.log(process);
process.on('uncaughtException',(err)=>{
    // SMS + EMAIL
    console.log('::::::::::Error is ',err);
})
//.addEventListener('click'
console.log(process.cwd());
process.stdout.write('Hello Node');
process.stdout.write('Hi Node');
console.log(process.argv);
const env = process.argv[2];
const envConst = require('./env');
adder();
console.log('Env is ',envConst[env]);
