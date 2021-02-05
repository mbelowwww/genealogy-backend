const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const PORT = process.env.PORT || 3000
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./errorHandler'))

//Auth
const authRouter = require('./routes/Auth')
app.use('/api', authRouter)

// User
const userRoute = require('./routes/User')
app.use('/api/user', userRoute)

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


