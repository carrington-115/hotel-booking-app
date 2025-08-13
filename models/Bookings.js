const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingsSchema = new Schema({
  hotelId: mongoose.Types.ObjectId,
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },
  purpose: String,
});

module.exports = mongoose.model("bookings", bookingsSchema);
