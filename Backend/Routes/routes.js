const express = require("express");
const getBook = require("../Controllers/BookController");
const bookRouter = express.Router();

bookRouter.get("/getBook", getBook);

module.exports = bookRouter;
