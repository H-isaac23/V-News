const tweetsRouter = require("express").Router();
const Tweet = require("../models/tweets");
const getNewTweets = require("../services/getNewTweets");

tweetsRouter.post("/", (req, res) => {
  const accounts = req.body;
  // loop through the accounts and save tweets to database
  accounts.forEach((account) => {
    getNewTweets(account.t_id)
      .then((result) => {
        const data = result.data;
        const tweets = data.data;

        // for all the tweets on an account, make a new Tweet instance and save to db
        if (data.includes !== undefined) {
          const user_info = data.includes.users;
          tweets.forEach((tweet) => {
            const newTweet = new Tweet({
              handle: user_info[0].username,
              date: tweet.created_at,
              content: tweet.text,
              tweet_id: tweet.id,
              profile_image_url: user_info[0].profile_image_url.replace(
                "normal",
                "200x200"
              ),
            });

            newTweet
              .save()
              .then((result) => {
                res.status(200).end();
              })
              .catch((err) => {
                res.status(400).end();
                console.log(err.message);
              }); // in case the tweet already exists in the db
          });
        }
      })
      .catch((err) => console.log(err));
  });
});

tweetsRouter.get("/", (req, res) => {
  Tweet.find({}).then((tweets) => {
    res.json(tweets);
  });
});

tweetsRouter.get("/:id", (req, res) => {
  Tweet.findById(req.params.id).then((tweet) => {
    res.json(tweet);
  });
});

module.exports = tweetsRouter;
