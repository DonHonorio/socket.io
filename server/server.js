const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Escuchar evento de mensaje desde el cliente
  socket.on('mensaje', (msg) => {
    console.log('Mensaje recibido:', msg);
    // Emitir el mensaje a todos los clientes conectados
    io.emit('mensaje', msg);
  });

  // Escuchar cambio de estado desde el cliente
  socket.on('cambiar estado', (nuevoEstado) => {
    console.log('Estado cambiado a:', nuevoEstado);
    // Emitir el nuevo estado a todos los clientes conectados
    io.emit('estado actualizado', nuevoEstado);
  });

  // Manejo de desconexión del cliente
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
}); 