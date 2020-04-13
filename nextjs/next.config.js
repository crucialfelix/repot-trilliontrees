require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`
  // debug: process.env.NODE_ENV === "development"
});

// console.log(process.env);

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    API_URL: process.env.api_url,
    HOST: process.env.host
  }
};
