const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecruitersSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    contact_no: {
      type: Number,
      required: true
    },
    bio: {
        type: String,
        required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = Recruiter = mongoose.model("recruiters", RecruitersSchema);