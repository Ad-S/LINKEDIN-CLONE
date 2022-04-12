const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApplySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    rec_email: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    job_id:{
        type: String,
        required: true
    },
    Skills: {
      type: String,
      required: true
    },
    Institute_name: {
        type: String,
        required: true
    },    
    Stage_of_app: {
      type: String,
      required: true
    },
    sop: {
        type: String,
        required: true
    },

    date: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = applied = mongoose.model("applied", ApplySchema);