const express = require('express')

//create app using express
const app = express();


//Fire up ther server at port 3000
app.listen(3000, () => {
    console.log("Server has been started");
})