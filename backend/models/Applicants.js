const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplicantSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
        Institute_name: {type: String, required: true},
        srt_year: {type: String, required: true},
        end_year: {type: String, required: false},
    Skills: {
        type: String,
        required: true
    },
    // Rating: {
    //     type: Number,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now
    }
  });

  module.exports = Applicants = mongoose.model("applicants", ApplicantSchema);