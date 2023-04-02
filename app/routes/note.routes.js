/**
 * Routes for Notes API.
 * @param {Object} app - Express application instance.
 * @returns {void}
*/

module.exports = app => {
    // Require Notes controller
    const notes = require("../controllers/note.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Note
    router.post("/", notes.create);
  
    // Retrieve all Notes
    router.get("/", notes.findAll);
  
    // Retrieve a single Note with id
    router.get("/:id", notes.findOne);
  
    // Update a Note with id
    router.put("/:id", notes.update);
  
    // Delete a Note with id
    router.delete("/:id", notes.delete);
  
    // Delete all Notes
    router.delete("/", notes.deleteAll);
  
    app.use('/api/notes', router);
  };