const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const tweetSchema = mongoose.Schema({
  handle: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tweet_id: {
    type: String,
    required: true,
    unique: true,
  },
  profile_image_url: {
    type: String,
    required: true,
  },
});

tweetSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Tweet", tweetSchema);
