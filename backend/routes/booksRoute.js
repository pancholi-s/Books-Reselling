import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route for Save a new Book
router.post("/", async (request, response) => {
  try {
    // if (
    //   !request.body.title ||
    //   !request.body.author ||
    //   !request.body.publishYear ||
    //   !request.body.description ||
    //   !request.body.coverImage
    // ) {
    //   return response.status(400).send({
    //     message: "Send all required fields: title, author, publishYear",
    //   });
    // }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      description: request.body.description,
      coverImage: request.body.coverImage,
      isFeatured: request.body.isFeatured,
      isSold: request.body.isSold,
      cost: request.body.cost,
      sellerName: request.body.sellerName,
      sellerEmail: request.body.sellerEmail,
      sellerPhone: request.body.sellerPhone,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//search endpoint
router.get("/search", async (request, response) => {
  try {
    const { title, author, publishYear } = request.query; // Extract search parameters from query string

    // Create a query object that will only contain the search parameters that are provided
    const query = {};

    if (title) {
      query.title = { $regex: title, $options: "i" }; // Case-insensitive regex match for title
    }

    if (author) {
      query.author = { $regex: author, $options: "i" }; // Case-insensitive regex match for author
    }

    if (publishYear) {
      query.publishYear = publishYear; // Exact match for publish year
    }

    const books = await Book.find(query); // Find books that match the search criteria

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
