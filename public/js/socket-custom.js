var socket = io();

//escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Alex',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});