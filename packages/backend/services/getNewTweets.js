require("dotenv").config();
const axios = require("axios");
const token = process.env.BEARER_TOKEN;
const BEARER = `Bearer ${token}`;

const getNewTweets = (acc_id) => {
  let start_time = new Date();

  const API_URL = `https://api.twitter.com/2/users/${acc_id}/tweets?max_results=5&start_time=${new Date(
    start_time.setTime(start_time.getTime() - 6 * 60 * 60 * 1000)
  ).toISOString()}&expansions=author_id&tweet.fields=public_metrics,text,created_at&user.fields=id,username,name,profile_image_url&exclude=retweets,replies`;

  return axios.get(API_URL, {
    headers: {
      Authorization: BEARER,
    },
  });
};

module.exports = getNewTweets;
