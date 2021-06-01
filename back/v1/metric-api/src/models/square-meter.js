const mongoose = require("mongoose");

/**
 * Product model schema.
 */
const squareMeterSchema = new mongoose.Schema({
  _id: { type: Number, required: true, },
  value: { type: Number, required: true },
});

module.exports = mongoose.model("square-meter", squareMeterSchema);
