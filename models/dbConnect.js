/* eslint-disable no-undef */
const mongoose = require("mongoose");

const MONGO_DB_URL = process.env.MONGO_DB_URL || "mongodb://localhost:27017/quiz_db";

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_DB_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = mongoose;