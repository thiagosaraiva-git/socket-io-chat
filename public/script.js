let user

// (HTMLElement).classList.add/remove()
function hideElement(el) {
    el.classList.add('hidden')
}
function showElement(el) {
    el.classList.remove('hidden')
}

let form = document.querySelector('form');
let errorDiv = document.querySelector('#error');
let chat = document.querySelector('#chat');
let button = document.querySelector('#sendBtn');
let message = document.querySelector('#message');
let messages = document.querySelector('#messages');

button.addEventListener('click', () => {
    socket.emit('send-message', message.value, user)
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const options = {
        headers: {
            "x-username": form.user.value,
            "x-password": form.password.value
        }
    }
    const res = await fetch("/login", options)
    if (res.ok) {
        /*
            1. hide the login form
            2. show the chat form
        */
       hideElement(errorDiv);
       hideElement(form);
       showElement(chat);

       user = form.user.value

    } else {
        errorDiv.innerText = "Failed"
    }
}) 

socket.on('record-message', (message, _user) => {
    messages.innerHTML += `
        <div class="message">
            <div>
                ${_user}: ${message}
            </div>
            <div>
                ${new Date().toString()}
            </div>
        </div>
    `
})