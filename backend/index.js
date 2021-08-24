require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Account = require("./models/accounts");
const axios = require("axios");
const token = process.env.BEARER_TOKEN;
let accounts = null;
let Tweet = null;

// ^^^^^ basic setup ^^^^^^ //

Account.find({}).then((res) => {
  accounts = res;
  console.log("--------------------------------");
  console.log("--------------------------------");
  console.log("--------------------------------");
  mongoose.connection.close();
  Tweet = require("./models/tweets");
});

const BEARER = `Bearer ${token}`;

const getNewTweets = (acc_id) => {
  const API_URL = `https://api.twitter.com/2/users/${acc_id}/tweets?max_results=5&expansions=author_id&tweet.fields=public_metrics,text&user.fields=id,username,name,profile_image_url&exclude=retweets,replies`;

  return axios.get(API_URL, {
    headers: {
      Authorization: BEARER,
    },
  });
};

// ^^^^^ api for getting tweets ^^^^^//

app.use(express.json());

app.post("/api/tweets", (req, res) => {
  // loop through the accounts and save tweets to database
  accounts.forEach((account) => {
    getNewTweets(account.t_id)
      .then((result) => {
        const data = result.data;
        const tweets = data.data;
        const user_info = data.includes.users;
        console.log(user_info);

        // for all the tweets on an account, make a new Tweet instance and save to db
        tweets.forEach((tweet) => {
          const newTweet = new Tweet({
            handle: user_info[0].username,
            date: new Date(),
            content: tweet.text,
            tweet_id: tweet.id,
            profile_image_url: user_info[0].profile_image_url.replace(
              "normal",
              "200x200"
            ),
          });

          newTweet
            .save()
            .then(res.status(200).end())
            .catch((err) => console.log(err.message)); // in case the tweet already exists in the db
        });
      })
      .catch((err) => console.log(err));
  });
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
