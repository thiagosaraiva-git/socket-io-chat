// node --watch main
// nodemon main
/*
    (req, res) => {}
    https://socket.io/docs/v4/server-installation/
    yarn add socket.io
    https://socket.io/docs/v4/server-api/
    https://socket.io/docs/v4/server-api/#new-serveroptions
*/

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


import express from 'express';
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
}) 

const users = [
    {id: 1, name: 'Doug', password: '1234' },
    {id: 2, name: 'Thiago', password: '1234' },
];

app.get('/login', (req, res) => {
    const username = req.header("x-username")
    const password = req.header("x-password")
    const user = users.find(u => u.name === username && u.password === password)
    if (!user) {
        res.status(404).send("User not found")
    } else {
        res.status(200).send("Success")
    }
})

app.listen(2540, () => console.log("Listening on port 2540"))