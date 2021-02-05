const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000
const app = express();

const userRoute = require('./routes/User')
app.use('/api/user', userRoute)

app.use(bodyParser.json({
    limit:"10kb"
}));

app.use(require('./errorHandler'));

async function start(){
    try {
        await mongoose.connect(
            'mongodb+srv://genealogy:genealogy@cluster0.ua3xy.mongodb.net/genealogy',
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started on port ', PORT)
        })
    } catch (e) {
        console.log(e);
    }
}

start()


