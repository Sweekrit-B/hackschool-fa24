// import dotenv
const dotenv = require("dotenv");
dotenv.config();

// create a config object with PORT
const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL, //allows us to access the DB URL we put into the .env file
};

console.log("DB_URL:", config.DB_URL);
console.log("PORT:", config.PORT);

const mongoose = require("mongoose");

mongoose
  .connect(config.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB: ", err));

module.exports = config;
