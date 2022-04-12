const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    max_applications: {
        type: Number,
        required: true
    },
    max_positions: {
        type: Number,
        required: true
    },
        posting_day:{ type: Number, required: true},
        posting_month:{type: Number, required: true},
        posting_year:{type: Number, required: true},

        Deadline_day:{ type: Number, required: true },
        Deadline_month:{type: Number, required: true},
        Deadline_year:{type: Number, required: true},
        Deadline_hour:{type: Number, required: true},
        Deadline_minute:{type: Number, required: true},
    Required_skillset: {
        type: String,
        required: true
    },
    Type_of_job: {
        type: String,
        required: true
    },
    Duration: {
        type: Number,
        required: true
    },
    Salary_per_month: {
        type: Number,
        required: true
    },
    // rating: {
    //     type: Number,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Details = mongoose.model("details",DetailsSchema);