const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs')
const app = express()
const path = require('path');

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    //  *Set static folder up in production
    app.use(express.static('https://expense-tracker-mk0mut9ad-geraldwaga92.vercel.app/'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'https://expense-tracker-mk0mut9ad-geraldwaga92.vercel.app/')));

    //routes
    // this will read the routes folder and all its contents
    readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
}



const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()