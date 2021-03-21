"use strict";

const axios = require(`axios`);

const httpExceptionHandler = require(`./httpExceptionHandler`);

const fetchStatamicResource = async apiUrl => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.data;
  } catch (e) {
    httpExceptionHandler(e);
  }
};

module.exports = fetchStatamicResource;