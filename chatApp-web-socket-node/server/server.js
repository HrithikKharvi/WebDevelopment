const io = require("socket.io")(8000, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
      }
});

const users = {}

io.on("connection", socket =>{
    socket.on("user-added", username =>{
        users[socket.id] = username;
        console.log(username)
        socket.broadcast.emit("added", {username});
    })

    socket.on("save-message", message =>{
        let owner = users[socket.id];
        socket.broadcast.emit("receive", {"text":message, "owner":owner});
    })
})
