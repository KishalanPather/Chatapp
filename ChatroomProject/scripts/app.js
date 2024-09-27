//dom queries
const chatList = document.querySelector(".chat-list");
const messageBox = document.querySelector(".new-chat");
const nameBox = document.querySelector(".new-name");
const updateMssg = document.querySelector(".update-mssg");



const chatroom = new Chatroom("general","anon");
const chatUI = new ChatUI(chatList);

chatroom.getChats((x) => {
    console.log(x);
    chatUI.rendor(x.username,x.message,x.created_at.toDate());
});

messageBox.addEventListener("submit", e => {
    e.preventDefault();

    chatroom.addChat(messageBox.message.value.trim()).then(() => {
        messageBox.reset();
    });
})

nameBox.addEventListener("submit",e =>{
    e.preventDefault();

    const username = nameBox.name.value.trim()
    chatroom.updateName(username);
    nameBox.reset();
    
    updateMssg.innerText = `Your name was updated to ${username}`
    
    setTimeout(() => {
        updateMssg.innerText= ""
    },3000)

})