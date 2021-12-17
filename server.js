require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

//create app using express
const app = express();


//connecting to the database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error',(error) => console.error(error));
db.once('open', () => {console.log("Connected to the Database")})


//Allow server to accept JSON
app.use(express.json())

//setting up routes
const subscribersRoutes = require('./routes/subscribers')
app.use('/subscribers', subscribersRoutes)









//Fire up ther server at port 3000
app.listen(3000, () => {
    console.log("Server has been started");
})