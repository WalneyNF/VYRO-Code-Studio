'use strict';
if(process.send)process.send({type:'command.register',name:'hello-vyro.sayHello'});
process.on('message',msg=>{if(msg?.type==='ping')process.send?.({type:'pong'})});
