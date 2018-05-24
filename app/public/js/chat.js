 var socket = io();
 const userName = document.querySelector('#chatName');
 const userMessage = document.querySelector('#chatMessage');

socket.on('connect', function() {
    const chatForm = document.forms.chatForm;

    if(chatForm) {
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        socket.emit('postMessage',{
            name: userName.value,
            message: userMessage.value,
        });
        userMessage.value = '';
        userMessage.focus();
        });
        socket.on('updateMessages', function(data) {
            showMessage(data);
        });
    }
});

function showMessage(data) {
    const chatBoard = document.querySelector('.chat-board');
    const newMessage = document.createElement('p');
    if(userName.value === data.name) {
        newMessage.className = 'new-outgoing-message';
    } else {
        newMessage.className = 'new-incoming-message';
    }
    
    newMessage.innerHTML = '<strong>' + data.name + '</strong>: ' + data.message;
    chatBoard.insertBefore(newMessage, chatBoard.firstChild);
}