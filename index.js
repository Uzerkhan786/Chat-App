const express=require('express');
const app=express();
const {createServer}=require('node:http');
const server=createServer(app);
const {Server}=require('socket.io')
const io=new Server(server, {
  connectionStateRecovery: {}
});
//console.log(io);


io.on('connection',(socket)=>{
  setInterval(() => {
    socket.emit('event from server')

  }, 2000); 

  socket.on('from client',()=>{
    console.log('from client to server');
  })
})
app.use('/',express.static(__dirname+'/frontend'))
server.listen(3000,()=>{
    console.log(`Server is listneing at port 3000`);
})