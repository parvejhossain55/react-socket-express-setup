const express = require("express");
const http = require("http");
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);
const path = require("path");

const io = new Server(server);

app.use(express.static("client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

io.on("connection", (socket) => {
  console.log("Connection Established");

  setTimeout(() => {
    socket.emit("message", "message from server");
  }, 1000);

  socket.on("disconnect", () => {
    console.log("Connection Disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server Running...");
});
