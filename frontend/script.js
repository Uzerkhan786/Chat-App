
 let  b=document.getElementById('btn');
 b.addEventListener('click',function exe(){
    const  inputMsg=document.getElementById('1').value;
 let a=document.createElement('he')
 a.innerText=inputMsg;
 document.getElementById('3').appendChild(a)
   
    })

 const socket=io();

socket.on('event from server',()=>{
   console.log('emitting from server to client');
})


    setInterval(() => {
        socket.emit('from client');
    }, 3000);





