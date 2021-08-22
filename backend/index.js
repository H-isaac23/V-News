require("dotenv").config();
const express = require("express");
const app = express();

const Tweet = require("./models/tweets");

app.use(express.json());

app.post("/api/tweets", (req, res) => {
  const body = req.body;

  const testTweet = new Tweet({
    handle: body.handle,
    date: new Date(),
    content: body.content,
  });

  testTweet
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).end());
});

app.get("/api/tweets", (req, res) => {
  Tweet.find({}).then((tweets) => {
    res.json(tweets);
  });
});

app.get("/api/tweets/:id", (req, res) => {
  Tweet.findById(req.params.id).then((tweet) => {
    res.json(tweet);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("test development");
});
