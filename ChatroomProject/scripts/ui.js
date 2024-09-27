class ChatUI {
    constructor(list){
        this.list = list;
    }

    rendor(user,message,time){
        const htmlSnippet = `<li class="list-group-item"> 
                            <span class="username"> ${user}: </span>
                            <span class= "message"> ${message} </span>
                            <div class="time"> ${time} </div>
                            </li>`;

        this.list.innerHTML += htmlSnippet;
    }



}