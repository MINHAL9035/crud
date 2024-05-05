const express = require('express')
const session = require('express-session')
const noCache = require('nocache')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()
const connectDB = require('./database/connection')
connectDB()

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
)

app.use(noCache())
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, 'public')))

const userRoute = require('./routes/userRoute')
app.use("/", userRoute);

const adminRoute = require('./routes/adminRoute');
app.use("/admin", adminRoute);

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});

