const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  hotelLocation: {
    type: String,
    required: true,
  },
  mapLocation: String,
  resources: {
    type: String,
    required: true,
  },
  roomTypes: {
    type: String,
    required: true,
  },
  startPrice: {
    type: Number,
    required: true,
  },
  endPrice: {
    type: Number,
    required: true,
  },
  hotelDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Listing", listingSchema);
