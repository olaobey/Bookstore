const express = require("express");
const bookController = require("../controllers/bookController");

const bookRouter = express.Router();

bookRouter.get("/", bookController.getAllBooks);
bookRouter.post("/", bookController.addBook);
bookRouter.put("/:id", bookController.updateBookById);
bookRouter.delete("/:id", bookController.deleteBookById);

module.exports = bookRouter;
