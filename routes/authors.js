const express = require("express");
const authorController = require("../controllers/authorController");

const authorRouter = express.Router();

authorRouter.get("/", authorController.getAllAuthors);
authorRouter.get("/", authorController.addAuthor);
authorRouter.put("/:id", authorController.updateAuthorById);
authorRouter.delete("/:id", authorController.deleteAuthorById);

module.exports = authorRouter;
