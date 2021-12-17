const express = require("express");
const subscriber = require("../models/subscriber");
const router = express.Router();

const Subscriber = require("../models/subscriber");

//Creating Routes For  Subscribers

// 1. Getting All

router.get("/", async (req, res) => {
    try {

        //gets all the subsribers from the database
        const subscribers = await Subscriber.find();
        res.json(subscribers)

    } catch (err) {

        res.status(500).json({
            message: err.message
        })
    }
});

// 2. Getting One 
router.get('/:id', getSubscribers, (req, res) => {
    res.json(res.subscriber.name)
})

// 3. Creating One
router.post("/", async (req, res) => {
    //adding objects to the database 

    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedTo: req.body.subscribedTo
    });

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)

    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }


});

// 4. Updating One
router.patch("/:id", getSubscribers, async (req, res) => {

    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribedTo != null) {
        res.subscriber.subscribedTo = req.body.subscribedTo
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

});
// 5. Deleting One
router.delete("/:id", getSubscribers, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({
            message: `Deleted subscriber ${res.subscriber.name}`
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
});



//creating a middleware for accessing subscribers ID
async function getSubscribers(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({
                message: "Cannot find the Stated Subscriber!!"
            })
        } else {

        }

    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
    res.subscriber = subscriber
    next()

}

module.exports = router;