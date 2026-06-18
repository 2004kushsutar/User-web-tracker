const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    session_id: {
        type: String,
        required: true
    },

    event_type: String,

    page_url: String,

    timestamp: {
        type: Date,
        default: Date.now
    },

    x:Number,
    y:Number
});

module.exports = mongoose.model('Event', eventSchema);