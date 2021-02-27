const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3000
const app = express();

app.use(cors());

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./errorHandler'))

// Auth
const authRoute = require('./routes/Auth')
app.use('/api', authRoute)

// User
const userRoute = require('./routes/User')
app.use('/api/user', userRoute)

// Node
const nodeRoute = require('./routes/Node')
app.use('/api/node', nodeRoute)

async function start(){
    try {
        await mongoose.connect(
            '"mongodb://localhost:27017/test',
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            });
        app.listen(PORT, () => {
            console.log('Server has been started on port ', PORT)
        })
    } catch (e) {
        console.log(e);
    }
}
start()


