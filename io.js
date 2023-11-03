/*
    (req, res) => {}
    https://socket.io/docs/v4/server-installation/
    yarn add socket.io
    https://socket.io/docs/v4/server-api/
    https://socket.io/docs/v4vscode-file://vscode-app/c:/Users/jkrz/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html/server-api/#new-serveroptions
    https://socket.io/docs/v4/client-api/
    <script src="/socket.io/socket.io.js"></script>
    https://socket.io/docs/v4/handling-cors/
*/


import { Server } from "socket.io";
const io = new Server({
    cors: {
        origin: "*"
    }
})
io.on('connection', socket => {
    socket.on('send-message', (message, user) => {
        socket.broadcast.emit('record-message', message, user)
        socket.emit('record-message', message, user)
    })
})
io.listen(4321)