const socket=io();
 let  b=document.getElementById('btn');
 let  inputMsg=document.getElementById('1');

 b.addEventListener('click',function exe(){
      socket.emit('from client',{
        msg:inputMsg.value
      })
    })

socket.on('from server',(data)=>{
    let a=document.createElement('he');
    a.innerText=data;
    document.getElementById('3').appendChild(a);
})









