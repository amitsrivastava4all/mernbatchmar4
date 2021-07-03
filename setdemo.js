let count =1;
const interval = setInterval(()=>{
    console.log('Count is ',count);
    if(count==10){
        clearInterval(interval);
    }
    ++count;
}, 2000);
setTimeout(()=>{
    console.log('timeout called...')
}, 10000);