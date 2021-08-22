const axios = require("axios");
const baseUrl = "/api/tweets";

const getTweets = () => {
  return axios.get(baseUrl);
};

export default getTweets;
