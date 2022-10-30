const db = require("../models");

// Get Models
const Author = db.books;

// Add CRUD controller functions
async function getAllAuthors(req, res) {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function addAuthor(req, res) {
  let bookInfo = req.body;
  try {
    const author = await Author.create(bookInfo);
    res.status(201).json({
      message: "Author added successfully",
      data: author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function updateAuthorById(req, res) {
  const authorId = req.params.id;
  const authorUpdateInfo = req.body;
  try {
    const author = await Author.update(authorUpdateInfo, {
      where: {
        id: authorId,
      },
    });
    res.status(200).json({
      message: "Author updated successfully",
      data: author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function deleteAuthorById(req, res) {
  const authorId = req.params.id;
  try {
    const author = await Author.destroy({
      where: {
        id: authorId,
      },
    });
    res.json(author);
    res.status(200).json({
      message: "Author deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getAllAuthors,
  addAuthor,
  updateAuthorById,
  deleteAuthorById,
};
