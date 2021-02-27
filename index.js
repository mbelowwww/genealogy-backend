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

//cors happy
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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


