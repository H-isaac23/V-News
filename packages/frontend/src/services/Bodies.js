const axios = require("axios");
const tweetUrl = "/api/tweets";
const accountUrl = "/api/accounts";

const getTweets = () => {
  return axios.get(tweetUrl);
};

const getAccounts = () => {
  return axios.get(accountUrl);
};

const reloadTweets = (accounts) => {
  return axios.post(tweetUrl, accounts);
};

const services = {
  getTweets,
  getAccounts,
  reloadTweets,
};

export default services;
