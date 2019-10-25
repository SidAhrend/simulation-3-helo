require('dotenv').config();
const express = require('express');
const massive = require('massive');
// const session = require('express-session');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const ctrl = require('./controller');
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: {
//         maxAge: 1000*60*60
//     }
// }))

//endpoints
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)


const port = SERVER_PORT;
app.listen(port, () => console.log(`we be rollin on port ${port}`))