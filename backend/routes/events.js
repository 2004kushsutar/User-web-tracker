const express = require("express");
const router = express.Router();

const Event = require('../models/event');

router.post('/', async (req, res) => {

    try {
        const event = await Event.create(req.body);
        res.json(event);
    }

    catch (e) {
        res.status(500).json(e);
    }

});

router.get("/sessions", async (req, res) => {

    const sessions = await Event.aggregate([
        {
            $group: {
                _id: "$session_id",
                totalEvents: {
                    $sum: 1
                }
            }
        },

        {
            $sort: {
                totalEvents: -1
            }
        }
    ]);

    res.json(sessions);

});

router.get("/sessions/:id", async (req, res) => {
    
    const events = await Event.find({ session_id: req.params.id }).sort({ timestamp: 1 });
    
    res.json(events);

});

router.get("/heatmap", async (req, res) => {
    
    const events = await Event.find({
    
        event_type: "click",
    
        page_url: req.query.url
    
    });

    res.json(events);

});

// Get all events
router.get("/all", async (req, res) => {
    try {
        const events = await Event.find({});
        res.json(events);
    } catch (e) {
        res.status(500).json(e);
    }
});

// Get all unique page URLs

router.get("/pages", async (req, res) => {

    try {

        const pages = await Event.distinct("page_url");

        res.json(pages);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;