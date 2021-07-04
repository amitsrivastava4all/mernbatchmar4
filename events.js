const events = require('events');
//events.defaultMaxListeners=10;
events.setMaxListeners(10);
const eventEmitterObject = new events.EventEmitter();
eventEmitterObject.setMaxListeners(0);
function callBack(){
    console.log('DB Connection Open');
}
// Register Event, it recieve the data
// alternative old way
//eventEmitterObject.addListener('dbopen', callBack);
eventEmitterObject.on('dbopen',callBack);
eventEmitterObject.on('dbopen',()=>{
    console.log('DB Connection Open2 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open3 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open4 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open5 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open6 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open7 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open8 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open9 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open10 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open11 CallBack....');
});
eventEmitterObject.once('dbopen',()=>{
    console.log('DB Connection Open12 CallBack....');
});
eventEmitterObject.on('dbclose',(value)=>{
    console.log("DB Close Event Call ",value);
})


// Event Fire

//eventEmitterObject.setMaxListeners(11);
console.log('Max Listeners are ',eventEmitterObject.getMaxListeners());
eventEmitterObject.emit('dbopen');
//eventEmitterObject.emit('dbopen');
//eventEmitterObject.off('dbopen');
//eventEmitterObject.removeListener('dbopen');
//eventEmitterObject.removeAllListeners()
//eventEmitterObject.emit('dbopen');
//eventEmitterObject.emit('dbclose',new Date());