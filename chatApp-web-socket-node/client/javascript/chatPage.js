const socket = io('http://localhost:8000', {
    cors: {
        origin: "https://localhost:8000",
        methods: ["GET", "POST"]
      }
})
const chatContainer = document.querySelector(".chatContainer");
const chatSection = document.querySelector(".chatSection")
const messageForm = document.querySelector(".sendMessage");
const messageInput = document.querySelector(".messageInput");
const audio = new Audio("ding-36029.mp3");

function createMessageView(message, position){
    const div = document.createElement("div")
    div.classList.add("message");
    div.classList.add(position);
    div.innerText = message;
    chatSection.append(div);
}

messageForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let message = messageInput.value;
    socket.emit("save-message",message);
    messageInput.value = "";
    createMessageView("You: " + message, "right");
})

const name = prompt("name : ")
socket.emit("user-added", name);

socket.on("receive", message => {
    createMessageView(`${message.owner} : ${message.text}`, "left")
    audio.play();
})

socket.on("added", message =>{
    createMessageView(`${message.username} joined chat!`, "left");
})