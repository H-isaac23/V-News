const axios = require("axios");
const baseUrl = "http://localhost:3001/tweets";

const getTweets = () => {
  return axios.get(baseUrl);
};

export default getTweets;
