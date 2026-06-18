const router = require('express').Router();

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

module.exports = router;