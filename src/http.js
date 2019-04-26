/**
 * Http.js
 *
 * Axios configuration for headers and request/response interceptors
 */
import axios from "axios";
import PubSub from "pubsub-js";

const http = axios.create({
  baseURL: "https://5c93afb84dca5d0014ad82b1.mockapi.io/api/"
});

// capture the last url in the event of a response error
let lastUrl;

http.interceptors.request.use(
  // request successful
  function(config) {
    lastUrl = config.url;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  // response successful
  function(response) {
    return response;
  },

  // response error so handle it
  function(error) {
    PubSub.publish("API_ERROR", { error: error.response, lastUrl: lastUrl });
    return Promise.reject(error);
  }
);

export default http;
