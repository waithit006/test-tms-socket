var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

http.listen(4001, () => {
    console.log('listening on *:4001');
});

io.on('connect', socket => {
    socket.on('updateLatLng', (message) => {
        console.log(message);
    })
});