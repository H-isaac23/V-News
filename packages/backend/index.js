require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const tweetRouter = require("./controllers/tweets");
const accountRouter = require("./controllers/accounts");
const url = process.env.MONGODB_URI;
const app = express();
const cors = require("cors");

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to mongoDB (tweets)"));

app.use(express.json());
app.use(cors());

app.use("/api/tweets", tweetRouter);
app.use("/api/accounts", accountRouter);

// ^^^^^ api for getting tweets and accounts ^^^^^//

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("test development");
  console.log(`Server listening on http://localhost:${PORT}`);
});
