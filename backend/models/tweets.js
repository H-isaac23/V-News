const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((response) => console.log("Connected to mongoDB"))
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
});

module.exports = mongoose.model("Tweet", tweetSchema);
