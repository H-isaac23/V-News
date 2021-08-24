const mongoose = require("mongoose");

const url = process.env.MONGODB_URI_ACC;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to mongoDB (accounts)"))
  .catch((err) => console.log(err.message));

const accountSchema = mongoose.Schema({
  t_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Account", accountSchema);
