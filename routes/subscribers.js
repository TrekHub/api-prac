const express = require('express')
const router = express.Router()

const Subscriber = require('../models/subscriber')



//Creating Routes For  Subscribers


// 1. Getting All

router.get('/', (req, res) => {
    res.send('Hello World')

});

// 2. Creating One
router.post('/', (req, res) => {
    

});

// 3. Updating One
router.patch('/:id', (req, res) => {

})
// 4. Deleting One
router.delete('/:id', (req, res) => {

})



module.exports = router