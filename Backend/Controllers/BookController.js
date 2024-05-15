const BookModel = require("../Model/BookModel");

async function getBook(req, res) {
  // const data = req.body;
  // console.log(data);
  try {
    const books = await BookModel.find();
    // console.log(books);
    res.status(200).json(books);
    // console.log(res.data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

module.exports = getBook;
