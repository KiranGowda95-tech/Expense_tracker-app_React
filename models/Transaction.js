const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please enter the text"],
  },
  amount: {
    type: Number,
    required: [true, "Please enter a positive or negative number "],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transacton", TransactionSchema);
