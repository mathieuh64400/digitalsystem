const socket = io.connect("http://localhost:3000");
const btn = document.querySelector("#btn")

socket.on("connect", () => {
    console.log("connect");
    
})
btn.addEventListener("click", ()=>{
        socket.emit("message", "click")
    })