const express= require("express");
const server = require('http').createServer();
const io = require('socket.io')(server,{
    cors: {
      origin: "*",
    },
  });

io.on("connection", (socket) => {
    console.log("connection");

    socket.on("message", (msg) => {
      console.log(msg);
    })
})



server.listen(3000)


const app = express()

app.get("/test", (req, res) => {
  res.send("test")
})

app.use(express.static('public'));

app.listen(5000, ()=>{
    console.log("http://localhost:3000");
})