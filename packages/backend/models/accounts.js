const mongoose = require("mongoose");

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
