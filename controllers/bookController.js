const db = require("../models");

// Get Models
const BookModel = db.books;

// Add CRUD controller functions
async function getAllBooks(req, res) {
  try {
    const books = await BookModel.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function addBook(req, res) {
  let bookInfo = req.body;
  try {
    const book = await BookModel.create(bookInfo);
    res.status(201).json({
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function updateBookById(req, res) {
  const bookId = req.params.id;
  const bookUpdateInfo = req.body;
  try {
    const book = await BookModel.update(bookUpdateInfo, {
      where: {
        id: bookId,
      },
    });
    res.status(200).json({
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function deleteBookById(req, res) {
  const bookId = req.params.id;
  try {
    const book = await BookModel.destroy({
      where: {
        id: bookId,
      },
    });
    res.json(book);
    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

module.exports = {
  getAllBooks,
  addBook,
  updateBookById,
  deleteBookById,
};
