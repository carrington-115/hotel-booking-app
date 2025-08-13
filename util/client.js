require("dotenv").config();
const { MongoClient } = require("mongodb");
const mongoDbConnectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@hotel-cluster.ryc2zfs.mongodb.net/booking-app?retryWrites=true&w=majority&appName=hotel-cluster`;
const client = new MongoClient(mongoDbConnectionString);

module.exports.client = client;
module.exports.connection = mongoDbConnectionString;
