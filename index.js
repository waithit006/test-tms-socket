var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(4001, () => {
    console.log('listening on *:4001');
});

io.on('connect', socket => {
    console.log("Connected");


    socket.on('openRoom',(message)=>{
        console.log("message",message);
        console.log("SocketID",socket.id);
        socket.join("tracking1")
    })

    socket.on('updateLatLng', (message) => {
        console.log(message);
        socket.join('track1')
        io.emit('loadLatLng',{msg:message,ip:socket.handshake.address})

        io.to("tracking1").emit('loadLatLng',{msg:message,ip:socket.handshake.address,rooms:"tracking1"})
    })
});