const db = require("../models");
const  axios = require("axios");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    axios
    .get("https://www.googleapis.com/books/v1/volumes/", { params: req.query })
    .then(results => results.data.items)
    .then(results => res.json(results))
    .catch(err => res.status(422).json(err));
  } 
};
