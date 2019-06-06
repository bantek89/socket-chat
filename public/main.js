console.log('hello');
const form = document.querySelector('form');
const inputMessage = document.getElementById('inputMessage');
const messages = document.getElementById('messages');


window.onload = () => {
    
    const socket = io();
    form.addEventListener('click', (e) => {
        e.preventDefault();
        socket.emit('chat message', inputMessage.value);
        inputMessage.value = '';
        return false;
    })
    socket.on('chat message', (msg) => {
        console.log('front end: ', msg)
        const sentMessage = document.createElement('li')
        sentMessage.textContent = msg;
        messages.appendChild(sentMessage);
    })
}



