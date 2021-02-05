const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express();

async function start(){
    try {
        await mongoose.connect(
            'mongodb+srv://genealogy:genealogy@cluster0.ua3xy.mongodb.net/',
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started')
        })
    } catch (e) {
        console.log(e);
    }
}

start()
