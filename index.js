const express=require('express');
const app=express();
const {createServer}=require('node:http');
const server=createServer(app);
const {Server}=require('socket.io')
const io=new Server(server);
//console.log(io);


io.on('connection',(socket)=>{
  socket.on('from client',(data)=>{
         console.log(data);
         //now we  are emitting the msg from server to client which we recieved from client
         io.emit('from server',data);
  })
})
app.use('/',express.static(__dirname+'/frontend'))
server.listen(3000,()=>{
    console.log(`Server is listneing at port 3000`);
})