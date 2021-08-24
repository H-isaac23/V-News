const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
const uniqueValidator = require("mongoose-unique-validator");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((response) => console.log("Connected to mongoDB (tweets)"))
  .catch((err) => console.log(err.message));

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
