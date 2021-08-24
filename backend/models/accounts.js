const mongoose = require("mongoose");

const url =
  "mongodb+srv://aisha_test:aisha_test@cluster0.mgaom.mongodb.net/vnews-accounts?retryWrites=true&w=majority";

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

module.exports = new mongoose.model("Account", accountSchema);
