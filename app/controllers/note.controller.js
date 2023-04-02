/**
 * @module NoteController
 * @description Handles CRUD operations for notes using the Note model.
*/

const db = require("../models");
const Note = db.notes;

/**
 * * Creates a new note and saves it to the database.
 * @function create
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The saved note object or an error message.
*/
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Note
  const note = new Note({
    title: req.body.title,
    description: req.body.description
  });

  // Save Note in the database
  note
    .save(note)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Note."
      });
    });
};

/**
 * * Retrieves all notes from the database that match the given title search query.
 * @function findAll
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Array} An array of note objects or an error message.
*/
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Note.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving notes."
        });
      });
};

/**
 * * Retrieves a single note from the database with the given id.
 * @function findOne
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The note object with the given id or an error message.
*/
exports.findOne = (req, res) => {
    const id = req.params.id;

    Note.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Note with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Note with id=" + id });
      });
};

/**
 * * Updates a note in the database with the given id.
 * @function update
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} A success message or an error message.
*/
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Note.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Note with id=${id}. Maybe Note was not found!`
            });
          } else res.send({ message: "Note was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Note with id=" + id
          });
        });
};

/**
 * * Delete a Note with the specified id in the request.
 * @function delete
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {void}
*/
exports.delete = (req, res) => {
    const id = req.params.id;

    Note.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Note with id=${id}. Maybe Note was not found!`
          });
        } else {
          res.send({
            message: "Note was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Note with id=" + id
        });
      });
};

/**
 * * This function deletes all the Notes from the database.
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @returns {Object} The HTTP response object
*/
exports.deleteAll = (req, res) => {
    Note.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Notes were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all notes."
      });
    });
};