const { Schema, mongoose, model } = require("mongoose");

const bookSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },

    price: {
      required: true,
      type: String,
    },

    category: {
      required: true,
      type: String,
    },
    image: {
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BookModal = model("Book", bookSchema);
module.exports = BookModal;
